
import { BookCall } from "@/components";
import { SectionHeader } from "@/pages/Services";
import CardButton from "./CardButton";

import Pinya from "@/assets/pinya.svg";
import Ubas from "@/assets/ubas.svg";

export default function Application() {
  return (
    <>
      <SectionHeader
          title="Application Services"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum."/>

      <div className="flex gap-6 px-2 mt-5">
        <CardButton
          title="Finya"
          subtitle="Loan Management System."
          icon={Pinya}
          iconBg="bg-orange-500"
          href=""/>

        <CardButton
          title="Ubas"
          subtitle="HR and Employee System."
          icon={Ubas}
          iconBg="bg-purple-400"
          href=""/>
      </div>

      <div className="px-6 py-12">
          <BookCall />
      </div>
    </>
  );
}