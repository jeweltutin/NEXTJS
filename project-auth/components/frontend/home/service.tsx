import Image from "next/image"


const Service = () => {
    return (
        <div className='w-full h-full z-10 relative main_container'>
            {/* <Fade bottom> */}
            <div className='max-h-[650px] w-full'>
                <Image
                    // src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${image}`}
                    src={'/assets/images/service-bg.webp'}
                    width={1920}
                    className='object-cover w-full md:w-screen max-h-[650px] min-h-[500px]'
                    height='1080'
                    alt='distribution'
                ></Image>

                <div className='w-full max-h-[650px] h-full bg-[#10465bd7] absolute top-0 child_center py-primary'>
                    <div className='max-w-container justify_start container side_padding'>
                        <div className='w-full md:w-max'>
                            <div>
                                <h5 className='subtitle ml-4 lg:ml-20 font-garet_bold text-white'>
                                    {/* {subHeading} */}
                                    Our Business
                                </h5>
                                {/* <Image
                                src='/assets/images/text/distribution.jpg'
                                width='500'
                                height='100'
                                alt='text'
                                ></Image> */}
                                <h1 className='large_title mb-4  font-garet_bold service_title'>
                                    {/* {heading} */}
                                    Service
                                </h1>
                            </div>

                            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10 mt-12 pl-4'>
                                <div className='flex flex-col items-start space-y-2 md:space-y-6'>
                                    <h1 className='text-md md:text-lg text-white font-semibold w-[85px] md:w-[105px]'>
                                        Network Centers
                                    </h1>
                                    <p className='text-2xl md:text-[3.5rem] text-white font-garet_bold w-[150px] lg:w-[240px]'>
                                        25
                                    </p>
                                </div>
                                <div className='flex flex-col items-start space-y-2 md:space-y-6'>
                                    <h1 className='text-md md:text-lg text-white font-semibold w-[85px] md:w-[105px]'>
                                        CSAT Score
                                    </h1>
                                    <p className='text-2xl md:text-[3.5rem] text-white font-garet_bold w-[150px] lg:w-[240px]'>
                                        95%
                                    </p>
                                </div>
                                <div className='flex flex-col items-start space-y-2 md:space-y-6'>
                                    <h1 className='text-md md:text-lg text-white font-semibold w-[85px] md:w-[105px]'>
                                        Same Day Delivery
                                    </h1>
                                    <p className='text-2xl md:text-[3.5rem] text-white font-garet_bold w-[150px] lg:w-[240px]'>
                                        90%
                                    </p>
                                </div>
                                <div className='flex flex-col items-start space-y-2 md:space-y-6'>
                                    <h1 className='text-md md:text-lg text-white font-semibold w-[85px] md:w-[105px]'>
                                        Bounce Rate
                                    </h1>
                                    <p className='text-2xl md:text-[3.5rem] text-white font-garet_bold w-[150px] lg:w-[240px]'>
                                    <span >{`  <  `} </span> 3%
                                    </p>
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* </Fade > */}
        </div >
    )
}

export default Service
