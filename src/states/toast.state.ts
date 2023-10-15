import { ToastProps } from "pol-ui";
import { atom } from "recoil";

const ToastStateAtom = atom({
	key: "ToastState",
	default: [] as ToastProps[],
});

export default ToastStateAtom;
