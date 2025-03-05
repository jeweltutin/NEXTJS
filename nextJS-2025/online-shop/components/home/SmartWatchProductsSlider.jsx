"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductItemsFSlider from "./ProductItemsFSlider";
import Image from "next/image";

function SmartWatchProductsSlider({ productList }) {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 1024, min: 768 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 768, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    if (productList.length === 0) {
        return <div>No products available</div>;
    }

    return (
        <div className="mt-1 px-5 xl:px-1">
            <h2 className="text-green-600 font-bold text-2xl py-4">
                Smart Watch
            </h2>
            <div className="pb-5 w-full">
                <Image src={"/images/x-watch.jpg"} width={1600} height={200} alt="banner" className="object-contain w-full" />
            </div>
            <Carousel responsive={responsive} autoPlay={false} ssr={true} infinite={true}  >
                {productList.map((product) => (
                    <ProductItemsFSlider product={product} key={product.id || product.slug} />
                ))}
            </Carousel>
        </div>
    );
}

export default SmartWatchProductsSlider;
