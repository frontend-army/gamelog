import Logo from "@/app/assets/GAMELOG.svg";
import FrontendArmyLogo from "@/app/assets/FEA_logo.png";
import Image from "next/image";
import styles from "./styles.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <Image src={Logo} height={40} width={143} alt="logo" />
        {/*@Capi, cualquier gilada va aca. */}
      </div>
      <div className={styles.footerLegendWrapper}>
        <Image
          src={FrontendArmyLogo}
          height={36}
          width={36}
          alt="logo Frontend Army"
        />
        <p className={styles.footerLegend}>
          con mucho cariño y huevo los pibes de la Frontend Army
        </p>
      </div>
    </footer>
  );
};
