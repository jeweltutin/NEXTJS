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

              {/*  <div>
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
              </div> */}

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold pb-3">Personal Info</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-4">
                    <div className="text-pink-500">
                      <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a3 3 0 003.22 0L21 8m-9 13h-3a2 2 0 01-2-2v-3m0 0a2 2 0 012-2h3m6 0h3a2 2 0 012 2v3m0 0a2 2 0 01-2 2h-3M3 8V6a2 2 0 012-2h14a2 2 0 012 2v2m-4 0h-6" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-600 font-medium">Phone</p>
                      <p className="text-gray-800">+123 456 7890</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-pink-500">
                      <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 2a1 1 0 01.83.445l4.68 7.476a1 1 0 01-.16 1.29l-6.916 5.74a4 4 0 11-5.839-5.092L7 8m6 0a4 4 0 110 8m0 0v6m0-6H6" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-600 font-medium">Email</p>
                      <p className="text-gray-800">example@mail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-pink-500">
                      <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 19.879a3 3 0 104.243-4.243m1.415-6.657L8.586 5.828A2 2 0 017 4.414V3a1 1 0 011-1h2a1 1 0 011 1v1.414a2 2 0 01-.586 1.414l-1.707 1.707a1 1 0 00-.293.707v1.586a1 1 0 00.293.707l3.586 3.586a1 1 0 00.707.293h1.586a1 1 0 00.707-.293l1.707-1.707A2 2 0 0117 13.414V12h1a1 1 0 011 1v1.586a2 2 0 01-.586 1.414l-4.243 4.243a3 3 0 01-4.243-4.243" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-600 font-medium">Location</p>
                      <p className="text-gray-800">Hong Kong, China</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-pink-500">
                      <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v6m8-6v6m-8-3h8" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-600 font-medium">Birthday</p>
                      <p className="text-gray-800">May 27, 1990</p>
                    </div>
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
