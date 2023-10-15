import { useEffect, useMemo } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Characters } from "@/types";
import { API } from "@/Models/api";
interface Props {
	name?: string;
}
export const useFetch = ({ name }: Props) => {
	const endpoint = useMemo(() => {
		return `${API.characters}?name=${name ?? ""}`;
	}, [name]);
	const { data, error, fetchNextPage, status, hasNextPage, refetch } = useInfiniteQuery(
		["characters"],
		({ pageParam = 1 }) =>
			fetch(`${endpoint}&page=${pageParam}`).then((res) =>
				res.json().then((data) => {
					if (data.error) {
						return {
							error: data.error,
						};
					}
					return data;
				})
			),
		{
			getNextPageParam: (lastPage: Characters) => {
				if (lastPage.error ?? lastPage.results.length === 0) {
					return {
						error: lastPage.error,
					};
				}
				// check if there is a next page
				if (lastPage.info?.next === null) return false;

				// check the prev page to get the current page
				if (lastPage.info?.prev === null) return 2;

				const previousPage = lastPage?.info?.prev ? +lastPage.info?.prev?.split("=")[1] : 0;
				const currentPage = previousPage + 1;

				if (currentPage === lastPage?.info?.pages) return false;
				return currentPage + 1;
			},
		}
	);

	// trigger the useInfiniteQuery each time the name changes
	useEffect(() => {
		refetch();
	}, [name]);
	const characters = useMemo(
		() =>
			data?.pages.reduce((prev, page) => {
				return {
					info: page.info,
					results: [...prev.results, ...page.results],
				};
			}),
		[data]
	);

	return {
		error,
		fetchNextPage,
		status,
		hasNextPage,
		characters,
		data,
	};
};
