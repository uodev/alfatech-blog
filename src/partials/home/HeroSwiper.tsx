'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';

import HeroBlogCard from "@/components/HeroBlogCard";
import { IBlogs } from '@/types/types';
import 'swiper/css';
import "swiper/css/effect-fade"
import { useCallback, useRef } from 'react';


interface Props {
    firstBlog: IBlogs;
    secondBlog: IBlogs;
    thirdBlog: IBlogs;
}

const HeroSwiper = ({ firstBlog, secondBlog, thirdBlog }: Props) => {

    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        // @ts-ignore
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        // @ts-ignore
        sliderRef.current.swiper.slideNext();
    }, []);

    return (
        <section className="w-full h-[655px] relative">
            <Swiper
                ref={sliderRef}
                slidesPerView={1}
                effect='fade'
                loop={true}
                navigation={true}
                modules={[EffectFade]}
            >
                <SwiperSlide><HeroBlogCard blog={firstBlog} /></SwiperSlide>
                <SwiperSlide><HeroBlogCard blog={secondBlog} /></SwiperSlide>
                <SwiperSlide><HeroBlogCard blog={thirdBlog} /></SwiperSlide>
            </Swiper>
            <div className='bg-orange text-white p-4 w-fit flex gap-4 absolute bottom-20 z-10 right-20'>
                <div className="prev-arrow cursor-pointer" onClick={handlePrev} >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>

                </div>
                <div className="next-arrow cursor-pointer" onClick={handleNext}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>

                </div>
            </div>
        </section>
    );
}

export default HeroSwiper
