import Image from "next/image"

import Logo from "@/app/assets/GAMELOG.png"

import styles from "./styles.module.css"

export default function Navbar() {
	return (
		<nav className={styles.navbarContainer}>
			<Image src={Logo} alt="SKOLZ ES GABO" />
		</nav>
	)
}
