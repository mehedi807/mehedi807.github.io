import type { ReactNode } from "react";

import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function PageShell({
  children,
  currentPath = "/",
}: {
  children: ReactNode;
  currentPath?: string;
}) {
  return (
    <>
      <SiteHeader currentPath={currentPath} />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
