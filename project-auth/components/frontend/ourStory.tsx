import Image from 'next/image';
import Link from 'next/link';

const OurStory = () => {
  return (
    <div className='md:bg-primary bg-brand_bg text-white md:text-black py-primary mobile_story child_center'>
    {/* <p className='title font-garet_bold'>OU</p> */}
    <div className='grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-10 lg:gap-16 max-w-container side_padding container'>
      {/* <Fade bottom> */}
        <div className='p-4 md:p-10'>
          <div className='bg-brand_color lg:mr-32 h-[400px] md:h-[500px] w-auto md:w-[380px] rounded-tr-[250px]'>
            <Image
            //   src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${story.image}`}
              src={'/assets/images/image-ceo.webp'}
              alt='story'
              width='380'
              className='object-cover h-[400px] md:h-[500px] w-auto md:w-[380px] rounded-r-[220px]'
              height='500'
            />
          </div>

          <div className='flex_center space-x-2 w-max py-4 text-white md:text-black'>
            <p className='subtitle font-garet_bold'>
                {/* {firstName} */}
                Dewan Kanon
            </p>
            <p className='text-sm font-thin'>
                {/* {lastName} */}
                Founder & CEO, DX group
            </p>
          </div>
        </div>
        <div className='w-full h-full flex flex-col items-center justify-center relative'>
          <h1 className='title text-[#FFDE59] md:text-brand_bg font-garet_bold w-full px-auto'>
            {/* {story.heading} */}
            The DX Story
          </h1>
          <p className='para py-6 text-justify'>
            {/* {story.paragraph} */}
            Resilience is a virtue for those who do not accept given conditions. 
            This way or the other, reaching to the end goal, holding hands, working shoulder to shoulder is something Dx believed from the beginning. 
            Dewan Kanon had been the pathfinder for the group, as it redefined itself to a new paradigm shift from the root it started, not by abandoning it, rather embellishing the strong base with new-age concepts and innovations in businesses, operations and growth trajectories. Today’s Dx and the more it’ll become is intertwined with the story of its founder and his life’s vision in the future.
          </p>
          <div className='w-full'>
            <Link href='/our-stories'>
              <div className='justify_start space-x-2 md:text-brand_bg text-[#FFDE59] forward'>
                <p className='subtitle font-garet_bold uppercase'>
                  {/* {story.btnTxt} */}
                  READ FULL HISTORY
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
        {/* </Fade> */}
    </div>
  </div>
  )
}

export default OurStory
