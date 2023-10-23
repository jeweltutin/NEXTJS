import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Career = () => {
  return (
    <div className='child_center text-brand_bg py-primary  bg-primary'>
    {/* <p className='title font-garet_bold'>OU</p> */}
    {/* <Fade right > */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 max-w-container container side_padding'>
        <div className='p-4 md:p-10'>
          <div className='bg-brand_color lg:mr-32 rounded-tr-[200px]'>
            <Image
              src='/assets/images/career.webp'
              alt='story'
              width='500'
              className='object-cover h-full w-full rounded-r-[200px]'
              height='750'
            />
          </div>
        </div>
        <div className='w-full h-full flex flex-col items-center justify-center relative'>
          <h1 className='title font-garet_bold w-full px-auto'>
            {/* {career.heading} */}
            Career
          </h1>
          <p className='para py-6 text-justify'>
            {/* {career.paragraph}*/}
            Discover exciting opportunities at DX Group. Join our talented team and unleash your potential. 
            We value innovation, collaboration, and growth. 
            Explore career options and apply today for a brighter future.
          </p>
          <div className='w-full'>
            <Link href='/career'>
              <div className='justify_start space-x-2 w-full forward'>
                <p className='subtitle font-garet_bold uppercase'>
                  {/* {career.btnText} */}
                  EXPLORE CAREERS
                </p>
                <Image
                  src='/assets/images/icons/forward1.svg'
                  width='40'
                  height='40'
                  className='h-[40px] w-auto cursor-pointer transition-all duration-150 forward_icon'
                  alt='see more'
                ></Image>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* </Fade> */}
  </div>
  )
}

export default Career
