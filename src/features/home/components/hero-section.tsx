import Image from "next/image";
import Link from "next/link";

import { ArrowRightIcon } from "@/components/ui/icons";

import { homeContent } from "../data/home-content";
import styles from "./hero-section.module.css";

export function HeroSection() {
  const { introduction } = homeContent;

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.inner}>
        <h1 className={styles.headline} id="hero-heading">
          {homeContent.heading.join(" ")}
        </h1>

        <div className={styles.authorBlock}>
          <figure className={styles.portrait}>
            <Image
              src="/images/profile/mehedi.png"
              alt="Mehedi Hasan"
              width={1195}
              height={896}
              sizes="(max-width: 380px) 128px, (max-width: 480px) 112px, (max-width: 720px) 160px, 224px"
              priority
              unoptimized
            />
          </figure>

          <div className={styles.note}>
            <p className={styles.introduction}>
              {introduction.opening}
              <strong>{introduction.name}</strong>
              {introduction.role}
            </p>
            <p className={styles.description}>{homeContent.description}</p>
            <div className={styles.actions}>
              <a className={styles.workLink} href="#work">
                {homeContent.workLink}
                <ArrowRightIcon />
              </a>
              <Link className={styles.aboutLink} href="/about">
                {homeContent.aboutLink}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
