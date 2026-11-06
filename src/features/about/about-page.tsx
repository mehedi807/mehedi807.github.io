import { PageShell } from "@/components/layout/page-shell";
import page from "@/components/layout/page.module.css";
import { IntroSection } from "./components/intro-section";
import { ExpertiseSection } from "./components/expertise-section";
import { ApproachSection } from "./components/approach-section";
import { ExperienceSection } from "./components/experience-section";
import { ResumeContactSection } from "./components/resume-contact-section";

export function AboutPage() {
  return (
    <PageShell currentPath="/about">
      <div className={page.page}>
        <div className={page.container}>
          <IntroSection />
          <ExpertiseSection />
          <ApproachSection />
          <ExperienceSection />
          <ResumeContactSection />
        </div>
      </div>
    </PageShell>
  );
}
