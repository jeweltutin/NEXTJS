'use client'
import Modal from "@/components/modal";
import Image from "next/image";
import { useState } from "react";


const Leadership = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className='bg-white  text-brand_bg child_center py-primary' id='leadership'>

            {/* Modal show hide */}
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 py-4 px-4 md:px-12 md:py-8 bg-white container card relative md:max-h-[500px]'>
                    <Image
                        // src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${selectedLeader.image}`}
                        src={'/assets/images/leader/image-7.webp'}
                        width='282'
                        height='420'
                        className='object-cover w-auto h-[300px] md:h-[420px] relative rounded-lg py-auto my-auto'
                        alt={'lname'}
                    ></Image>
                    <div className='flex flex-col space-y-2 md:space-y-4 text-gray-900 w-full '>
                        <p className='subtitle font-garet_bold'>
                            {/* {selectedLeader.name} */}
                            Dewan Kanon
                        </p>
                        <p className='para'>
                            {/* {selectedLeader.position} */}
                            Founder & CEO
                        </p>
                        <p className='text-[12px] text-black overflow-y-scroll md:max-h-[300px] max-h-[150px] scroll-m-2 pr-1.5 text-justify'>
                            {/* {selectedLeader.paragraph} */}
                            A visionary entrepreneur with an impressive CEO tenure that spans over a decade, characterized by remarkable achievements. 
                            W ith a profound expertise of over 12 years in the realms of Distribution, Retail, and Service, 
                            Dewan Kanon has propelled DX Group to unprecedented heights through strategic acumen, exceptional decision-making, 
                            and an unwavering commitment to excellence. Under his astute guidance, DX Group has witnessed exponential expansion, 
                            gained a significant market share, and achieved enhanced profitability. 
                            Dewan Kanon's relentless drive for excellence continues to inspire the entire organization, 
                            paving the way for a future of innovation and success.
                        </p>
                    </div>
                    <p
                        className='text-2xl absolute top-2  md:top-4 right-4 cursor-pointer text-black'
                        onClick={() => setShowModal(false)}
                    >
                        x
                    </p>
                </div>
            </Modal>


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


                    <div onClick={() => { setShowModal(true) }} className='relative leadership_card overflow-hidden rounded-2xl cursor-pointer'>
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
