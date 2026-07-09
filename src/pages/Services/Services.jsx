import { StructuredData, Seo } from "@/components/seo";

function Services() {
  return (
    <>
      <Seo title="" description="" canonical="" />
      {servicesSchema.map((service, i) => (
        <StructuredData key={i} data={service} />
      ))}
      {/* rest of Services page */}
    </>
  )
}

export default Services;