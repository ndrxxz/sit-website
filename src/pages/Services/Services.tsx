import { useEffect, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import styles from "./Services.module.css";

import { Seo } from "@/components";
import { tabs } from "./tabs";

function Services() {
    const swiperRef = useRef<SwiperType | null>(null);

    const getTabFromUrl = () => {
        const params = new URLSearchParams(window.location.search);
        const tab = Number(params.get("tab"));

        return Number.isInteger(tab) && tab >= 0 && tab < tabs.length
            ? tab
            : 0;
    };

    const [active, setActive] = useState(getTabFromUrl);

    const handleTabClick = (index: number) => {
        swiperRef.current?.slideTo(index);
    };

    const handleSlideChange = (swiper: SwiperType) => {
        const index = swiper.activeIndex;

        setActive(index);

        const url = new URL(window.location.href);
        url.searchParams.set("tab", String(index));

        window.history.replaceState({}, "", url);
    };

    const renderTabs = () =>
        tabs.map(({ title, icon: Icon }, index) => (
            <button
                key={title}
                type="button"
                className={`${styles.sideBarBtn} ${active === index ? "active" : ""}`}
                aria-current={active === index}
                onClick={() => handleTabClick(index)}
            >
                <span>
                    <Icon />
                </span>
                <span>{title}</span>
            </button>
        ));

    return (
        <>
        <Seo
            title="Services"
            description="Hardware, Software, Security, and Application Services."
            canonical="/services"/>

        <section className="relative flex flex-col md:flex-row">

            {/* Desktop Sidebar */}
            <nav
                className={`${styles.sideBarDesktop} hidden md:flex`}
                aria-label="Service Categories">
              {renderTabs()}
            </nav>

            {/* Mobile Bottom Tabs */}
            <nav
                className={`${styles.sideBarMobile} flex md:hidden`}
                aria-label="Service Categories">
                {renderTabs()}
            </nav>

            {/* Content */}
            <main className="w-full md:pl-[220px] min-w-0 py-3 pb-20 lg:pb-3">
                <Swiper
                    className="w-full"
                    modules={[EffectFade]}
                    effect="fade"
                    fadeEffect={{
                        crossFade: true,
                    }}
                    speed={500}
                    allowTouchMove={false}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;

                        const index = getTabFromUrl();

                        swiper.slideTo(index, 0);
                        setActive(index);
                    }}
                    onSlideChange={handleSlideChange}>
                    {tabs.map(({ title, component: Component }) => (
                    <SwiperSlide key={title} className="w-full">
                        <Component />
                    </SwiperSlide>
                ))}
                </Swiper>
            </main>
            
        </section>
        </>
    );
}

export default Services;