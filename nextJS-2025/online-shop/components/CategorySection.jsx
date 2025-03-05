"use client";
import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function CategorySection({ categoryList }) {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 8,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 8
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
        },
    };

    return (
        <div className="mt-5">
            <h2 className="text-green-600 font-bold text-2xl">
                Shop by Category
            </h2>
            {/* Wrap the entire map in the Carousel */}
            <Carousel responsive={responsive} autoPlay={true} arrows={false} ssr={true} infinite={true} draggable={true} >
                {categoryList.map((category) => (
                    <Link key={category.id || category.slug} href={'/category/' + category.slug} className="flex flex-col gap-2 items-center bg-green-50 p-3 rounded-lg group cursor-pointer hover:bg-green-600 mr-4 mt-3" >
                        <Image
                            src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + category?.icon[0]?.url}
                            width={50}
                            height={50}
                            alt="icon"
                            className="group-hover:scale-125 transition-all ease-in-out"
                        />
                        <h2 className="text-green-800 group-hover:text-white">
                            {category.name}
                        </h2>
                    </Link>
                ))}
            </Carousel>
        </div>
    );
}

export default CategorySection;
