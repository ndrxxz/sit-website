import { BookCall } from "@/components";
import { Thumbnail, SectionHeader, SectionBody } from "@/pages/services";
import { Scheme } from "./scheme";

export default function Hardware() {
    return (
        <>
            <Thumbnail />
            
            <SectionHeader
                title="Hardware Services"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget ligula."/>

            <SectionBody services={Scheme} />

            <div className="px-6 py-6">
                <BookCall />
            </div>
            
        </>
    );
}