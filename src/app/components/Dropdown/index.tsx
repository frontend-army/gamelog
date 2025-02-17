"use client";

import { useRef, useState } from "react";

import chevron from "@/app/assets/chevron.svg";

import styles from "./styles.module.css";
import Image from "next/image";
import { GAME_STATUS, GameStatusKey } from "@/app/types";
import { useRouter, useSearchParams } from "next/navigation";
import useClickOutside from "@/app/hooks/useClickOutside";

type Option = Record<string | GameStatusKey, string>;

type Props = {
  options: Option;
  placeholder: string;
  onSelect?: (optionKey: GameStatusKey | string) => void;
};

export default function Dropdown({ options, placeholder, onSelect }: Props) {
  const [selected, setSelected] = useState<GameStatusKey | string>();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const params = useSearchParams();
  const queryParams = new URLSearchParams(params);

  const containerRef = useRef<HTMLDivElement>(null);

  useClickOutside(containerRef, () => {
    setIsOpen(false);
  });

  const selectOption = (optionKey: GameStatusKey | string) => {
    setSelected(optionKey);
    setIsOpen(false);
    if (optionKey !== "all") {
      queryParams.set("status", optionKey);
    } else {
      queryParams.delete("status");
    }
    router.push(queryParams ? `?${queryParams.toString()}` : "");
    onSelect?.(optionKey);
  };

  return (
    <div className={styles.container} ref={containerRef}>
      <button
        className={styles.selectButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        {GAME_STATUS[selected as GameStatusKey] || placeholder}{" "}
        <Image src={chevron} alt="" width={16} height={16} />
      </button>
      {isOpen && (
        <div className={styles.optionsContainer}>
          {Object.entries(options).map(([key, value]) => (
            <button
              className={styles.option}
              key={key}
              onClick={() => selectOption(key as GameStatusKey)}
            >
              {value}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
