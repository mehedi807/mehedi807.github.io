import { ContactLinks } from "@/components/ui/contact-links";
import { ArrowRightIcon } from "@/components/ui/icons";
import { contact } from "@/config/contact";
import { getResumeUrl } from "@/config/site";
import page from "@/components/layout/page.module.css";
import styles from "./about.module.css";

export function ResumeContactSection() {
  const resumeUrl = getResumeUrl();
  return (
    <section
      className={`${page.section} ${page.sectionGrid}`}
      aria-labelledby="resume-heading"
    >
      <h2 id="resume-heading" className={page.sectionTitle}>
        Let’s find the next thing.
      </h2>
      <div className={page.reading}>
        <p>
          I’m interested in conversations about backend and applied AI work,
          whether that’s a role on a team or a product you’re building.
        </p>
        <ContactLinks />
      </div>
    </section>
  );
}
