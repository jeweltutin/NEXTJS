import { FaCode, FaPaintBrush, FaMobileAlt } from "react-icons/fa";

export default function WhatIDo() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Section Title */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold">
            What I Do
          </h2>
          <hr className="mt-2 w-16 border-t-4 border-pink-500" />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Single Item */}
          <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all">
            <FaCode className="text-5xl text-pink-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Web Development
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              I build responsive, modern, and user-friendly websites using
              cutting-edge technologies like Next.js and Tailwind CSS.
            </p>
          </div>

          {/* Single Item */}
          <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all">
            <FaPaintBrush className="text-5xl text-pink-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              UI/UX Design
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              I create intuitive and visually appealing designs to ensure
              seamless user experiences.
            </p>
          </div>

          {/* Single Item */}
          <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all">
            <FaMobileAlt className="text-5xl text-pink-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Mobile Development
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              I develop cross-platform mobile applications that run smoothly on
              both Android and iOS devices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
