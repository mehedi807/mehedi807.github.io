import Image from "next/image";
import page from "@/components/layout/page.module.css";
import { aboutContent } from "../data/about-content";
import styles from "./about.module.css";

export function IntroSection() {
  return (
    <header className={styles.introGrid}>
      <div>
        <h1 className={page.title}>{aboutContent.title}</h1>
        <p className={page.intro}>{aboutContent.introduction}</p>
        <p className={styles.background}>{aboutContent.background}</p>
      </div>
      <Image
        className={styles.portrait}
        src="/images/profile/mehedi.png"
        alt="Mehedi Hasan"
        width={1195}
        height={896}
        sizes="(max-width: 800px) 210px, 260px"
        priority
        unoptimized
      />
    </header>
  );
}
