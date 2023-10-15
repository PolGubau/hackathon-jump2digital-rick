import { Character } from "@/types";
import { Icon, IconNames, Colors, formatString, Text, applyInvertedColor, Image } from "pol-ui";
import React from "react";
import { TbGenderFemale, TbGenderMale } from "react-icons/tb";
interface Props {
	character: Character;
}

// GenderIcon is a icon selector from the gender
const GenderIcon = ({ gender }: { gender: string }): React.JSX.Element => {
	switch (gender) {
		case "Male":
			return <TbGenderMale size={23} className={`${applyInvertedColor(Colors.primary)} `} />;
		case "Female":
			return <TbGenderFemale size={23} className={`${applyInvertedColor(Colors.primary)} `} />;
		default:
			return <Icon icon={IconNames.question} className={`${applyInvertedColor(Colors.primary)}`} />;
	}
};
// This is the content we will use in the modal, it will display the character's information
const CharacterContent: React.FC<Props> = ({ character }) => {
	// create a dni number using the id of the character; create a 9 digit number
	const dni = character.id.toString().padStart(9, "0");

	// the nationality is the location's name, if it's null, we will display "Unknown"
	const nationality = character.location.name ?? "Unknown";

	// the gender extracted from the character's information
	const gender = character.gender;

	const species = character.species ?? "Unknown";
	return (
		<section className="flex h-full flex-col justify-between  ">
			<header className="flex gap-2 justify-between">
				<div className="mb-4 flex gap-2 items-center">
					<Icon icon={IconNames.location} color={Colors.secondary} />
					<Text
						maxLines={1}
						color={Colors.secondary}
						size={18}
						value={formatString(character.origin.name)}
					/>
				</div>
			</header>

			{/* Information is displayed as Spanish DNIs */}
			<div className="flex row gap-4 justify-start items-start h-full">
				<div className="flex gap-1 flex-col h-full">
					<Image className=" rounded-xl object-cover " src={character.image} alt={character.name} />
					<Text value={`DNI ${dni}`} />
				</div>
				<ul className="flex flex-col gap-2">
					<li className="flex gap-0 flex-col">
						<Text size={10} value={"NAME"} color={Colors.secondary} />

						<Text
							className={character.status === "Dead" ? "line-through" : ""}
							weight={800}
							size={18}
							value={character.name}
							color={character.status === "Dead" ? Colors.danger : Colors.accent}
						/>
					</li>
					<div className="flex gap-4">
						<li className="flex gap-0 flex-col items-center">
							<Text size={10} value={"GENDER"} color={Colors.secondary} />
							<GenderIcon gender={gender} />
						</li>
						<li className="flex flex-col">
							<Text size={10} value={"SPECIES"} color={Colors.secondary} />

							<Text maxLines={1} size={18} value={formatString(species)} />
						</li>
					</div>
					<li className="flex gap-0 flex-col w-full">
						<Text size={10} value={"Nationality"} color={Colors.secondary} />

						<Text maxLength={25} maxLines={2} size={18} value={formatString(nationality)} />
					</li>
				</ul>
			</div>
		</section>
	);
};

export default CharacterContent;
