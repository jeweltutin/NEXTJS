'use client';

//import Link from "next/link";
import { Link as ScrollLink } from 'react-scroll';
import { useMediaQuery } from 'usehooks-ts';


const links = [
    { name: 'home', target: 'home', offset: -100  },
    { name: 'about', target: 'about', offset: -80  },
    { name: 'classes', target: 'classes', offset: -80  },
    { name: 'team', target: 'team', offset: 0  },
    { name: 'prices', target: 'prices', offset: -40  },
    { name: 'testimonial', target: 'testimonial', offset: 0  },
    { name: 'blog', target: 'blog', offset: 0  },
    { name: 'contact', target: 'contact', offset: 0  }
]

const MobileNav = ({ContainerStyles} : {ContainerStyles: string}) => {
  const isMobile = useMediaQuery('(min-width: 640px)')
  return (
      <nav className={`${ContainerStyles}`}>
        {
            links.map((link, index) => {
                //return <Link key={index} href={"#"+link.target}>{ link.name }</Link>
                return <ScrollLink key={index} offset={link.offset} to={link.target} smooth spy activeClass={`${!isMobile && 'active'}`} className="cursor-pointer hover:text-accent transition-all">{link.name}</ScrollLink>              
            })
        } 
      </nav>
  )
}

export default MobileNav
