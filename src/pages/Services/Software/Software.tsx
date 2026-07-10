import { BookCall } from "@/components";
import { Thumbnail, SectionHeader, SectionBody } from "@/pages/Services";
import { Scheme } from "./scheme";

export default function Software() {
  return (
    <>
      <Thumbnail />

      <SectionHeader
        title="Software Services"
        description="Expert technical support, network design, and security management tailored to maximize your system's efficiency and reliability."
      />

      <SectionBody services={Scheme} />

      <div className="px-6 py-6">
        <BookCall />
      </div>
    </>
  );
}
