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
import { fadeIn } from '@/lib/variants';

import { motion } from 'framer-motion';

const HeroSlider = () => {
    return <Swiper className="h-full">
        <SwiperSlide>
            <div className="pt-48 h-full flex justify-end">
                <div className="flex flex-col items-center lg:items-start lg:max-w-[700px]">
                    {/* <h1 className="h1 text-center lg:text-left mb-2">
                        <span>Where hard</span> work meets success
                    </h1> */}
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="h1 text-center lg:text-left mb-2">
                        <span className="text-accent">Where hard</span> work meets success
                    </motion.h1>
                    <p className="text-white italic text-center lg:text-left mb-4">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
                        commodi explicabo consectetur nulla facere. Harum pariatur est,
                    </p>
                    <CustomButton text="Get Started" containerStyles="w-[196px] h-[62px]" />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="pt-48 h-full flex justify-end">
                <div className="flex flex-col items-center lg:items-start lg:max-w-[700px]">
                    <motion.h1
                        variants={fadeIn('up', 0.4)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.2 }}
                        className="h1 text-center lg:text-left mb-2">
                        <span>Make</span> your body fit. Let's do it
                    </motion.h1>
                    <motion.p
                        variants={fadeIn('up', 0.6)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.2 }}
                        className="text-white italic text-center lg:text-left mb-4"
                    >
                        
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
                        commodi explicabo consectetur nulla facere. Harum pariatur est,
                    </motion.p>
                    <motion.div
                        variants={fadeIn('up', 0.8)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.2 }} 
                    >
                        <CustomButton text="Get Started" containerStyles="w-[196px] h-[62px]" />
                    </motion.div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="pt-48 h-full flex justify-end">
                <div className="flex flex-col items-center lg:items-start lg:max-w-[700px]">
                    <motion.h1
                        variants={fadeIn('up', 0.4)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.2 }}
                        className="h1 text-center lg:text-left mb-2">
                        <span>Body</span> fitness makes healthy life
                    </motion.h1>

                    <motion.p
                        variants={fadeIn('up', 0.6)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.2 }}
                        className="text-white italic text-center lg:text-left mb-4"
                    >
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
                        commodi explicabo consectetur nulla facere. Harum pariatur est,
                    </motion.p>
                    <motion.div
                        variants={fadeIn('up', 0.8)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <CustomButton text="Get Started" containerStyles="w-[196px] h-[62px]" />
                    </motion.div>
                </div>
            </div>
        </SwiperSlide>


        <SwiperNavButtons
            containerStyles="absolute py-20 lg:py-2 bottom-2 lg:bottom-0 right-0 h-[130px] w-full lg:w-[700px] z-50 flex justify-center lg:justify-start gap-1"
            btnStyles="border border-accent text-white w-[56px] h-[56px] flex justify-center items-center hover:bg-accent transition-all duration-300  "
            iconStyles="text-2xl"
        />
    </Swiper>
}

export default HeroSlider
