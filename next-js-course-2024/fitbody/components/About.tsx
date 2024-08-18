import { FaUsers } from "react-icons/fa";
import { IoIosPricetag } from "react-icons/io";
import { FaDumbbell } from "react-icons/fa";

import { motion } from 'framer-motion';
import { fadeIn } from "@/lib/variants";

const featured = [
  {
    icon: <FaUsers />,
    title: 'award-winning trainers',
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eius ex cum distinctio esse adipisci facilis quas aut totam sed ab reiciendis perferendis tempore sequi suscipit, ipsa debitis doloremque pariatur?'
  },
  {
    icon: <IoIosPricetag />,
    title: 'excellent prices',
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eius ex cum distinctio esse adipisci facilis quas aut totam sed ab reiciendis perferendis tempore sequi suscipit, ipsa debitis doloremque pariatur?'
  },
  {
    icon: <FaDumbbell />,
    title: 'modern equipment',
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eius ex cum distinctio esse adipisci facilis quas aut totam sed ab reiciendis perferendis tempore sequi suscipit, ipsa debitis doloremque pariatur?'
  },
]

const About = () => {
  return (
    <section className="pt-8 pb-14 lg:pt-16 lg:pb-28" id='about'>
      <div className="container mx-auto">
         <div className="flex flex-col items-center gap-2 mb-8">
          <h2 className="h2 text-center">About</h2>
          <p className="max-w-[600] mx-auto text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, qui. Eligendi placeat, 
            saepe eveniet quod aliquid ad incidunt sed sapiente quibusdam animi facere perspiciatis
             nulla reiciendis ut expedita aspernatur vel.
          </p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-14">
          {featured.map((feature, index) => {
            return (
              <div key={index} className="flex flex-col justify-center items-center gap-4 border p-10">
                <div className="text-4xl bg-primary-300 text-white w-[80px] h-[80px] rounded-full flex justify-center items-center">
                  {feature.icon}
                </div>
                <div className="flex flex-col justify-center items-center gap-2 text-center">
                  <h4 className="h4 text-accent">{ feature.title }</h4>
                  <p>
                    { feature.subtitle }
                  </p>
                </div>
              </div>
            )
          })}
         </div>
      </div>
      
    </section>
  )
}

export default About
