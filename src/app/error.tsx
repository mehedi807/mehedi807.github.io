"use client";

import Link from "next/link";
import { PageShell } from "@/components/layout/page-shell";
import { Button } from "@/components/ui/button";
import page from "@/components/layout/page.module.css";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <PageShell>
      <div className={page.page}>
        <div className={page.container}>
          <h1 className={page.title}>Something interrupted this page.</h1>
          <p className={page.intro}>
            Try loading it again, or return home and choose another page.
          </p>
          <div className={page.articleEnd}>
            <Button onClick={reset}>Try again</Button>
            <Link href="/" className={page.textLink}>
              Back home
            </Link>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
