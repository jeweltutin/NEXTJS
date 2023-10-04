import Image from 'next/image'
import Link from 'next/link'
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { CgArrowLongRight } from 'react-icons/cg';
import { FiTwitter, FiYoutube } from 'react-icons/fi';
// import Fade from 'react-reveal/Fade'

const Footer = (data: any) => {
    const social = data?.socialMedia;
    return (
        <div className='bg-brand_bg text-white pt-primary pb-4 child_center h-full w-screen'>
            <div className='max-w-container container side_padding'>
                {/* <Fade> */}
                <div className='grid md:grid-cols-1 lg:grid-cols-3 text-[12px] text-gray-300 font-thin  mt-6'>
                    <div>
                        <div className='flex flex-col items-start space-y-2 list-none text-gray-300'>
                            <p className='text-white text-md font-garet_bold my-2'>
                                About Company
                            </p>
                            <Link href='/our-stories'>Our Story</Link>
                            <Link href='/newsroom'>News</Link>
                            <Link href='/career'>Career</Link>
                            <Link href='/contact'>Contact Us</Link>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 space-y-2 list-none mt-4 md:mt-0'>
                        <p className='text-white text-md font-garet_bold my-2 col-span-2'>Concerns</p>
                        {data?.concern?.map((concern: any) => (
                            <Link key={concern.name} href={concern.link}>
                                {concern.name}
                            </Link>
                        ))}
                    </div>

                    <div className='flex flex-col space-y-2 md:space-y-4 mt-4 md:mt-0'>
                        <p className='text-white text-md font-garet_bold my-2'>Address</p>
                        <p>
                            House # 7, Road # 54/A <br /> Gulshan-2, Dhaka-1212, Bangladesh
                        </p>
                        <div className='justify_start space-x-2 text-white cursor-pointer'>
                            <a href='https://www.google.com/maps/place/DX+Group/@23.7967646,90.4107437,20.33z/data=!4m6!3m5!1s0x3755c710963b09e5:0x40a106e08b2e465e!8m2!3d23.7970066!4d90.4108047!16s%2Fg%2F11sr79gf76?entry=tts&shorturl=1' target='_blank' className='text-md font-garet_bold'>Direction</a>
                            <CgArrowLongRight className='w-10 h-6' />
                        </div>
                    </div>
                </div>
                <div className='grid md:grid-cols-1 lg:grid-cols-3 mt-10 gap-4 border-b-[1px] border-gray-500 pb-2'>
                    <div className='flex-col md:flex-row flex j md:justify-between  items-start md:items-center space-y-2 md:space-y-0'>
                        <Image
                            src='/assets/images/Vector.png'
                            width='50'
                            className='object-cover h-16 w-16'
                            height='50'
                            alt='logo'
                        ></Image>
                        {/* <Image
                                src='/assets/images/logo/dx-mobile.jpg'
                                width='50'
                                className='object-cover md:hidden'
                                height='50'
                                alt='logo'
                                ></Image> */}
                        <p>
                            Call Us at
                            <span className='font-semibold text-brand_color'>
                                &nbsp; +88 02488 12038
                            </span>
                        </p>
                    </div>

                    <div className='justify_start'>
                        <p>
                            Email us at
                            <span className='font-semibold text-brand_color'>
                                &nbsp; hello@dx.com.bd
                            </span>
                        </p>
                    </div>
                    <div className='flex_center space-x-2 mt-2 md:mt-0'>
                        {social?.facebook ? (
                            <a href={social?.facebook}>
                                <BsFacebook className='w-6 h-6' />
                            </a>
                        ) : null}

                        {social?.linkedin ? (
                            <a href={social?.linkedin}>
                                <BsLinkedin className='w-6 h-6' />
                            </a>
                        ) : null}
                        {social?.instagram ? (
                            <a href={social?.instagram}>
                                <BsInstagram className='w-6 h-6' />
                            </a>
                        ) : null}
                        {social?.twitter ? (
                            <a href={social?.twitter}>
                                <FiTwitter className='w-6 h-6' />
                            </a>
                        ) : null}
                        {social?.youtube ? (
                            <a href={social?.youtube}>
                                <FiYoutube className='w-6 h-6' />
                            </a>
                        ) : null}
                    </div>
                </div>
                <div className='flex flex-col md:flex-row md:justify-between text-[10px] text-gray-300 pt-2'>
                    <div>
                        <p>Copyright © 2023 DX Group. All rights reserved. </p>
                    </div>
                    <div>Privacy Policy &nbsp; Terms and Condition</div>
                </div>
                {/* </Fade> */}
            </div>
        </div>
    )
}

export default Footer
