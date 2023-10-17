import { ModalProps } from "pol-ui";
import { atom } from "recoil";

const initialState: ModalProps = {
	isOpen: false,
	handleClose: () => {},
	children: null,
	title: "",
	icon: undefined,
	cancelButton: undefined,
	submitButton: undefined,
};

const ModalStateAtom = atom<ModalProps>({
	key: "modalState",
	default: initialState,
});
export default ModalStateAtom;
