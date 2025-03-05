import React, { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';

function PriceRangeFilter({ onPriceChange, minPriceShow, maxPriceShow }) {
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    // Handle the change in min price input
    const handleMinPriceChange = (e) => {
        setMinPrice(e.target.value);
    };

    // Handle the change in max price input
    const handleMaxPriceChange = (e) => {
        setMaxPrice(e.target.value);
    };

    // Handle the click on the "Go" button
    const handleGoClick = () => {
        if (minPrice !== "" && maxPrice !== "") {
            // Convert to numbers to ensure filtering works correctly
            const min = parseInt(minPrice, 10);
            const max = parseInt(maxPrice, 10);

            if (min > max) {
                alert("Min price should be less than Max price");
                return;
            }

            // Notify parent component with the new price range
            onPriceChange(min, max);
        } else {
            alert("Please enter both min and max prices");
        }
    };

    return (
        <div>
            <div className="border-b-[1px] lg:border-[1px] border-solid border-[#E7E7E7] lg:rounded-[5px] px-4 lg:px-3.5 py-4 lg:py-4 bg-[#FCFCFC] mb-0 lg:mb-3.5">
                <div className="filter-title flex justify-between items-center pb-2">
                    <h4 className="text-sm font-medium leading-none uppercase">Price Range</h4>
                </div>
                <div className="w-full flex justify-between">
                    <span className="text-[13px] font-normal text-left">Min: ৳{minPriceShow}</span>
                    <span className="text-[13px] font-normal text-right">Max: ৳{maxPriceShow}</span>
                </div>
                <div className="flex gap-2 py-4">
                    <Input
                        type="number"
                        placeholder="Min Price"
                        value={minPrice}
                        onChange={handleMinPriceChange}
                        className="input-field"
                    />
                    <Input
                        type="number"
                        placeholder="Max Price"
                        value={maxPrice}
                        onChange={handleMaxPriceChange}
                        className="input-field"
                    />
                    <Button onClick={handleGoClick} className="go-button">Go</Button>
                </div>
            </div>{/*  */}
        </div>
    );
}

export default PriceRangeFilter;
