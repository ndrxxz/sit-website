import { useRef, useState } from "react";
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
    const [active, setActive] = useState(0);

    const handleTabClick = (index: number) => {
        swiperRef.current?.slideTo(index);
    };

    const handleSlideChange = (swiper: SwiperType) => {
        setActive(swiper.activeIndex);
    };

    const renderTabs = () =>
    tabs.map(({ title, icon: Icon }, index) => (
        <button
            key={title}
            type="button"
            className={`${styles.sideBarBtn} ${
                active === index ? "active" : ""
            }`}
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
            canonical="/services"
        />

        <section className="flex flex-col sm:flex-row gap-4">
            
            {/* Mobile bottom tabs */}
            <nav
                className={`${styles.sideBarMobile} flex md:hidden`}
                aria-label="Service Categories"
            >
                {renderTabs()}
            </nav>

            {/* Desktop sidebar */}
            <nav
                className={`${styles.sideBarDesktop} hidden md:flex sm:w-[30%] lg:w-[25%]`}
                aria-label="Service Categories"
            >
                {renderTabs()}
            </nav>

            <main className="md:ml-[30%] lg:ml-[25%] w-full sm:w-[70%] lg:w-[75%] py-3 pb-20 lg:pb-3">
                <Swiper
                    modules={[Mousewheel, EffectFade]}
                    effect="fade"
                    fadeEffect={{
                        crossFade: true,
                    }}
                    speed={500}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    onSlideChange={handleSlideChange}>
                    {tabs.map(({ title, component: Component }) => (
                        <SwiperSlide key={title}>
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