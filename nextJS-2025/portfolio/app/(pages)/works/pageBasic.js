"use client";
import clsx from "clsx";
import { useMode } from '../../context/ModeContext';

function Works() {
    const { isDarkMode, toggleTheme } = useMode();

    return (
        <div className="px-12 lg:px-20">
            <div className="container lg:rounded-2xl">
                <div data-aos="fade" className="aos-init aos-animate">
                    <div className=" mb-8 px-4 sm:px-5 md:px-10 lg:px-[60px]">
                        <div className="py-12">
                            <h2 className="after-effect after:left-48 mt-12 lg:mt-0">Portfolio</h2>
                            <ul className="mt-[40px] flex w-full justify-start md:justify-end flex-wrap font-medium pb-12">
                                <li className="text-[#FA5252] mr-4 md:mx-4">All</li>
                                <li className="fillter-btn mr-4 md:mx-4">Video</li>
                                <li className="fillter-btn mr-4 md:mx-4">Web Design</li>
                                <li className="fillter-btn ml-0 mr-4 md:mx-4">Logo</li>
                                <li className="fillter-btn  ">Graphic Design</li>
                            </ul>
                            <div className="my-masonry-grid">
                                <div className="my-masonry-grid_column lg:w-[33.3333%] md:w-[50%] sm:w-[100%]">
                                    <div className={clsx("rounded-lg p-6 ", { "bg-[rgb(255,240,240)]": !isDarkMode, "dark:border-[2px] border-[#212425]": isDarkMode })}>
                                        <div className="overflow-hidden rounded-lg">
                                            <img src="/images/works/works1.jpg" />
                                        </div>
                                        <span className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">UI/UX</span>
                                        <h2 className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] mt-2">Chul urina</h2>
                                    </div>
                                    <div className={clsx("rounded-lg p-6 ", { "bg-[rgb(233,250,255)]": !isDarkMode, "dark:border-[2px] border-[#212425]": isDarkMode })}>
                                        <div className="overflow-hidden rounded-lg">
                                            <img src="/images/works/works2.jpg" width="300" height="300" decoding="async" data-nimg="1" className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto " />
                                        </div>
                                        <span className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">Video</span>
                                        <h2 className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] mt-2">Chul urina</h2>
                                    </div>
                                    <div className={clsx("rounded-lg p-6 ", { "bg-[rgb(255,240,248)]": !isDarkMode, "dark:border-[2px] border-[#212425]": isDarkMode })}>
                                        <div className="overflow-hidden rounded-lg">
                                            <img src="/images/works/works3.jpg" width="300" height="300" decoding="async" data-nimg="1" className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto " />
                                        </div>
                                        <span className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">UI/UX</span>
                                        <h2 className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] mt-2">Chul urina</h2>
                                    </div>
                                </div>
                                <div className="my-masonry-grid_column w-[33.3333%]">
                                    <div className={clsx("rounded-lg p-6 ", { "bg-[rgb(255,243,252)]": !isDarkMode, "dark:border-[2px] border-[#212425]": isDarkMode })}>
                                        <div className="overflow-hidden rounded-lg">
                                            <img src="/images/works/works4.jpg" width="300" height="300" decoding="async" data-nimg="1" className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto " />
                                        </div>
                                        <span className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">Web Design</span>
                                        <h2 className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] mt-2">Aura Dione</h2>
                                    </div>
                                    <div className={clsx("rounded-lg p-6 ", { "bg-[rgb(255,250,233)]": !isDarkMode, "dark:border-[2px] border-[#212425]": isDarkMode })}>
                                        <div className="overflow-hidden rounded-lg">
                                            <img src="/images/works/works5.jpg" width="300" height="300" decoding="async" data-nimg="1" className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto " />
                                        </div>
                                        <span className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">UI/UX</span>
                                        <h2 className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] mt-2">Chul urina</h2>
                                    </div>
                                    <div className={clsx("rounded-lg p-6 ", { "bg-[rgb(255,240,248)]": !isDarkMode, "dark:border-[2px] border-[#212425]": isDarkMode })}>
                                        <div className="overflow-hidden rounded-lg">
                                            <img src="/images/works/works6.jpg" width="300" height="300" decoding="async" data-nimg="1" className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto " />
                                        </div>
                                        <span className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">Web Design</span>
                                        <h2 className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] mt-2">Chul urina</h2>
                                    </div>
                                </div>
                                <div className="my-masonry-grid_column w-[33.3333%]">
                                    <div className={clsx("rounded-lg p-6 ", { "bg-[rgb(255,240,240)]": !isDarkMode, "dark:border-[2px] border-[#212425]": isDarkMode })}>
                                        <div className="overflow-hidden rounded-lg">
                                            <img src="/images/works/works7.jpg" width="300" height="300" decoding="async" data-nimg="1" className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto " />
                                        </div>
                                        <span className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">Logo</span>
                                        <h2 className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] mt-2">Chul urina</h2>
                                    </div>
                                    <div className={clsx("rounded-lg p-6 ", { "bg-[rgb(244,244,255)]": !isDarkMode, "dark:border-[2px] border-[#212425]": isDarkMode })}>
                                        <div className="overflow-hidden rounded-lg">
                                            <img src="/images/works/works8.jpg" width="300" height="300" decoding="async" data-nimg="1" className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto " />
                                        </div>
                                        <span className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">Video</span>
                                        <h2 className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] mt-2">Chul urina</h2>
                                    </div>
                                    <div className={clsx("rounded-lg p-6 ", { "bg-[rgb(252,244,255)]": !isDarkMode, "dark:border-[2px] border-[#212425]": isDarkMode })}>
                                        <div className="overflow-hidden rounded-lg">
                                            <img src="/images/works/works9.jpg" />
                                        </div>
                                        <span className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">Logo</span>
                                        <h2 className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] mt-2">Chul urina</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works;
