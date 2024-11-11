"use client";
import { useState, useEffect } from "react";
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

    const [filter, setFilter] = useState("byNewest");
    const [sortedProducts, setSortedProducts] = useState(filteredProducts);

    const productCount = filteredProducts.length;
    const catName = categoryName ? categoryName.split("-").join(" ") : "";

    const prices = initialProductList.map((product) => product.mrp);
    const minPriceShow = Math.min(...prices);
    const maxPriceShow = Math.max(...prices);

    useEffect(() => {
        setFilteredProducts(initialProductList);
    }, [initialProductList]);

    const handlePriceChange = async (minPrice, maxPrice) => {
        setLoading(true);
        setMinPrice(minPrice);
        setMaxPrice(maxPrice);

        const filtered = await GlobalApi.getProductsByCategoryWithFilters(
            categoryName,
            selectedBrands,
            minPrice,
            maxPrice
        );
        setFilteredProducts(filtered);
        setLoading(false);
    };

    const handleBrandChange = async (selectedBrands) => {
        setLoading(true);
        setSelectedBrands(selectedBrands);

        const filtered = await GlobalApi.getProductsByCategoryWithFilters(
            categoryName,
            selectedBrands,
            minPrice,
            maxPrice
        );
        setFilteredProducts(filtered);
        setLoading(false);
    };

    function handleFilterChange(selectedFilter) {
        setFilter(selectedFilter);
    }

    useEffect(() => {
        let sortedList = [...filteredProducts];
        switch (filter) {
            case "byNewest":
                sortedList.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
            case "byPriceLH":
                sortedList.sort((a, b) => a.mrp - b.mrp);
                break;
            case "byPriceHL":
                sortedList.sort((a, b) => b.mrp - a.mrp);
                break;
            case "byNameAZ":
                sortedList.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "byNameZA":
                sortedList.sort((a, b) => b.name.localeCompare(a.name));
                break;
            default:
                sortedList = filteredProducts;
        }
        setSortedProducts(sortedList);
    }, [filter, filteredProducts]);

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
                    <PriceRangeFilter onPriceChange={handlePriceChange} minPriceShow={minPriceShow} maxPriceShow={maxPriceShow} />

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
                            <SelectProductFilter onFilterChange={handleFilterChange} />
                        </div>
                    </div>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <ProductList productList={sortedProducts} categoryName={categoryName} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProductCategoryClient;
