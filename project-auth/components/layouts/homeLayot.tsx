import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import {
  FiLinkedin,
  FiInstagram,
  FiFacebook,
  FiMenu,
  FiYoutube,
  FiTwitter,
} from 'react-icons/fi';
import Footer from '../footer';

import dynamic from 'next/dynamic';
const Menu = dynamic(() => import('./menu'), { ssr: false });

const HomeLayout = ({ data, children }: any) => {
  return (
    <div className='child_center h-full bg-mobile_trans w-screen'>
      <nav className='absolute top-0 left-0 h-20 z-100 w-screen flex justify-center items-center'>
        <div className='flex justify-between max-w-container side_padding items-center container'>
          <Link href='/'>
            <div className='h-16 w-16'>
              {data?.logo ? (
                <Image
                  src={process.env.NEXT_PUBLIC_SERVER_HOST + data?.logo}
                  width='80'
                  className='object-cover h-16 w-16'
                  height='80'
                  alt='logo'
                ></Image>
              ) : null}
            </div>
          </Link>
          <div>
            <div className='md:flex font-garet justify-center items-center space-x-4 text-white hidden'>
              <Link href='/our-stories' className='text-red'>
                Our Stories
              </Link>
              <Link href='/brands'>Brands</Link>
              <Link href='/newsroom'>Newsroom</Link>
              <Link href='/contact' className=''>
                Contact
              </Link>

              {data?.socialMedia ? (
                <div className='flex justify-center items-center space-x-2'>
                  {data.socialMedia?.facebook && (
                    <a href={data.socialMedia.facebook} target='_blank'>
                      <FiFacebook className='icons' />
                    </a>
                  )}
                  {data.socialMedia?.instagram && (
                    <a href={data.socialMedia?.instagram} target='_blank'>
                      <FiInstagram className='icons' />
                    </a>
                  )}

                  {data.socialMedia.linkedin && (
                    <a href={data?.socialMedia?.linkedin} target='_blank'>
                      <FiLinkedin className='icons' />
                    </a>
                  )}
                    {data.socialMedia?.twitter && (
                    <a href={data.socialMedia?.twitter} target='_blank'>
                      <FiTwitter className='icons' />
                    </a>
                  )}
                  {data.socialMedia.youtube && (
                    <a href={data?.socialMedia?.youtube} target='_blank'>
                      <FiYoutube className='icons' />
                    </a>
                  )}
                </div>
              ) : null}
            </div>
            <div className='md:hidden'>
              <Menu data={data} />
            </div>
          </div>
        </div>
      </nav>
      <div className='w-screen h-full'>{children}</div>
      <Footer data={data} />
    </div>
  );
};

export default HomeLayout;
