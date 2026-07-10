import { BookCall } from "@/components";
import { Thumbnail, SectionHeader, SectionBody } from "@/pages/Services";
import { Scheme } from "./scheme";

export default function Software() {
  return (
    <>
      <Thumbnail />

      <SectionHeader
        title="Software Services"
        description="Managing application installations, system updates, and troubleshooting software errors."
      />

      <SectionBody services={Scheme} />

      <div className="px-6 py-6">
        <BookCall />
      </div>
    </>
  );
}
