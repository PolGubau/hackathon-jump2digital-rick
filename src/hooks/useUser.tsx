import { KEYS } from "@/Models/keys";
import UserStateAtom from "@/States/User.state";
import { UserStorage } from "@/types/types";
import { setToLocalStorage } from "pol-ui";
import { useRecoilState } from "recoil";
import jwt from "jwt-decode";

interface SaveUserProps {
	user: UserStorage;
	rememberMe: boolean;
}

const useUser = () => {
	const [userAtom, setUserAtom] = useRecoilState(UserStateAtom);

	const saveUser = ({ user, rememberMe }: SaveUserProps) => {
		const { id, username, token } = user;
		const userStorage: UserStorage = {
			id,
			username,
			token,
		};

		setUserAtom(userStorage);
		console.log("user saved : ", userStorage);

		if (rememberMe) {
			setToLocalStorage(KEYS.user, userStorage);
		}
	};

	const getUser = () => {
		// function called when you need information about the user.
		// first check if user is in atom, if not check local storage, if not return null and redirect to login page (if not already there)

		const userInState = userAtom;

		if (userInState) {
			return userInState;
		}

		const userInLocalStorage = localStorage ? localStorage.getItem(KEYS.user) : null;

		if (userInLocalStorage) {
			return JSON.parse(userInLocalStorage);
		}

		return null;
	};

	const verifyUser = (): boolean => {
		const user = getUser();

		// We decode the JWT to get the user name from it and verify it's valid
		try {
			const decodedJWT: {
				sub: string;
				iat: number;
				exp: number;
			} = jwt(user.token);
			// We get the username from the decoded JWT
			const userStoredInJWT = decodedJWT.sub;

			const isAValidToken = userStoredInJWT === user.username;

			return isAValidToken;
		} catch (error) {
			return false;
		}
	};

	return { saveUser, getUser, verifyUser };
};

export default useUser;
