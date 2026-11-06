import { HomePage } from "@/features/home/home-page";
import { JsonLd } from "@/components/seo/json-ld";
import { site } from "@/config/site";
import { pageStructuredData } from "@/lib/structured-data";

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageStructuredData({
          title: site.title,
          description: site.description,
          path: "/",
        })}
      />
      <HomePage />
    </>
  );
}
