import { useModal } from "@/hooks";
import { Character as ICharacter } from "@/types";
import { Card, Colors, Sizes, Text, applyBgColor } from "pol-ui";
import React from "react";
import CharacterContent from "./CharacterContent";

interface Props {
	character: ICharacter;
}

const Character: React.FC<Props> = ({ character }) => {
	// create a dni number using the id of the character; create a 9 digit number
	// by adding 0's to the front of the id

	const { triggerModal } = useModal();
	const handleModal = () => {
		triggerModal({
			title: "",
			children: <CharacterContent character={character} />,
		});
	};

	const rgbfromStatus = (status: string): string => {
		switch (status) {
			case "Alive":
				return "rgba(0,255,0,0.2)";
			case "Dead":
				return "rgba(255, 0, 0, 0.2)";
			default:
				return "rgba(255, 230, 0, 0.2)";
		}
	};

	return (
		<Card
			lightColor={rgbfromStatus(character.status)}
			onClick={handleModal}
			padding={Sizes.md}
			bgColor={Colors.primary}
			rounded="xl"
			bgOpacity={90}
			className="flex flex-grow flex-col  bg-primary gap-4 cursor-pointer hover:scale-95 transition-all h-64 md:h-96 "
			style={{
				backgroundImage: `url(${character.image})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<div className="flex flex-col flex-grow justify-end gap-2">
				{character.status === "Dead" && (
					<Text className={`${applyBgColor(Colors.danger)} px-2 py-1 text-lg rounded-xl`}>💀</Text>
				)}
				<Text className={`${applyBgColor(Colors.background)} px-3 py-2 text-2xl rounded-xl`}>
					{character.name}
				</Text>
			</div>
		</Card>
	);
};

export default Character;
