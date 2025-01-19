"use client";
import clsx from "clsx";
import Masonry from "react-masonry-css";
import { useState } from "react";
import { useMode } from "../../context/ModeContext";

const categories = ["All", "Video", "Web Design", "Logo", "Graphic Design"];

const portfolioItems = [
  { id: 1, category: "UI/UX", image: "/images/works/works1.jpg", title: "Chul urina" },
  { id: 2, category: "Video", image: "/images/works/works2.jpg", title: "Chul urina" },
  { id: 3, category: "UI/UX", image: "/images/works/works3.jpg", title: "Chul urina" },
  { id: 4, category: "Web Design", image: "/images/works/works4.jpg", title: "Aura Dione" },
  { id: 5, category: "UI/UX", image: "/images/works/works5.jpg", title: "Chul urina" },
  { id: 6, category: "Web Design", image: "/images/works/works6.jpg", title: "Chul urina" },
  { id: 7, category: "Logo", image: "/images/works/works7.jpg", title: "Chul urina" },
  { id: 8, category: "Video", image: "/images/works/works8.jpg", title: "Chul urina" },
  { id: 9, category: "Logo", image: "/images/works/works9.jpg", title: "Chul urina" },
];

function Works() {
  const { isDarkMode } = useMode();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter(item => item.category === selectedCategory);

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <div className="px-12 lg:px-20">
      <div className="container lg:rounded-2xl">
        <div className="mb-8 px-4 sm:px-5 md:px-10 lg:px-[60px]">
          <div className="py-12">
            {/* <h2 className="after-effect after:left-48 mt-12 lg:mt-0">Portfolio</h2> */}
            <div className="flex items-center">
              <h1 className="text-3xl font-bold mr-3">Portfolio</h1>
              <div className="h-[2px] w-48 bg-red-500"></div>
            </div>
            <ul className="mt-[40px] flex w-full justify-start md:justify-end flex-wrap font-medium pb-12">
              {categories.map(category => (
                <li
                  key={category}
                  className={clsx(
                    "cursor-pointer mr-4 md:mx-4",
                    category === selectedCategory ? "text-[#FA5252]" : "fillter-btn"
                  )}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {filteredItems.map(item => (
                <div
                  key={item.id}
                  className={clsx("rounded-lg p-6", {
                    "bg-[rgb(255,240,240)]": !isDarkMode,
                    "dark:border-[2px] border-[#212425]": isDarkMode,
                  })}
                >
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
                    />
                  </div>
                  <span className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">
                    {item.category}
                  </span>
                  <h2 className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] mt-2">
                    {item.title}
                  </h2>
                </div>
              ))}
            </Masonry>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
