
import { BookCall } from "@/components";
import { Thumbnail, SectionHeader, SectionBody } from "@/pages/Services";
import { Scheme } from "./scheme";

export default function Security() {
  return (
    <>
      <Thumbnail />
            
      <SectionHeader
          title="Security Services"
          description="Cyber threats are constantly evolving. Protect your business with comprehensive security solutions that keep your systems, data, and operations safe 24/7."/>

      <SectionBody services={Scheme} />

      <div className="px-6 py-6">
          <BookCall />
      </div>

    </>
  );
}