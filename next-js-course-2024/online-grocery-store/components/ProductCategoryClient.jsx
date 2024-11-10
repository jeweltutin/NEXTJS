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
import PriceRangeFilter from "./PriceRangeFilter";

function ProductCategoryClient({ initialProductList, categoryList, theCategory, categoryName, brands }) {
    const [filteredProducts, setFilteredProducts] = useState(initialProductList);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [loading, setLoading] = useState(false);

    const productCount = filteredProducts.length;
    const catName = categoryName ? categoryName.split("-").join(" ") : "";

    // Set initial price range
    useEffect(() => {
        // Ensure initial data is set
        setFilteredProducts(initialProductList);
    }, [initialProductList]);

    // Handle price range change
    const handlePriceChange = async (minPrice, maxPrice) => {
        setLoading(true); // Start loading
        setMinPrice(minPrice);
        setMaxPrice(maxPrice);

        // Make API call to get filtered products by price range and brand
        const filtered = await GlobalApi.getProductsByCategoryWithFilters(
            categoryName,
            selectedBrands,
            minPrice,
            maxPrice
        );
        setFilteredProducts(filtered);
        setLoading(false); // Stop loading after data is fetched
    };

    // Handle brand change
    const handleBrandChange = async (selectedBrands) => {
        setLoading(true); // Start loading
        setSelectedBrands(selectedBrands);

        // Make API call to get filtered products by brand
        const filtered = await GlobalApi.getProductsByCategoryWithFilters(
            categoryName,
            selectedBrands,
            minPrice,
            maxPrice
        );
        console.log("With brands", filtered);
        setFilteredProducts(filtered);
        setLoading(false); // Stop loading after data is fetched
    };

    return (
        <div className="container mx-auto">
            <div className="relative">
                <div className="mb-7 border rounded-md">
                    <Image
                        src={theCategory[0]?.banner?.url ? process.env.NEXT_PUBLIC_BACKEND_BASE_URL + theCategory[0]?.banner?.url : "/images/default-cat-banner.jpg"}
                        width={1200}
                        height={290}
                        alt="Category Banner"
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
                    <PriceRangeFilter onPriceChange={handlePriceChange} />

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
