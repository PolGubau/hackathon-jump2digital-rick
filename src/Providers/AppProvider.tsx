import { useRecoilState } from "recoil";
import { Colors, ModalProps, PopupsProvider, ToastProps, applyBgColor } from "pol-ui";
import { Router } from "@/Router";
import { useTheme } from "@/hooks/useTheme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { modalState, toastState } from "@/States";

const AppProvider = (): React.JSX.Element => {
	const [toast, setToast] = useRecoilState<ToastProps[]>(toastState);
	const [modal, setModal] = useRecoilState<ModalProps>(modalState);

	const { theme } = useTheme();
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<div
				className={`${theme.theme} ${
					theme.darkMode ? "dark" : ""
				} overflow-hidden max-w-[100vw] min-h-screen`}
			>
				<div className={`${applyBgColor(Colors.background)}  w-full min-h-screen `}>
					<PopupsProvider modal={modal} setModal={setModal} toasts={toast} setToast={setToast}>
						<Router />
					</PopupsProvider>
				</div>
			</div>
		</QueryClientProvider>
	);
};

export default AppProvider;
