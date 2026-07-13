
import { BookCall } from "@/components";
import { Thumbnail, SectionHeader, SectionBody } from "@/pages/Services";
import { Scheme } from "./scheme";

export default function Security() {
  return (
    <>
      <Thumbnail />
            
      <SectionHeader
          title="Security Services"
          description="Comprehensive threat prevention and data security tailored to keep your business safe."/>

      <SectionBody services={Scheme} />

      <div className="px-6 py-6">
          <BookCall />
      </div>

    </>
  );
}