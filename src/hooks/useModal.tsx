import ModalStateAtom from "@/States/modal_state";
import React from "react";
import { useRecoilState } from "recoil";

export const useModal = () => {
	const [modal, setModal] = useRecoilState(ModalStateAtom);
	const closeModal = () => setModal({ ...modal, isOpen: false });

	interface TriggerModalProps {
		title?: string;
		children: React.JSX.Element;
	}

	const triggerModal = ({ title, children }: TriggerModalProps) => {
		setModal({ ...modal, isOpen: true, title: title ?? "", children });
	};

	return { modal, setModal, closeModal, triggerModal };
};
