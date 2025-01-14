import ClientSlider from "@/app/components/ClientSlider";
import WhatIDo from "@/app/components/WhatIDo";


function About() {

  return (
    <>
      <section>
        <div className="px-12 lg:px-20">
          <div className="text-left mb-8">
            <h2 className="text-4xl font-bold">About Me</h2>
            <hr className="mt-2 w-16 border-t-4 border-pink-500" />
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="md:w-1/4 mb-6 md:mb-0">
              <img src="images/name.jpg" alt="Profile Picture" className="rounded-lg shadow-lg w-full max-w-[300px] max-h-[400px] object-cover" />
            </div>

            <div className="md:w-2/3 md:pl-2">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold">Who am I?</h3>
                <p className="mt-4">
                  I’m a Creative Director and UI/UX Designer from Sydney, Australia, working in web
                  development and print media. I enjoy turning complex problems into simple,
                  beautiful, and intuitive designs.
                </p>
                <p className="mt-4">
                  My aim is to bring across your message and identity in the most creative way. I created
                  web design for many famous brand companies.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold">Personal Info</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="flex items-center text-gray-600">
                    <span className="material-icons text-pink-500 mr-2">phone</span>
                    <span>+123 456 7890</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="material-icons text-pink-500 mr-2">place</span>
                    <span>Hong Kong, China</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="material-icons text-pink-500 mr-2">email</span>
                    <span>example@mail.com</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="material-icons text-pink-500 mr-2">cake</span>
                    <span>May 27, 1990</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhatIDo />
      <ClientSlider />
    </>
  )
}

export default About;
