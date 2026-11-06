import { AboutPage } from "@/features/about/about-page";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About",
  description:
    "The background, expertise, and working approach of Mehedi Hasan, a backend and applied AI engineer.",
  path: "/about",
});

export default function Page() {
  return <AboutPage />;
}
