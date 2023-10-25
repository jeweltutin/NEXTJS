'use client'
import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'

const Featured = () => {
    const settings = {
        dots: true,
        arrows: true,
        // centerMode: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    slidesPerRow: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    slidesPerRow: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesPerRow: 1,
                    dots: false,
                    slidesToScroll: 1,
                },
            },
        ]
    };
    return (
        <div className='bg-white text-brand_bg py-primary child_center w-full h-full'>
            <div className='max-w-container w-full h-full container_padding side_padding'>
                {/* <Fade right > */}
                <h1 className='title font-garet_bold md:border-b-0 border-b-4 border-brand_color w-min'>
                    {/* {featured.heading} */}
                    Featured
                </h1>
                <div className='pt-primary -mr-24 featured_slider w-full h-full'>
                    <Slider {...settings}>
                        <div className='relative border-2 rounded-[3rem] h-full md:h-[450px] overflow-hidden py-4'>
                            <div className='featured_logo'>
                                <Image
                                    // src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${data.logo}`}
                                    src={'/assets/images/featured/logo-prothom-Alo.webp'}
                                    width='160'
                                    height='50'
                                    className='object-contain w-fit max-w-[150px] h-full mx-4'
                                    alt='logo'
                                ></Image>
                            </div>



                            <p className='text-sm text-secondary_text font-semibold p-4 h-[80px] overflow-hidden'>
                                {/* {data.heading} */}
                                দেশের বাজারে এল পরিধেয় যন্ত্র, স্পিকার, হেডফোনের নতুন ব্র্যান্ড
                            </p>
                            <div className='h-[200px] md:h-[150px]'>
                                <Image
                                    // src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${data.image}`}
                                    src={'/assets/images/featured/image-Banner-3-w-1.webp'}
                                    width='266'
                                    height='150'
                                    className='object-cover md:object-cover w-full h-full relative'
                                    alt='myImage'
                                ></Image>
                            </div>

                            <p className='text-[12px] text-justify text-secondary_text px-4 py-4 md:py-2 leading-4 max-h-[130px] sm:max-h-[120px] overflow-hidden'>
                                {/* {data.paragraph} */}
                                গ্যাজেট নির্মাতা ভারতীয় প্রতিষ্ঠান বোট বাংলাদেশে যাত্রা শুরু করেছে।
                                বাংলাদেশে পরিবেশন অংশীদার হিসেবে রয়েছে ডিএক্স গ্রুপ।
                                তারা অনুমোদিত পরিবেশক হিসেবে বোটের পণ্য ঢাকাসহ সারা দেশে সরবরাহ করবে।
                                বোটের পণ্য তালিকায় রয়েছে তারহীন ইয়ারফোন টিডব্লিউএস, স্মার্টঘড়ি, হেডফোন, স্পিকার, চার্জার ইত্যাদি।
                            </p>

                        </div>

                        <div className='relative border-2 rounded-[3rem] h-full md:h-[450px] overflow-hidden py-4'>
                            <div className='featured_logo'>
                                <Image
                                    // src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${data.logo}`}
                                    src={'/assets/images/featured/logo-the-daily-star.webp'}
                                    width='160'
                                    height='50'
                                    className='object-contain w-fit max-w-[150px] h-full mx-4'
                                    alt='logo'
                                ></Image>
                            </div>



                            <p className='text-sm text-secondary_text font-semibold p-4 h-[80px] overflow-hidden'>
                                {/* {data.heading} */}
                                DX Group introduces ‘Ten international lifestyle brands’
                            </p>
                            <div className='h-[200px] md:h-[150px]'>
                                <Image
                                    // src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${data.image}`}
                                    src={'/assets/images/featured/image-DSC04985-EDIT-min-(1).webp'}
                                    width='266'
                                    height='150'
                                    className='object-cover md:object-cover w-full h-full relative'
                                    alt='myImage'
                                ></Image>
                            </div>

                            <p className='text-[12px] text-justify text-secondary_text px-4 py-4 md:py-2 leading-4 max-h-[130px] sm:max-h-[120px] overflow-hidden'>
                                {/* {data.paragraph} */}
                                DX Group, held an event called 'Grow with
                                DX’ in 6th June 23, where they introduced
                                ten international lifestyle brands - BoAt,
                                QCY, Amazfit, 1More, Promate, TAGG, Ezviz,
                                Riversong, Energizer, and Xiaomi - into the
                                Bangladeshi market
                            </p>

                        </div>

                        <div className='relative border-2 rounded-[3rem] h-full md:h-[450px] overflow-hidden py-4'>
                            <div className='featured_logo'>
                                <Image
                                    // src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${data.logo}`}
                                    src={'/assets/images/featured/logo-xiaomi-global.webp'}
                                    width='160'
                                    height='50'
                                    className='object-contain w-fit max-w-[150px] h-full mx-4'
                                    alt='logo'
                                ></Image>
                            </div>



                            <p className='text-sm text-secondary_text font-semibold p-4 h-[80px] overflow-hidden'>
                                {/* {data.heading} */}
                                Xiaomi Becomes #1 Smartphone Brand in Bangladesh
                            </p>
                            <div className='h-[200px] md:h-[150px]'>
                                <Image
                                    // src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${data.image}`}
                                    src={'/assets/images/featured/image-Lei-June.webp'}
                                    width='266'
                                    height='150'
                                    className='object-cover md:object-cover w-full h-full relative'
                                    alt='myImage'
                                ></Image>
                            </div>

                            <p className='text-[12px] text-justify text-secondary_text px-4 py-4 md:py-2 leading-4 max-h-[130px] sm:max-h-[120px] overflow-hidden'>
                                {/* {data.paragraph} */}
                                Xiaomi became the top smartphone
                                company in Bangladesh in the second
                                quarter of 2022 with a 28.8 per cent market
                                share and 134 per cent annual growth,
                                according to market research firm
                                Counterpoint Research.
                            </p>

                        </div>

                        <div className='relative border-2 rounded-[3rem] h-full md:h-[450px] overflow-hidden py-4'>
                            <div className='featured_logo'>
                                <Image
                                    // src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${data.logo}`}
                                    src={'/assets/images/featured/logo-counter-point.webp'}
                                    width='160'
                                    height='50'
                                    className='object-contain w-fit max-w-[150px] h-full mx-4'
                                    alt='logo'
                                ></Image>
                            </div>



                            <p className='text-sm text-secondary_text font-semibold p-4 h-[80px] overflow-hidden'>
                                {/* {data.heading} */}
                                দেশের বাজারে এল পরিধেয় যন্ত্র, স্পিকার, হেডফোনের নতুন ব্র্যান্ড
                            </p>
                            <div className='h-[200px] md:h-[150px]'>
                                <Image
                                    // src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${data.image}`}
                                    src={'/assets/images/featured/image-Banner-5.webp'}
                                    width='266'
                                    height='150'
                                    className='object-cover md:object-cover w-full h-full relative'
                                    alt='myImage'
                                ></Image>
                            </div>

                            <p className='text-[12px] text-justify text-secondary_text px-4 py-4 md:py-2 leading-4 max-h-[130px] sm:max-h-[120px] overflow-hidden'>
                                {/* {data.paragraph} */}
                                গ্যাজেট নির্মাতা ভারতীয় প্রতিষ্ঠান বোট বাংলাদেশে যাত্রা শুরু করেছে।
                                বাংলাদেশে পরিবেশন অংশীদার হিসেবে রয়েছে ডিএক্স গ্রুপ।
                                তারা অনুমোদিত পরিবেশক হিসেবে বোটের পণ্য ঢাকাসহ সারা দেশে সরবরাহ করবে।
                                বোটের পণ্য তালিকায় রয়েছে তারহীন ইয়ারফোন টিডব্লিউএস, স্মার্টঘড়ি, হেডফোন, স্পিকার, চার্জার ইত্যাদি।
                            </p>

                        </div>

                        <div className='relative border-2 rounded-[3rem] h-full md:h-[450px] overflow-hidden py-4'>
                            <div className='featured_logo'>
                                <Image
                                    // src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${data.logo}`}
                                    src={'/assets/images/featured/logo-prothom-Alo.webp'}
                                    width='160'
                                    height='50'
                                    className='object-contain w-fit max-w-[150px] h-full mx-4'
                                    alt='logo'
                                ></Image>
                            </div>



                            <p className='text-sm text-secondary_text font-semibold p-4 h-[80px] overflow-hidden'>
                                {/* {data.heading} */}
                                দেশের বাজারে এল পরিধেয় যন্ত্র, স্পিকার, হেডফোনের নতুন ব্র্যান্ড
                            </p>
                            <div className='h-[200px] md:h-[150px]'>
                                <Image
                                    // src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${data.image}`}
                                    src={'/assets/images/featured/image-Banner-3-w-1.webp'}
                                    width='266'
                                    height='150'
                                    className='object-cover md:object-cover w-full h-full relative'
                                    alt='myImage'
                                ></Image>
                            </div>

                            <p className='text-[12px] text-justify text-secondary_text px-4 py-4 md:py-2 leading-4 max-h-[130px] sm:max-h-[120px] overflow-hidden'>
                                {/* {data.paragraph} */}
                                গ্যাজেট নির্মাতা ভারতীয় প্রতিষ্ঠান বোট বাংলাদেশে যাত্রা শুরু করেছে।
                                বাংলাদেশে পরিবেশন অংশীদার হিসেবে রয়েছে ডিএক্স গ্রুপ।
                                তারা অনুমোদিত পরিবেশক হিসেবে বোটের পণ্য ঢাকাসহ সারা দেশে সরবরাহ করবে।
                                বোটের পণ্য তালিকায় রয়েছে তারহীন ইয়ারফোন টিডব্লিউএস, স্মার্টঘড়ি, হেডফোন, স্পিকার, চার্জার ইত্যাদি।
                            </p>

                        </div>

                        <div className='relative border-2 rounded-[3rem] h-full md:h-[450px] overflow-hidden py-4'>
                            <div className='featured_logo'>
                                <Image
                                    // src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${data.logo}`}
                                    src={'/assets/images/featured/logo-the-daily-star.webp'}
                                    width='160'
                                    height='50'
                                    className='object-contain w-fit max-w-[150px] h-full mx-4'
                                    alt='logo'
                                ></Image>
                            </div>



                            <p className='text-sm text-secondary_text font-semibold p-4 h-[80px] overflow-hidden'>
                                {/* {data.heading} */}
                                দেশের বাজারে এল পরিধেয় যন্ত্র, স্পিকার, হেডফোনের নতুন ব্র্যান্ড
                            </p>
                            <div className='h-[200px] md:h-[150px]'>
                                <Image
                                    // src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${data.image}`}
                                    src={'/assets/images/featured/image-Lei-June.webp'}
                                    width='266'
                                    height='150'
                                    className='object-cover md:object-cover w-full h-full relative'
                                    alt='myImage'
                                ></Image>
                            </div>

                            <p className='text-[12px] text-justify text-secondary_text px-4 py-4 md:py-2 leading-4 max-h-[130px] sm:max-h-[120px] overflow-hidden'>
                                {/* {data.paragraph} */}
                                গ্যাজেট নির্মাতা ভারতীয় প্রতিষ্ঠান বোট বাংলাদেশে যাত্রা শুরু করেছে।
                                বাংলাদেশে পরিবেশন অংশীদার হিসেবে রয়েছে ডিএক্স গ্রুপ।
                                তারা অনুমোদিত পরিবেশক হিসেবে বোটের পণ্য ঢাকাসহ সারা দেশে সরবরাহ করবে।
                                বোটের পণ্য তালিকায় রয়েছে তারহীন ইয়ারফোন টিডব্লিউএস, স্মার্টঘড়ি, হেডফোন, স্পিকার, চার্জার ইত্যাদি।
                            </p>

                        </div>
                    </Slider>
                </div>
                {/* </Fade> */}
            </div>
        </div>
    )
}

export default Featured


//Source: https://react-slick.neostack.com/docs/example/multiple-items