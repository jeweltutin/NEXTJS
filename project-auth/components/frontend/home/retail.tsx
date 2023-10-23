'use client'
import Image from 'next/image'
import { CountUp } from 'use-count-up';

const Retail = () => {
    return (
        <div className='w-full h-full z-10 relative main_container'>
            {/* <Fade bottom> */}
            <div className='max-h-[650px] w-full'>
                <Image
                    // src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${image}`}
                    src={'/assets/images/retail-bg.webp'}
                    width={1920}
                    className='object-cover w-full md:w-screen max-h-[650px] min-h-[500px]'
                    height='1080'
                    alt='distribution'
                ></Image>

                <div className={`w-full max-h-[650px] h-full absolute top-0 child_center py-primary bg-[#dbe1e2c4]`}>


                    <div className='max-w-container justify_start container side_padding'>
                        <div className='w-full md:w-max'>
                            <div>
                                <h5 className='subtitle ml-4 lg:ml-20 font-garet_bold' style={{ color: '#0F6274' }}>
                                    {/* {subHeading} */}
                                    Our Business
                                </h5>
                                {/* <Image
                                src='/assets/images/text/distribution.jpg'
                                width='500'
                                height='100'
                                alt='text'
                                ></Image> */}
                                <h1 className='large_title mb-4 font-garet_bold retail_title' style={{ color: '#0F6274' }}>
                                    {/* {heading} */}
                                    Retail
                                </h1>
                            </div>

                            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10 mt-12 pl-4'>
                                <div className='flex flex-col items-start space-y-2 md:space-y-6 '>
                                    <h1 className='text-md md:text-lg font-semibold text-[#0F6274] w-[95px] md:w-[105px]'>
                                        Own Chain Retails
                                    </h1>
                                    <p className='text-2xl md:text-[3.5rem] font-garet_bold lg:w-[240px]' style={{ color: '#0F6274' }}>
                                        <CountUp isCounting={true} start={0} end={100} duration={5} />+
                                    </p>
                                </div>
                                <div className='flex flex-col items-start space-y-2 md:space-y-6 '>
                                    <h1 className='text-md md:text-lg font-semibold text-[#0F6274] w-[95px] md:w-[105px]'>
                                        Top Malls Covered
                                    </h1>
                                    <p className='text-2xl md:text-[3.5rem] font-garet_bold lg:w-[240px]' style={{ color: '#0F6274' }}>
                                        <CountUp isCounting={true} start={0} end={20} duration={5} />+
                                    </p>
                                </div>
                                <div className='flex flex-col items-start space-y-2 md:space-y-6 '>
                                    <h1 className='text-md md:text-lg font-semibold text-[#0F6274] w-[95px] md:w-[105px]'>
                                        Districts Covered
                                    </h1>
                                    <p className='text-2xl md:text-[3.5rem] font-garet_bold lg:w-[240px]' style={{ color: '#0F6274' }}>
                                        <CountUp isCounting={true} start={0} end={50} duration={5} />+
                                    </p>
                                </div>
                                <div className='flex flex-col items-start space-y-2 md:space-y-6 '>
                                    <h1 className='text-md md:text-lg font-semibold text-[#0F6274] w-[95px] md:w-[105px]'>
                                        Retail Force
                                    </h1>
                                    <p className='text-2xl md:text-[3.5rem] font-garet_bold lg:w-[240px]' style={{ color: '#0F6274' }}>
                                        <CountUp isCounting={true} start={0} end={450} duration={5} />+
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* </Fade > */}
        </div>
    )
}

export default Retail
