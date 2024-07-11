//rafce
"use client";
import Link from "next/link";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import Image from "next/image";
import { useEffect, useState } from "react";



const Header = () => {
  const [headerActive, setHeaderActive] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setHeaderActive(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
   }, []);
   console.log(headerActive);

  return (
    <header className={`${headerActive ? 'h-[100px]' : 'h-[124px]'} fixed max-w-[1920px] left-0 top-0 w-full bg-primary-200 h-[100px] transition-all`}>
      <div className="container mx-auto h-full flex items-center justify-between">
        <Link href="/">
          <Image src={'/assets/img/logo.png'} width={117} height={55} alt="logo"></Image>
        </Link>
        {/* <MobileNav ContainerStyles="flex flex-col text-center gap-8 fixed bg-primary-200 w-full left-0 top-[124px] text-base uppercase font-medium lg:hidden text-white"/> */}
        <Nav containerStyles='flex gap-4 hidden lg:flex text-white' />
      </div>
    </header>
  )
}

export default Header;
