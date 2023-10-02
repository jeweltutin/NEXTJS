import Image from 'next/image';
import Link from 'next/link';
import { FiMenu, FiLinkedin, FiInstagram, FiFacebook } from 'react-icons/fi';

const loginLayout = ({children}:any) => {
  return (    
    <div className='child_center w-full h-full '>
    <nav className='absolute top-0 left-0 h-20 z-100 w-screen bg-gray-700 flex justify-center items-center'>
      <div className='flex justify-between max-w-container side_padding items-center container'>
        <Link href='/'>
          <div className=''>
            <Image
                src={'/assets/images/dx-g-logo.png'}
                width='160'
                className='object-cover'
                height='74'
                alt='logo'>
            </Image>
          </div>
        </Link>
        <div>
          <div className='md:flex font-garet justify-center items-center space-x-4 text-white hidden'>
            <Link href='/stories' className='text-red'>
              Our Stories
            </Link>
            <Link href='/brands'>Brands</Link>
            <Link href='/newsroom'>Newsroom</Link>
            <Link href='/contact' className=''>
              Contact
            </Link>

              <div className='flex justify-center items-center space-x-2'>

                  <Link href={'#'}>
                    <FiFacebook className='icons' />
                  </Link>
              
                  <Link href={'#'}>
                    <FiInstagram className='icons' />
                  </Link>

                  <Link href={'#'}>
                    <FiLinkedin className='icons' />
                  </Link>

                  <Link href={'#'}>
                    <FiLinkedin className='icons' />
                  </Link>

              </div>
          </div>
          <div className='md:hidden'>
            <FiMenu className='text-white w-10 h-10' />
          </div>
        </div>
      </div>
    </nav>
    {children}
  </div>
  
  )
}

export default loginLayout
