import ToastStateAtom from "@/States/toast.state";
import { ToastVariant, generateUUID } from "pol-ui";
import { useRecoilState } from "recoil";

const useToast = () => {
	const [toasts, trigger] = useRecoilState(ToastStateAtom);

	const triggerToast = ({
		uuid = generateUUID(),
		message = "Copied to clipboard",
		variant = "success" as ToastVariant,
		duration = 3000,
		action,
	}: {
		uuid?: string;
		message?: string;
		variant?: ToastVariant;
		duration?: number;
		action?: {
			label: string;
			onClick: () => void;
		};
	}): void => {
		trigger([
			...toasts,
			{
				uuid,
				message,
				variant,
				duration,
				action,
			},
		]);
	};

	return { triggerToast };
};

export default useToast;
