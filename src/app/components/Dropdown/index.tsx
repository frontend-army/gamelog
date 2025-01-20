'use client'

import { useState } from "react";

import chevron from "@/app/assets/chevron.svg";

import styles from "./styles.module.css";
import Image from "next/image";
import { GAME_STATUS, GameStatusKey } from '@/app/types'
import { useRouter, useSearchParams } from "next/navigation";


type Props = {
	options: typeof GAME_STATUS;
	placeholder: string;
	onSelect?: (optionKey: GameStatusKey) => void;
}

export default function Dropdown({ options, placeholder, onSelect }: Props) {
	const [selected, setSelected] = useState<GameStatusKey>();
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();
	const params = useSearchParams();
	const queryParams = new URLSearchParams(params);

	const selectOption = (optionKey: GameStatusKey) => {
		setSelected(optionKey);
		setIsOpen(false);
		queryParams.set('status', optionKey);
		router.push(`?${queryParams.toString()}`);
		onSelect?.(optionKey);
	}

	return (
		<div className={styles.container}>
			<button className={styles.selectButton} onClick={() => setIsOpen(!isOpen)}>
				{selected || placeholder} <Image src={chevron} alt="" width={20} height={20} />
			</button>
			{isOpen &&
				<div className={styles.optionsContainer}>
					{Object.entries(options).map(([key, value]) =>
						<button className={styles.option} key={key} onClick={() => selectOption(key as GameStatusKey)}>
							{value}
						</button>
					)}
				</div>
			}
		</div>
	)
}