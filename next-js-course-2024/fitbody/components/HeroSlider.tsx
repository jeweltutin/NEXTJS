'use client';
// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CustomButton from './CustomButton';
import SwiperNavButtons from './SwiperNavButtons';

const HeroSlider = () => {
    return <Swiper>
        <SwiperSlide>
            <div className="pt-48 h-full flex justify-end">
                <div className="flex flex-col items-center lg:items-start lg:max-w-[700px]">
                    <h1 className="h1 text-center lg:text-left mb-2">
                        <span>Where hard</span> work meets success
                    </h1>
                    <p className="text-white italic text-center lg:text-left mb-4">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
                        commodi explicabo consectetur nulla facere. Harum pariatur est,
                    </p>
                    <CustomButton text="Get Started" containerStyle="w-[196px] h-[62px] bg-red-300" />
                </div>
            </div>
        </SwiperSlide>
        <SwiperNavButtons />
    </Swiper>
}

export default HeroSlider
