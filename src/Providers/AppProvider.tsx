import { useRecoilState } from "recoil";
import {
  Colors,
  ModalProps,
  PopupsProvider,
  ToastProps,
  applyBgColor,
} from "pol-ui";
import { useTheme } from "../hooks/useTheme";
import { modalState, toastState } from "../states";
import { Router } from "../Router";

const AppProvider = (): React.JSX.Element => {
  const [toast, setToast] = useRecoilState<ToastProps[]>(toastState);
  const [modal, setModal] = useRecoilState<ModalProps>(modalState);

  const { theme } = useTheme();

  return (
    <div
      className={`${theme.theme} ${
        theme.darkMode ? "dark" : ""
      } overflow-hidden max-w-[100vw] min-h-screen`}
    >
      <div
        className={`${applyBgColor(
          Colors.background
        )}  w-full min-h-screen overflow-hidden`}
      >
        <PopupsProvider
          modal={modal}
          setModal={setModal}
          toasts={toast}
          setToast={setToast}
        >
          <Router />
        </PopupsProvider>
      </div>
    </div>
  );
};

export default AppProvider;
