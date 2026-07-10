import { BookCall } from "@/components";
import { SectionHeader, SectionBody } from "@/pages/Services";
import { Scheme } from "./scheme";

export default function Hardware() {
    return (
        <>
            {/*<Thumbnail />*/}
            
            <SectionHeader
                title="Hardware Services"
                description="Build, upgrade, and maintain your computer systems with reliable hardware solutions. We provide expert services to maximize performance, improve reliability, and extend the lifespan of your devices."/>

            <SectionBody services={Scheme} />

            <div className="px-6 py-6">
                <BookCall />
            </div>
            
        </>
    );
}