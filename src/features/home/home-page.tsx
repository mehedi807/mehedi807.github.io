import { PageShell } from "@/components/layout/page-shell";
import { getPostSummaries } from "@/features/blog/lib/posts";
import { getFeaturedProjects } from "@/features/projects/lib/projects";

import { HeroSection } from "./components/hero-section";
import { SelectedProjectsSection } from "./components/selected-projects-section";
import { LatestPostsSection } from "./components/latest-posts-section";
import { ContactSection } from "./components/contact-section";

export function HomePage() {
  return (
    <PageShell>
      <HeroSection />
      <SelectedProjectsSection projects={getFeaturedProjects()} />
      <LatestPostsSection posts={getPostSummaries().slice(0, 3)} />
      <ContactSection />
    </PageShell>
  );
}
