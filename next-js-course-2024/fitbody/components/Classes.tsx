import Image from "next/image";
import CustomButton from "./CustomButton";

const classes = [
  {
    name: "body building",
    img: "/assets/img/classes/bodybuilding.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident deserunt, quae quis quasi odio."
  },
  {
    name: "cardio",
    img: "/assets/img/classes/cardio.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident deserunt, quae quis quasi odio."
  },
  {
    name: "fitness",
    img: "/assets/img/classes/fitness.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident deserunt, quae quis quasi odio."
  },
  {
    name: "crossfit",
    img: "/assets/img/classes/crossfit.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident deserunt, quae quis quasi odio."
  },
]

const Classes = () => {
  return (
    <section id="classes">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {classes.map((item, index) => {
          return(
            <div key={index} className="relative w-full h-[300px] lg:h-[485px] flex flex-col justify-center items-center">
              <div className="bg-black/50 absolute w-full h-full top-0 z-10"></div>
              <Image src={item.img} fill className="object-cover" alt="" />
              <div className="flex flex-col max-w-[380px] text-center z-20 justify-center items-center gap-4">
                <h3 className="h3 text-accent">{ item.name }</h3>
                <p className="text-white">{ item.description }</p>
                <div>
                  <CustomButton containerStyles="w-[144px] h-[46px]" text="Read more" />
                </div>
              </div>
            </div>
          )
        })
    
        }
      </div>
    </section>
  )
}

export default Classes
