import Image from "next/image";


const Leadership = () => {
    return (
        <div className='bg-white  text-brand_bg child_center py-primary' id='leadership'>
            <div className='max-w-container container side_padding'>
                <h1 className='title font-garet_bold mx-auto text-brand_bg pb-primary'>
                    {/* {leadership.heading} */}
                    Leadership
                </h1>
                <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6'>
                    {/* <Fade bottom key={index + 1}> */}
                    <div className='relative leadership_card overflow-hidden rounded-2xl cursor-pointer'>
                        <Image
                            // src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${data.image}`}
                            src={'/assets/images/leader/image-2.webp'}
                            width='280'
                            height='420'
                            className='object-contain  w-full h-full max-h-[220px] md:max-h-[420px] relative rounded-2xl hover:scale-110 transition-all duration-1000'
                            alt={'avatar'}
                        ></Image>
                        <button className='absolute top-2 md:top-4 h-max w-max text-white right-2 md:right-4 text-2xl md:text-4xl leader_plus transition-all duration-150'>
                            +
                        </button>

                        {/* <div className='absolute bottom-2 md:bottom-4 text-white left-0 md:left-2 p-2 md:p-4 z-40 h-max w-fit'>
                            <p className='uppercase text-sm md:text-md inline-block font-semibold'>

                            {data.name}
                            </p>
                            <p className='text-[10px] md:text-sm text-white'>
                            {data.position}
                            </p>
                        </div> */}
                    </div>


                    <div className='relative leadership_card overflow-hidden rounded-2xl cursor-pointer'>
                        <Image
                            // src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${data.image}`}
                            src={'/assets/images/leader/image-7.webp'}
                            width='280'
                            height='420'
                            className='object-contain  w-full h-full max-h-[220px] md:max-h-[420px] relative rounded-2xl hover:scale-110 transition-all duration-1000'
                            alt={'avatar'}
                        ></Image>
                        <button className='absolute top-2 md:top-4 h-max w-max text-white right-2 md:right-4 text-2xl md:text-4xl leader_plus transition-all duration-150'>
                            +
                        </button>
                    </div>

                    <div className='relative leadership_card overflow-hidden rounded-2xl cursor-pointer'>
                        <Image
                            // src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${data.image}`}
                            src={'/assets/images/leader/image-3.webp'}
                            width='280'
                            height='420'
                            className='object-contain  w-full h-full max-h-[220px] md:max-h-[420px] relative rounded-2xl hover:scale-110 transition-all duration-1000'
                            alt={'avatar'}
                        ></Image>
                        <button className='absolute top-2 md:top-4 h-max w-max text-white right-2 md:right-4 text-2xl md:text-4xl leader_plus transition-all duration-150'>
                            +
                        </button>
                    </div>

                    <div className='relative leadership_card overflow-hidden rounded-2xl cursor-pointer'>
                        <Image
                            // src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${data.image}`}
                            src={'/assets/images/leader/image-Lisa.webp'}
                            width='280'
                            height='420'
                            className='object-contain  w-full h-full max-h-[220px] md:max-h-[420px] relative rounded-2xl hover:scale-110 transition-all duration-1000'
                            alt={'avatar'}
                        ></Image>
                        <button className='absolute top-2 md:top-4 h-max w-max text-white right-2 md:right-4 text-2xl md:text-4xl leader_plus transition-all duration-150'>
                            +
                        </button>
                    </div>

                    {/* </Fade> */}
                </div>
            </div>{' '}

        </div>
    )
}

export default Leadership
