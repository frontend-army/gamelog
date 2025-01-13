'use client'

import { useState } from "react";

import chevron from "@/app/assets/chevron.svg";

import styles from "./styles.module.css";
import Image from "next/image";

type Props = {
	options: any;
	placeholder: string;
	onSelect?: any;
}

export default function Dropdown({ options, placeholder, onSelect }: Props) {
	const [selected, setSelected] = useState();
	const [isOpen, setIsOpen] = useState(false);

	const selectOption = (option: any) => {
		setSelected(option);
		setIsOpen(false);
		onSelect?.();
	}

	return (
		<div className={styles.container}>
			<button className={styles.selectButton} onClick={() => setIsOpen(!isOpen)}>
				{selected || placeholder} <Image src={chevron} alt="" width={20} height={20} />
			</button>
			{isOpen &&
				<div className={styles.optionsContainer}>
					{options.map((option: any) =>
						<button className={styles.option} key={option} onClick={() => selectOption(option)}>
							{option}
						</button>
					)}
				</div>
			}
		</div>
	)
}