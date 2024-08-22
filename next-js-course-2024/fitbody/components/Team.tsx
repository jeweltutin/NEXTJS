import Image from "next/image"
import Link from "next/link"
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa"
import CustomButton from "./CustomButton"


const trainerData = [
  {
    image: "/assets/img/trainers/david.jpg",
    name: "David Willims",
    role: "Body builder coach",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis earum magnam libero eaque repellendus dolorum.",
    social: [
      {
        icon: FaFacebook,
        href: "http://facebook.com"
      },
      {
        icon: FaTwitter,
        href: "http://twitter.com"
      },
      {
        icon: FaYoutube,
        href: "http://youtube.com"
      },
    ]
  },

  {
    image: "/assets/img/trainers/rosy.jpg",
    name: "Rosy Rivers",
    role: "Body builder coach",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis earum magnam libero eaque repellendus dolorum.",
    social: [
      {
        icon: FaFacebook,
        href: "http://facebook.com"
      },
      {
        icon: FaTwitter,
        href: "http://twitter.com"
      },
      {
        icon: FaYoutube,
        href: "http://youtube.com"
      },
    ]
  },

  {
    image: "/assets/img/trainers/matt.jpg",
    name: "Matt Stone",
    role: "Body builder coach",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis earum magnam libero eaque repellendus dolorum.",
    social: [
      {
        icon: FaFacebook,
        href: "http://facebook.com"
      },
      {
        icon: FaTwitter,
        href: "http://twitter.com"
      },
      {
        icon: FaYoutube,
        href: "http://youtube.com"
      },
    ]
  },

  {
    image: "/assets/img/trainers/sofia.jpg",
    name: "Sofia Lauren",
    role: "Body builder coach",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis earum magnam libero eaque repellendus dolorum.",
    social: [
      {
        icon: FaFacebook,
        href: "http://facebook.com"
      },
      {
        icon: FaTwitter,
        href: "http://twitter.com"
      },
      {
        icon: FaYoutube,
        href: "http://youtube.com"
      },
    ]
  },
]

const Team = () => {
  return (
    <section className="py-12 xl:h-[112vh]" id='team'>
      <div className="container mx-auto h-full flex flex-col items-center justify-center">
        <h2 className="h2 text-center mb-6">Our trainers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 mb-12">
          {trainerData.map((trainer, index) => {
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="relative w-[320px] h-[360px] mx-auto mb-4">
                  <Image src={trainer.image} fill alt="" />
                </div>
                <h4 className="h4 mb-2">{trainer.name}</h4>
                <p className="uppercase text-xs tracking-[3px] mb-2">
                  {trainer.role}
                </p>
                <p className="mb-6 max-w-[320px] mx-auto">{trainer.description}</p>

                <div className="flex justify-center gap-12">
                  {trainer.social.map((social,index) => {
                    return (
                      <div key={index}>
                        <Link href={social.href} className= "hover:text-accent transition-all">
                          <social.icon className="text-lg" />
                        </Link>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        <div>
          <CustomButton containerStyles="w-[196px] h-[62px]" text="See all trainers" />
        </div>
      </div>
    </section>
  )
}

export default Team
