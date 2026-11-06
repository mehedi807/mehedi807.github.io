import Link from "next/link";
import { PageShell } from "@/components/layout/page-shell";
import page from "@/components/layout/page.module.css";

export default function NotFound() {
  return (
    <PageShell>
      <div className={page.page}>
        <div className={page.container}>
          <h1 className={page.title}>This page isn’t here.</h1>
          <p className={page.intro}>
            The link may have changed, or the page hasn’t been published.
            There’s still plenty to explore.
          </p>
          <div className={page.articleEnd}>
            <Link href="/" className={page.textLink}>
              Back home
            </Link>
            <Link href="/projects" className={page.textLink}>
              Explore projects
            </Link>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
