import { AboutPage } from "@/features/about/about-page";
import { JsonLd } from "@/components/seo/json-ld";
import { pageMetadata } from "@/lib/metadata";
import { pageStructuredData } from "@/lib/structured-data";

const description =
  "The background, expertise, and working approach of Mehedi Hasan, a backend and applied AI engineer.";

export const metadata = pageMetadata({
  title: "About",
  description,
  path: "/about",
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageStructuredData({
          title: "About Mehedi Hasan",
          description,
          path: "/about",
          type: "ProfilePage",
        })}
      />
      <AboutPage />
    </>
  );
}
