'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "@/app/assets/GAMELOG.svg";

import styles from "./styles.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const inGamesRoute = pathname.includes('games');
  
  return (
    <nav className={styles.navbarContainer}>
      <Link href={'/'}>
        <Image src={Logo} className={styles.navbarLogo} alt="GameLog Logo" />
      </Link>
      {!inGamesRoute && <Link href={'/games'} className={styles.addGamesLink}>
        Add games to library
      </Link>}
    </nav>
  );
}
