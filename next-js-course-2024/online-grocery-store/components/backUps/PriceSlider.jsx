"use client";
import MultiRangeSlider from "multi-range-slider-react";

function PriceSlider({ minValue, maxValue, onPriceChange }) {
    const handleInput = (e) => {
        onPriceChange(e.minValue, e.maxValue); // Notify parent component about price change
    };

    return (
        <div>
            <div className="border-b-[1px] lg:border-[1px] border-solid border-[#E7E7E7] lg:rounded-[5px] px-4 lg:px-3.5 py-4 lg:py-4 bg-[#FCFCFC] mb-0 lg:mb-3.5">
                <div className="filter-title flex justify-between items-center pb-2">
                    <h4 className="text-sm font-medium leading-none uppercase">Price Range</h4>
                </div>
                <div className="w-full flex justify-between">
                    <span className="text-[13px] font-normal text-left">Min: ৳{minValue}</span>
                    <span className="text-[13px] font-normal text-right">Max: ৳{maxValue}</span>
                </div>
                
                {/* Price range slider */}
                <MultiRangeSlider
                    min={minValue} // Min price from parent
                    max={maxValue} // Max price from parent
                    step={5}
                    ruler={false}
                    label={false}
                    minValue={minValue} // Min value passed from parent
                    maxValue={maxValue} // Max value passed from parent
                    onInput={handleInput} // Handle input change
                    style={{ border: "none", boxShadow: "none", padding: "15px 10px" }}
                    barInnerColor="green"
                />

                <div className="w-full flex justify-between">
                    <span className="text-[14px] font-medium text-left text-main">{minValue}</span>
                    <span className="text-[14px] font-medium text-right text-main">{maxValue}</span>
                </div>
            </div>
        </div>
    );
}

export default PriceSlider;
