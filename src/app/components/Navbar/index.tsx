import Image from "next/image";

import Logo from "@/app/assets/GAMELOG.svg";

import styles from "./styles.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbarContainer}>
      <Image src={Logo} className={styles.navbarLogo} alt="GameLog Logo" />
    </nav>
  );
}
