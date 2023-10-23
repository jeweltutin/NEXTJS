'use client'
import Image from 'next/image'
import { CountUp } from "use-count-up"

const Distribution = () => {
    return (
        <div className='w-full h-full z-10 relative main_container'>
            {/* <Fade bottom> */}
            <div className='max-h-[650px] w-full relative'>
                <Image
                    // src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${image}`}
                    src={'/assets/images/distribution-bg.webp'}
                    width={1920}
                    className='object-cover w-full md:w-screen max-h-[650px] min-h-[500px]'
                    height='1080'
                    alt='distribution'
                ></Image>

                <div className={`w-full max-h-[650px] h-full absolute top-0 child_center py-primary bg-[#10465bd7]`}>


                    <div className='max-w-container justify_start container side_padding w-full'>
                        <div className='w-full md:w-max'>
                            <div>
                                <h5 className='subtitle ml-8 lg:ml-20 font-garet_bold text-white'>
                                    {/* {subHeading} */}
                                    Our Business
                                </h5>
                                {/* <Image
                                    src='/assets/images/text/distribution.jpg'
                                    width='500'
                                    height='100'
                                    alt='text'
                                ></Image> */}
                                <h1 className='large_title mb-0 lg:mb-4  font-garet_bold service_title'>
                                    {/* {heading} */}
                                    Distribution
                                </h1>
                            </div>

                            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10 mt-8 lg:mt-12 w-full pl-4'>
                                <div className='flex flex-col items-between md:items-start space-y-2 md:space-y-6 w-full'>
                                    <h1 className='text-md md:text-lg text-white font-semibold w-[80px] md:w-[90px]' >
                                        Global Brands
                                    </h1>
                                    <p className='text-2xl md:text-[3.5rem] text-white font-garet_bold w-[150px] lg:w-[240px]'>
                                        <CountUp isCounting={true} start={0} end={10} duration={5} />
                                    </p>
                                </div>
                                <div className='flex flex-col items-between md:items-start space-y-2 md:space-y-6 w-full'>
                                    <h1 className='text-md md:text-lg text-white font-semibold w-[80px] md:w-[90px]' >
                                        Retails Covered
                                    </h1>
                                    <p className='text-2xl md:text-[3.5rem] text-white font-garet_bold w-[150px] lg:w-[240px]'>
                                        <CountUp isCounting={true} start={0} end={100} duration={5} />K+
                                    </p>
                                </div>
                                <div className='flex flex-col items-between md:items-start space-y-2 md:space-y-6 w-full'>
                                    <h1 className='text-md md:text-lg text-white font-semibold w-[80px] md:w-[90px]' >
                                        Districts Covered
                                    </h1>
                                    <p className='text-2xl md:text-[3.5rem] text-white font-garet_bold w-[150px] lg:w-[240px]'>
                                        <CountUp isCounting={true} start={0} end={64} duration={5} />
                                    </p>
                                </div>
                                <div className='flex flex-col items-between md:items-start space-y-2 md:space-y-6 w-full'>
                                    <h1 className='text-md md:text-lg text-white font-semibold w-[80px] md:w-[90px]' >
                                        Own Force
                                    </h1>
                                    <p className='text-2xl md:text-[3.5rem] text-white font-garet_bold w-[150px] lg:w-[240px]'>
                                        <CountUp isCounting={true} start={0} end={1.5} duration={5} />K+
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className='absolute md:-bottom-6 bottom-6  hidden md:block'>
                            <Image
                                src='/assets/images/5.svg'
                                width={1200}
                                className='object-contain h-full'
                                height={200}
                                alt='reset'
                            ></Image>
                        </div>

                        <div className='-mb-16 block md:hidden'>
                            <Image
                                src='/assets/images/2line.svg'
                                width={1200}
                                className='object-cover h-full'
                                height={200}
                                alt='reset'
                            ></Image>
                        </div>

                    </div>
                </div>
            </div>
            {/* </Fade > */}
        </div>
    )
}

export default Distribution
