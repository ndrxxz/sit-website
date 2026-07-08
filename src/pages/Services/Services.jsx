import JsonLd from "@/components/seo/JsonLd";
import { servicesSchema } from "@/config/siteData";

function Services() {
  return (
    <>
      {servicesSchema.map((service, i) => (
        <JsonLd key={i} data={service} />
      ))}
      {/* rest of Services page */}
    </>
  )
}

export default Services;