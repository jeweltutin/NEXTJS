'use client';

//import { GoDashboard, GoRequestChanges } from 'react-icons/go';
import { GrDashboard } from 'react-icons/gr';
import { MdAccountCircle, MdArrowDropDown, MdLocalOffer, MdOutlineFeaturedPlayList, MdOutlineProductionQuantityLimits, MdReviews } from 'react-icons/md';
import { GiThreeFriends } from 'react-icons/gi';
import { TbBrandShopee } from 'react-icons/tb';
import { SiOnlyoffice } from 'react-icons/si';
import logo from 'public/assets/images/Vector.png';

import Image from 'next/image';
import Link from 'next/link';
import { CgInsights, CgMenu } from 'react-icons/cg';
import { TfiAnnouncement } from 'react-icons/tfi';
import { AiFillFileImage } from 'react-icons/ai';
import { FcSettings } from 'react-icons/fc';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { FiLifeBuoy } from 'react-icons/fi';

const LeftSidebar = ({ isMenuOpen, setIsMenuOpen }: any) => {
  const [career, setCareer] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const drawerData: any = [
    {
      name: 'Dashboard',
      path: '/marketing/dashboard',
      icon: GrDashboard,
    },
    {
      name: 'Slider',
      path: '/marketing/slider',
      icon: AiFillFileImage,
    },

    {
      name: 'Featured',
      path: '/marketing/dashboard/featured',
      icon: MdOutlineFeaturedPlayList,
    },
    {
      name: 'Story',
      path: '/marketing/dashboard/story',
      icon: CgInsights,
    },
    {
      name: 'service',
      path: '/marketing/dashboard/service',
      icon: MdOutlineProductionQuantityLimits,
    },
    {
      name: 'brands',
      path: '/marketing/dashboard/brands',
      icon: TbBrandShopee,
    },
    {
      name: 'partners',
      path: '/marketing/dashboard/partners',
      icon: GiThreeFriends,
    },
    {
      name: 'News',
      path: '/marketing/dashboard/news',
      icon: MdLocalOffer,
    },

    {
      name: 'Leadership',
      icon: TfiAnnouncement,
      path: 'marketing/dashboard/leadership',
    },

    {
      name: 'Career',
      subpath: [
        {
          name: 'Landing',
          path: '/marketing/dashboard/career-content',
          icon: SiOnlyoffice,
        },
        {
          name: 'DX Life',
          path: '/marketing/dashboard/career-gallery',
          icon: FiLifeBuoy,
        },
        {
          name: 'Reviews',
          path: '/marketing/dashboard/career-reviews',
          icon: MdReviews,
        },
      ],
      icon: SiOnlyoffice,
    },
    {
      name: 'Concern',
      icon: TfiAnnouncement,
      path: 'marketing/dashboard/concern',
    },
    {
      name: 'History',
      icon: TfiAnnouncement,
      path: 'marketing/dashboard/history',
    },
    {
      name: 'Settings',
      path: '/marketing/dashboard/settings',
      icon: FcSettings,
    },
    {
      name: 'Account',
      path: '/marketing/dashboard/account',
      icon: MdAccountCircle,
    },
  ];
  useEffect(() => {
    if (pathname.includes('career')) {
      setCareer(true);
    }
  }, [pathname]);
  return (
    <div>
      <div>
        <div className='flex items-center h-20 justify-around'>
          <Link href='/'>
            <Image src={logo} alt='logo' className='h-12 w-min text-white left-2 -z-10'></Image>
          </Link>
          <div>
            <CgMenu onClick={() => setIsMenuOpen(!isMenuOpen)} className='cursor-pointer text-white m-2' />
          </div>
        </div>
        <div className=' menuDrawer h-screen text-start px-4'>
          <div className='py-5 '>
            {/* Drawer groups */}
            {drawerData.map((link: any) => {
              if (link.name === 'Career') {
                return (
                  <div key={link.name}>
                    <div
                      onClick={() => setCareer(!career)}
                      className={
                        career
                          ? 'hovered_bg menuDrawer-item'
                          : 'menuDrawer-item'
                      }
                    >
                      <div className='flex items-center'>
                        <div className='mr-2'>
                          <link.icon />
                        </div>
                        <div className={isMenuOpen ? '' : 'hidden'}>
                          <p>{link.name}</p>
                        </div>
                        <div className='ml-6'>
                          <MdArrowDropDown fontSize='medium' />
                        </div>
                      </div>
                      <div
                        className={
                          isMenuOpen ? 'subdrawer' : 'absolute subdrawer'
                        }
                      >
                        <div className={career ? 'block' : 'hidden'}>
                          {link.subpath.map((subLink: any) => (
                            <Link
                              href={subLink.path}
                              className={
                                subLink.path === pathname
                                  ? 'subLink subLink_bg'
                                  : 'subLink'
                              }
                              key={subLink.name}
                            >
                              <div className='mr-2'>
                                <subLink.icon fontSize='small' />
                              </div>
                              <small>{subLink.name}</small>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              } else {
                // single drawer route
                return (
                  <Link
                    href={link.path}
                    className={
                      link.path === pathname
                        ? ' hovered_bg menuDrawer-item flex  items-center space-x-3'
                        : 'menuDrawer-item flex  items-center  space-x-3'
                    }
                    key={link.name}
                  >
                    <div>
                      <link.icon className='h-4 w-4' />
                    </div>
                    <div className={isMenuOpen ? 'md:block' : 'hidden '}>
                      <p>{link.name}</p>
                    </div>
                  </Link>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default LeftSidebar;
