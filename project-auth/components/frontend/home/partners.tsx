'use client'
import Image from 'next/image';
import Fade from 'react-reveal/Fade';
import Slider from 'react-slick';

const Partners = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,

        rows: 2,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 4000,
    };
    return (
        <div className="bg-primary text-brand_bg py-primary w-full h-full child_center ">
            <Fade right>
                <div className="max-w-container container side_padding block lg:hidden">
                    <h1 className="title font-garet_bold">
                        {/* {partners.data.heading ? partners.data.heading : "Partners"} */}
                        Partners
                    </h1>
                    <div className="pt-2">

                        {/* <div className="w-full">
                            <Slider {...settings}>
                                {partnersOne.length
                                ? partnersOne.map((data: any) => (
                                    <div key={data.image} className="relative m-2">
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${data.image}`}
                                        width="150"
                                        height="70"
                                        className="object-cover w-auto max-h-[100px] "
                                        alt={data.name}
                                    ></Image>
                                    </div>
                                ))
                                : null}
                            </Slider>
                            </div>
                            <div className="w-full">
                            <Slider {...settings}>
                                {partnersTwo.length
                                ? partnersTwo.map((data: any) => (
                                    <div key={data.image} className="relative m-2">
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${data.image}`}
                                        width="150"
                                        height="70"
                                        className="object-cover w-auto max-h-[100px] "
                                        alt={data.name}
                                    ></Image>
                                    </div>
                                ))
                                : null}
                            </Slider>
                        </div> */}

                        {/* Slide will show in mobile view */}
                        <div className="w-full">
                            <Slider {...settings}>
                                <div className="relative m-2">
                                    <Image
                                        // src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${data.image}`}
                                        src={'/assets/images/partners/image-All-logo-07.webp'}
                                        width="150"
                                        height="70"
                                        className="object-cover w-auto max-h-[100px] "
                                        alt={'p name'}
                                    ></Image>
                                </div>
                                <div className="relative m-2">
                                    <Image
                                        // src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${data.image}`}
                                        src={'/assets/images/partners/image-All-logo-08.webp'}
                                        width="150"
                                        height="70"
                                        className="object-cover w-auto max-h-[100px] "
                                        alt={'p name'}
                                    ></Image>
                                </div>
                                <div className="relative m-2">
                                    <Image
                                        // src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${data.image}`}
                                        src={'/assets/images/partners/image-All-logo-09.webp'}
                                        width="150"
                                        height="70"
                                        className="object-cover w-auto max-h-[100px] "
                                        alt={'p name'}
                                    ></Image>
                                </div>
                                <div className="relative m-2">
                                    <Image
                                        // src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${data.image}`}
                                        src={'/assets/images/partners/image-All-logo-10.webp'}
                                        width="150"
                                        height="70"
                                        className="object-cover w-auto max-h-[100px] "
                                        alt={'p name'}
                                    ></Image>
                                </div>
                                <div className="relative m-2">
                                    <Image
                                        // src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${data.image}`}
                                        src={'/assets/images/partners/image-All-logo-12.webp'}
                                        width="150"
                                        height="70"
                                        className="object-cover w-auto max-h-[100px] "
                                        alt={'p name'}
                                    ></Image>
                                </div>
                                <div className="relative m-2">
                                    <Image
                                        // src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${data.image}`}
                                        src={'/assets/images/partners/image-All-logo-13.webp'}
                                        width="150"
                                        height="70"
                                        className="object-cover w-auto max-h-[100px] "
                                        alt={'p name'}
                                    ></Image>
                                </div>
                                <div className="relative m-2">
                                    <Image
                                        // src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${data.image}`}
                                        src={'/assets/images/partners/image-All-logo-14.webp'}
                                        width="150"
                                        height="70"
                                        className="object-cover w-auto max-h-[100px] "
                                        alt={'p name'}
                                    ></Image>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>

                <div className="max-w-container container side_padding hidden lg:block">
                    <h1 className="title font-garet_bold">
                        {/* {partners.data.heading ? partners.data.heading : "Partners"} */}
                        Partners
                    </h1>
                    <div className="w-full py-primary grid grid-cols-5 gap-4 ">
                        <div className="relative m-2">
                            <Image
                                // src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${data.image}`}
                                src={'/assets/images/partners/image-All-logo-01.webp'}
                                width="150"
                                height="70"
                                className="object-cover w-auto max-h-[100px] "
                                alt={'p name'}
                            ></Image>
                        </div>
                        <div className="relative m-2">
                            <Image
                                // src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${data.image}`}
                                src={'/assets/images/partners/image-All-logo-02.webp'}
                                width="150"
                                height="70"
                                className="object-cover w-auto max-h-[100px] "
                                alt={'p name'}
                            ></Image>
                        </div>
                        <div className="relative m-2">
                            <Image
                                // src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${data.image}`}
                                src={'/assets/images/partners/image-All-logo-03.webp'}
                                width="150"
                                height="70"
                                className="object-cover w-auto max-h-[100px] "
                                alt={'p name'}
                            ></Image>
                        </div>
                        <div className="relative m-2">
                            <Image
                                // src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${data.image}`}
                                src={'/assets/images/partners/image-All-logo-04.webp'}
                                width="150"
                                height="70"
                                className="object-cover w-auto max-h-[100px] "
                                alt={'p name'}
                            ></Image>
                        </div>
                        <div className="relative m-2">
                            <Image
                                // src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${data.image}`}
                                src={'/assets/images/partners/image-All-logo-05.webp'}
                                width="150"
                                height="70"
                                className="object-cover w-auto max-h-[100px] "
                                alt={'p name'}
                            ></Image>
                        </div>
                        
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default Partners
