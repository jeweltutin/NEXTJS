'use client';
import React from 'react';
import Image from 'next/image';
import Slider from "react-slick";

const HomeSlider = ({ cover }: any) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    autoplayspeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className='w-full h-full'>
      <div className=' lg:max-h-[600px] h-500 lg:h-full banner_slider w-full'>
        <Slider {...settings}>
            <div className='relative'>
              <Image
                //src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${data.image}`}
                src={'/assets/images/slide1.webp'}
                width={1920}
                className='object-cover h-500 w-full md:w-screen  lg:h-[600px] '
                height='1080'
                alt='banner'
              ></Image>

              <div className='w-screen max-h-[600px] z-50 home_banner  md:bg-banner_trans absolute top-0 right-0 child_center lg:h-full h-500'>
                <div className='max-w-container w-full  mt-16 md:mt-0 z-50'>
                  <div className='md:w-2/3 max-w-container side_padding'>
                    <h1>
                      <span className='header_title font-garet_bold'>
                        Heading one
                      </span>
                      <br />
                      <span className='text-white lg:text-5xl text-2xl md:text-3xl my-4'>
                        Heading two
                      </span>
                    </h1>
                    <p className='text-white para lg:max-w-[500px] w-[300px] md:w-[400px]'>
                      
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='relative'>
              <Image
                //src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${data.image}`}
                src={'/assets/images/slide2.webp'}
                width={1920}
                className='object-cover h-500 w-full md:w-screen  lg:h-[600px] '
                height='1080'
                alt='banner'
              ></Image>

              <div className='w-screen max-h-[600px] z-50 home_banner  md:bg-banner_trans absolute top-0 right-0 child_center lg:h-full h-500'>
                <div className='max-w-container w-full  mt-16 md:mt-0 z-50'>
                  <div className='md:w-2/3 max-w-container side_padding'>
                    <h1>
                      <span className='header_title font-garet_bold'>
                        Heading one
                      </span>
                      <br />
                      <span className='text-white lg:text-5xl text-2xl md:text-3xl my-4'>
                        Heading two
                      </span>
                    </h1>
                    <p className='text-white para lg:max-w-[500px] w-[300px] md:w-[400px]'>
                      
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </Slider>
      </div>
    </div>
  );
};

export default HomeSlider;
