import JsonLd from "@/components/seo/JsonLd";
import { organizationSchema } from "@/config/siteData";

function Home() {
  return (
    <>
      <JsonLd data={organizationSchema} />
    </>
  );
}

export default Home;
