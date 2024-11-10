"use client";
import { useState, useEffect } from "react";
import PriceSlider from "@/components/PriceSlider";
import ProductList from "@/components/ProductList";
import TopCategoryList from "@/components/TopCategoryList";
import Image from "next/image";
import GlobalApi from "@/actions/GlobalApi";
import BrandFilter from "./BrandFilter";
import { List } from "lucide-react";
import SelectProductFilter from "./selectProductFilter";

function ProductCategoryClient({ initialProductList, categoryList, theCategory, categoryName, brands }) {
    const [filteredProducts, setFilteredProducts] = useState(initialProductList);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [loading, setLoading] = useState(false);
    

    const productCount = initialProductList.length;
    const catName = categoryName ? categoryName.split("-").join(" ") : "";

    // Set initial price range
    /* useEffect(() => {
        if (initialProductList.length > 0) {
            const prices = initialProductList.map((product) => product.mrp);
            setMinPrice(Math.min(...prices));
            setMaxPrice(Math.max(...prices));
        }
    }, [initialProductList]); */

    // Update selected brands for filtering

    const handlePriceChange = async (minPrice, maxPrice) => {
        //const filtered = await GlobalApi.getProductsByCategoryWithPriceRange(categoryName, minPrice, maxPrice);
        //setFilteredProducts(filtered);
    };


    //Another way
    const handleMinPriceChange = (e) => {
        setMinPrice(e.target.value);
    };

    // Handle the change in max price input
    const handleMaxPriceChange = (e) => {
        setMaxPrice(e.target.value);
    };

    // Update products based on price and brand filters
    const handleBrandChange = async (selectedBrands) => {
        setLoading(true);  // Ensure loading state is set to true at the beginning
        try {
            const products = await GlobalApi.getProductsByCategoryWithBrands(
                categoryName, selectedBrands
            );
            console.log(products);
            setFilteredProducts(products);
        } catch (error) {
            console.error("Error fetching filtered products:", error);
        } finally {
            setLoading(false);  // Ensure loading state is set to false when the function completes
        } 
    };
    

    // Fetch filtered products whenever filters change
    /* useEffect(() => {
        handleFiltersChange(minPrice, maxPrice, selectedBrands);
    }, [minPrice, maxPrice, selectedBrands, categoryName]); */

    return (
        <div className="container mx-auto">
            <div className="relative">
                <div className="mb-7 border rounded-md">
                    <Image
                        src={
                            theCategory[0]?.banner?.url
                                ? process.env.NEXT_PUBLIC_BACKEND_BASE_URL + theCategory[0]?.banner?.url
                                : "/images/default-cat-banner.jpg"
                        }
                        width={1200}
                        height={290}
                        alt=""
                        className="w-full max-h-[291px] object-contain"
                    />
                </div>
                <h2 className="absolute right-0 top-0 p-2 mb-6 bg-primary bg-opacity-75 rounded-2xl text-white text-2xl text-center capitalize">
                    {catName}
                </h2>
            </div>

            <TopCategoryList categoryList={categoryList} selectedCategory={categoryName} />

            <div className="md:flex md:flex-row gap-5 py-5 md:py-10">
                <div className="basis-1/4">
                    <PriceSlider minValue={minPrice} maxValue={maxPrice} onPriceChange={handlePriceChange} />

                    <div className="border-b-[1px] lg:border-[1px] border-solid border-[#E7E7E7] lg:rounded-[5px] px-4 lg:px-3.5 py-4 lg:py-4 bg-[#FCFCFC] mb-0 lg:mb-3.5">
                        <div className="filter-title flex justify-between items-center pb-2">
                            <h4 className="text-sm font-medium leading-none uppercase">Brands</h4>
                            <div className="flex items-center justify-end">
                                <List />
                            </div>
                        </div>
                        <BrandFilter brands={brands} onFilterChange={handleBrandChange} />
                    </div>
                </div>
                <div>
                    <div className="flex justify-between bg-gray-100 p-2 items-center">
                        <h2 className="text-black uppercase">
                            {productCount ? `${catName} has ${productCount} products` : "Our Popular Products"}
                        </h2>
                        <div>
                            <SelectProductFilter />
                        </div>
                    </div>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <ProductList productList={filteredProducts} categoryName={categoryName} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProductCategoryClient;
