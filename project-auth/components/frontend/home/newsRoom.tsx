'use client'
import Image from "next/image"
import Link from "next/link"
import Slider from "react-slick"


const NewsRoom = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
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
        ],
    };

    return (
        <div className='bg-white text-brand_bg pt-primary child_center relative'>

            <div className='max-w-container container side_padding'>
                <p className='title font-garet_bold py-2 mx-auto text-brand_bg'>
                    Newsroom
                </p>
                <div className='flex justify-end lg:my-4 my-2'>
                    <Link href='/newsroom'>
                        <div className='justify_start space-x-2 w-full'>
                            <p className='subtitle font-garet_bold uppercase cursor-pointer'>
                                {/* {news.btnText} */}
                                READ ALL NEWS
                            </p>
                            <Image
                                src='/assets/images/icons/forward1.svg'
                                width='40'
                                height='40'
                                className='h-[40px] w-auto pr-8 hover:pr-4 hover:pl-4 transition-all duration-150'
                                alt='see more'
                            ></Image>
                        </div>
                    </Link>
                </div>
                <div className='my-4'>
                    {/* <Fade right> */}
                    <Slider {...settings}>

                        {/* Slide start */}
                        <div className='relative bg-primary rounded-[3rem] shadow-lg my-4 p-4'>
                            <p className='my-6 text-lg text-center text-secondary_text font-semibold h-[70px] relative newsroom_card'>
                                {/* {data.heading} */}
                                দেশের বাজারে এল ১০ ব্র্যান্ডের প্রযুক্তিপণ্য
                            </p>
                            <Image
                                //   src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${data.thumb}`}
                                src={'/assets/images/featured/image-DSC04985-EDIT-min-(1).webp'}
                                width='341'
                                height='200'
                                className='object-cover w-full h-[140px] md:h-[200px] relative rounded-md'
                                alt={`org`}
                            ></Image>
                            <div className='py-6 h-[170px]'>
                                <p className='text-[12px] md:text-sm text-secondary_text text-justify'>
                                    {/* {data.summary} */}
                                    বাংলাদেশের বাজারে বিদেশি ১০ ব্র্যান্ডের স্মার্ট ঘড়ি, হেডফোন, নেকব্যান্ড, পাওয়ার ব্যাংক, ব্লুটুথ স্পিকারসহ বিভিন্ন প্রযুক্তিপণ্য নিয়ে এসেছে ডিএক্স গ্রুপ।
                                    আজ মঙ্গলবার রাজধানীর একটি হোটেলে আয়োজিত এক অনুষ্ঠানে এ তথ্য জানিয়েছে প্রতিষ্ঠানটি।
                                </p>
                            </div>
                            <Image
                                //   src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${data.sourceLogo}`}
                                src={'/assets/images/featured/logo-prothom-Alo.webp'}
                                width='160'
                                height='50'
                                className='object-cover w-[150px] h-auto rounded-md mx-auto'
                                alt={`org`}
                            ></Image>
                        </div>

                        {/* Slide start */}
                        <div className='relative bg-primary rounded-[3rem] shadow-lg my-4 p-4'>
                            <p className='my-6 text-lg text-center text-secondary_text font-semibold h-[70px] relative newsroom_card'>
                                {/* {data.heading} */}
                                boAt signs distribution agreement with DX Group
                            </p>
                            <Image
                                //   src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${data.thumb}`}
                                src={'/assets/images/featured/image-Banner-3-w-1.webp'}
                                width='341'
                                height='200'
                                className='object-cover w-full h-[140px] md:h-[200px] relative rounded-md'
                                alt={`org`}
                            ></Image>
                            <div className='py-6 h-[170px]'>
                                <p className='text-[12px] md:text-sm text-secondary_text text-justify'>
                                    {/* {data.summary} */}
                                    boAt, India's No.1 wearable brand, signed a
                                    national distributor agreement with DX Group
                                    to distribute their products across Bangladesh.
                                    DX Group, will distribute boAt's range of
                                    products across all major markets, including
                                    Dhaka and other divisions.
                                </p>
                            </div>
                            <Image
                                //   src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${data.sourceLogo}`}
                                src={'/assets/images/featured/logo-the-daily-star.webp'}
                                width='160'
                                height='50'
                                className='object-cover w-[150px] h-auto rounded-md mx-auto'
                                alt={`org`}
                            ></Image>
                        </div>


                        {/* Slide start */}
                        <div className='relative bg-primary rounded-[3rem] shadow-lg my-4 p-4'>
                            <p className='my-6 text-lg text-center text-secondary_text font-semibold h-[70px] relative newsroom_card'>
                                {/* {data.heading} */}
                                boAt products now officially available in Bangladesh
                            </p>
                            <Image
                                //   src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${data.thumb}`}
                                src={'/assets/images/featured/thumb-Banner-3-w-2.webp'}
                                width='341'
                                height='200'
                                className='object-cover w-full h-[140px] md:h-[200px] relative rounded-md'
                                alt={`org`}
                            ></Image>
                            <div className='py-6 h-[170px]'>
                                <p className='text-[12px] md:text-sm text-secondary_text text-justify'>
                                    {/* {data.summary} */}
                                    The line-up will include TWS, Smartwatches,
                                    Neckbands, Headphones, Speakers, Chargers,
                                    and more. DX Group will also assist boAt in
                                    onboarding
                                    local
                                    partners,
                                    customer
                                    acquisition, and expanding its footprint.
                                </p>
                            </div>
                            <Image
                                //   src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${data.sourceLogo}`}
                                src={'/assets/images/featured/logo-prothom-Alo.webp'}
                                width='160'
                                height='50'
                                className='object-cover w-[150px] h-auto rounded-md mx-auto'
                                alt={`org`}
                            ></Image>
                        </div>


                        {/* Slide start */}
                        <div className='relative bg-primary rounded-[3rem] shadow-lg my-4 p-4'>
                            <p className='my-6 text-lg text-center text-secondary_text font-semibold h-[70px] relative newsroom_card'>
                                {/* {data.heading} */}
                                This is heading for next
                            </p>
                            <Image
                                //   src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${data.thumb}`}
                                src={'/assets/images/featured/image-DSC04985-EDIT-min-(1).webp'}
                                width='341'
                                height='200'
                                className='object-cover w-full h-[140px] md:h-[200px] relative rounded-md'
                                alt={`org`}
                            ></Image>
                            <div className='py-6 h-[170px]'>
                                <p className='text-[12px] md:text-sm text-secondary_text text-justify'>
                                    {/* {data.summary} */}
                                    বাংলাদেশের বাজারে বিদেশি ১০ ব্র্যান্ডের স্মার্ট ঘড়ি, হেডফোন, নেকব্যান্ড, পাওয়ার ব্যাংক, ব্লুটুথ স্পিকারসহ বিভিন্ন প্রযুক্তিপণ্য নিয়ে এসেছে ডিএক্স গ্রুপ।
                                    আজ মঙ্গলবার রাজধানীর একটি হোটেলে আয়োজিত এক অনুষ্ঠানে এ তথ্য জানিয়েছে প্রতিষ্ঠানটি।
                                </p>
                            </div>
                            <Image
                                //   src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${data.sourceLogo}`}
                                src={'/assets/images/featured/logo-prothom-Alo.webp'}
                                width='160'
                                height='50'
                                className='object-cover w-[150px] h-auto rounded-md mx-auto'
                                alt={`org`}
                            ></Image>
                        </div>

                    </Slider>
                    {/* </Fade> */}
                </div>
            </div >

        </div >
    )
}

export default NewsRoom
