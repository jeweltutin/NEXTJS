'use client'
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose } from 'react-icons/ai';
import { FiMenu, FiFacebook, FiInstagram, FiLinkedin, FiYoutube } from 'react-icons/fi';


const MobileNav = ({ data }: any) => {
    const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
    const handleMobileMenu = () => {
        setIsOpenMobileMenu(!isOpenMobileMenu);
    };
    return (
        <div>
            <div className='md:hidden' onClick={() => handleMobileMenu()}>
                <FiMenu className='text-white w-6 h-6' />
            </div>
            <div className={`h-screen  mobile_navigation absolute left-0 top-0 bg-white transition-all duration-1000 z-[2000] ${isOpenMobileMenu ? 'w-[45vw]' : 'w-0'}`}>
                <div className='relative h-screen w-full'>
                    <div className='h-16'>
                        <Link href='/' className='absolute top-4 left-6'>
                            <div className={`h-12 w-12 ${isOpenMobileMenu ? 'block' : 'hidden'}`}>
                                {data?.logo ? (
                                    <Image
                                        src='/assets/images/blueLogo.png'
                                        width='80'
                                        className='object-cover h-12 w-12'
                                        height='80'
                                        alt='logo'
                                    ></Image>
                                ) : null}
                            </div>
                        </Link>
                        <div className={`text-black absolute top-4 right-4 text-2xl ${isOpenMobileMenu ? 'visible' : 'invisible'}`}
                            onClick={() => handleMobileMenu()}
                        ><AiOutlineClose />
                        </div>{' '}
                    </div>
                    <div className='text-md overflow-hidden w-full mt-6'>
                        <ul className='mob_navbar flex h-full justify-start mx-6 flex-col lg:ml-6 space-y-6 text-md font-medium text-black'>
                            <Link href='/'>Home</Link>
                            <Link href='/our-stories' className='text-red'>
                                Our Stories
                            </Link>
                            <Link href='/businesses'>Businesses</Link>
                            <Link href='/news'>Newsroom</Link>
                            <Link href='/#leadership'>Leadership</Link>
                            {/* <Link href='/career'>Career</Link> */}
                            <Link href='/contact-us' className=''>
                                Contact
                            </Link>
                            {data?.socialMedia && isOpenMobileMenu ? (
                                <div className='absolute bottom-10 left-6 flex '>
                                    {data.socialMedia?.facebook && (
                                        <Link href={data.socialMedia.facebook}>
                                            <FiFacebook className='icons text-black' />
                                        </Link>
                                    )}
                                    {data.socialMedia?.instagram && (
                                        <Link href={data.socialMedia?.instagram}>
                                            <FiInstagram className='icons text-black' />
                                        </Link>
                                    )}

                                    {data.socialMedia.linkedin && (
                                        <Link href={data?.socialMedia?.linkedin}>
                                            <FiLinkedin className='w-8 h-8 text-black' />
                                        </Link>
                                    )}
                                    {data.socialMedia.youtube && (
                                        <Link href={data?.socialMedia?.youtube}>
                                            <FiYoutube className='w-8 h-8  text-black' />
                                        </Link>
                                    )}
                                </div>
                            ) : null}
                        </ul>
                    </div>{' '}
                </div>
            </div>
        </div>
    )
}

export default MobileNav
