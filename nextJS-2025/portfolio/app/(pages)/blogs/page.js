"use client";
import clsx from "clsx";
import { useMode } from '../../context/ModeContext';

function Blogs() {
    const { isDarkMode, toggleTheme } = useMode();

    return (
        <div className="px-12 lg:px-20">
            <div className="py-12">
                <h2 className="after-effect after:left-32 mt-12 lg:mt-0">Blogs</h2>
                <div className="grid gap-x-10 gap-y-7 mb-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-[40px]">
                    <div className={clsx("p-5 rounded-lg mb-2 h-full background:transparent",
                        {
                            "bg-[rgb(252,244,255)]": !isDarkMode, // Light green background in light mode
                            "dark:border-[#212425] dark:border-2": isDarkMode // Dark border in dark mode
                        }
                    )}>
                        <div className="overflow-hidden rounded-lg">
                            <img alt="blog" src="/images/blogs/blog1.jpg" width="310" height="310" decoding="async" data-nimg="1" className="rounded-lg w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110" loading="lazy" />
                        </div>
                        <div className="flex mt-4 text-tiny text-gray-lite dark:text-[#A6A6A6]">
                            <span>177 April</span>
                            <span className="pl-6 relative after:absolute after:h-1 after:w-1 after:bg-gray-lite after:rounded-full after:left-2 after:top-[50%] transform after:-translate-y-1/2">Inspiration</span>
                        </div>
                        <h3 className={clsx("text-lg font-medium duration-300 transition cursor-pointer mt-3 pr-4 hover:text-[#FA5252] dark:hover:text-[#FA5252]",
                            {
                                "text-black": !isDarkMode,  // Apply text-black when not in dark mode
                                "text-white": isDarkMode    // Apply text-white when in dark mode
                            }
                        )}>
                            How to Own Your Audience by Creating an Email List.
                        </h3>
                    </div>
                    <div className={clsx("p-5 rounded-lg mb-2 h-full background:transparent", { "bg-[rgb(255,240,240)]": !isDarkMode, "dark:border-[#212425] dark:border-2": isDarkMode })}>
                        <div className="overflow-hidden rounded-lg">
                            <img alt="blog" src="/images/blogs/blog2.jpg" width="310" height="310" decoding="async" data-nimg="1" className="rounded-lg w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110" loading="lazy" />
                        </div>
                        <div className="flex mt-4 text-tiny text-gray-lite dark:text-[#A6A6A6]">
                            <span>21 April</span>
                            <span className="pl-6 relative after:absolute after:h-1 after:w-1 after:bg-gray-lite after:rounded-full after:left-2 after:top-[50%] transform after:-translate-y-1/2">Web Design</span>
                        </div>
                        <h3 className={clsx("text-lg font-medium duration-300 transition cursor-pointer mt-3 pr-4 hover:text-[#FA5252] dark:hover:text-[#FA5252]", { "text-black": !isDarkMode, "text-white": isDarkMode })}>
                            The window know to say beside you
                        </h3>
                    </div>
                    <div className={clsx("p-5 rounded-lg mb-2 h-full background:transparent", { "bg-[rgb(252,244,255)]": !isDarkMode, "dark:border-[#212425] dark:border-2": isDarkMode })}>
                        <div className="overflow-hidden rounded-lg">
                            <img alt="blog" src="/images/blogs/blog3.jpg" width="310" height="310" decoding="async" data-nimg="1" className="rounded-lg w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110" loading="lazy" />
                        </div>
                        <div className="flex mt-4 text-tiny text-gray-lite dark:text-[#A6A6A6]">
                            <span>27 April</span>
                            <span className="pl-6 relative after:absolute after:h-1 after:w-1 after:bg-gray-lite after:rounded-full after:left-2 after:top-[50%] transform after:-translate-y-1/2">Inspiration</span>
                        </div>
                        <h3 className={clsx("text-lg font-medium duration-300 transition cursor-pointer mt-3 pr-4 hover:text-[#FA5252] dark:hover:text-[#FA5252]", { "text-black": !isDarkMode, "text-white": isDarkMode })}>
                            How to Own Your Audience by Creating an Email List.
                        </h3>
                    </div>
                    <div className={clsx("p-5 rounded-lg mb-2 h-full background:transparent", { "bg-[rgb(238,251,255)]": !isDarkMode, "dark:border-[#212425] dark:border-2": isDarkMode })}>
                        <div className="overflow-hidden rounded-lg">
                            <img alt="blog" src="/images/blogs/blog4.jpg" width="310" height="310" decoding="async" data-nimg="1" className="rounded-lg w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110" loading="lazy" />
                        </div>
                        <div className="flex mt-4 text-tiny text-gray-lite dark:text-[#A6A6A6]">
                            <span>000 April</span>
                            <span className="pl-6 relative after:absolute after:h-1 after:w-1 after:bg-gray-lite after:rounded-full after:left-2 after:top-[50%] transform after:-translate-y-1/2">Inspiration</span>
                        </div>
                        <h3 className={clsx("text-lg font-medium duration-300 transition cursor-pointer mt-3 pr-4 hover:text-[#FA5252] dark:hover:text-[#FA5252]", { "text-black": !isDarkMode, "text-white": isDarkMode })}>
                            Everything You Need to Know About Web Accessibility.
                        </h3>
                    </div>
                    <div className={clsx("p-5 rounded-lg mb-2 h-full background:transparent", { "bg-[rgb(252,244,255)]": !isDarkMode, "dark:border-[#212425] dark:border-2": isDarkMode })}>
                        <div className="overflow-hidden rounded-lg">
                            <img alt="blog" src="/images/blogs/blog5.jpg" width="310" height="310" decoding="async" data-nimg="1" className="rounded-lg w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110" loading="lazy" />
                        </div>
                        <div className="flex mt-4 text-tiny text-gray-lite dark:text-[#A6A6A6]">
                            <span>27 April</span>
                            <span className="pl-6 relative after:absolute after:h-1 after:w-1 after:bg-gray-lite after:rounded-full after:left-2 after:top-[50%] transform after:-translate-y-1/2">Inspiration</span>
                        </div>
                        <h3 className={clsx("text-lg font-medium duration-300 transition cursor-pointer mt-3 pr-4 hover:text-[#FA5252] dark:hover:text-[#FA5252]", { "text-black": !isDarkMode, "text-white": isDarkMode })}>
                            Top 10 Toolkits for Deep Learning in 2021.
                        </h3>
                    </div>
                    <div className={clsx("p-5 rounded-lg mb-2 h-full background:transparent", { "bg-[rgb(238,251,255)]": !isDarkMode, "dark:border-[#212425] dark:border-2": isDarkMode })}>
                        <div className="overflow-hidden rounded-lg">
                            <img alt="blog" src="/images/blogs/blog6.jpg" width="310" height="310" decoding="async" data-nimg="1" className="rounded-lg w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110" loading="lazy" />
                        </div>
                        <div className="flex mt-4 text-tiny text-gray-lite dark:text-[#A6A6A6]">
                            <span>27 April</span>
                            <span className="pl-6 relative after:absolute after:h-1 after:w-1 after:bg-gray-lite after:rounded-full after:left-2 after:top-[50%] transform after:-translate-y-1/2">Inspiration</span>
                        </div>
                        <h3 className={clsx("text-lg font-medium duration-300 transition cursor-pointer mt-3 pr-4 hover:text-[#FA5252] dark:hover:text-[#FA5252]",{ "text-black": !isDarkMode,"text-white": isDarkMode })}>
                            Everything You Need to Know About Web Accessibility.
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs
