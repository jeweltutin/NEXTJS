"use client"
import MultiRangeSlider from "multi-range-slider-react";
import { useEffect, useState } from 'react';

function PriceSlider({ minValue, maxValue, onPriceChange }) {
    const [sliderMinValue, setMinValue] = useState(minValue);
    const [sliderMaxValue, setMaxValue] = useState(maxValue);

    useEffect(() => {
        setMinValue(minValue);
        setMaxValue(maxValue);
    }, [minValue, maxValue]); // Update slider values when props change

    const handleInput = (e) => {
        setMinValue(e.minValue);
        setMaxValue(e.maxValue);
        onPriceChange(e.minValue, e.maxValue); // Call this to notify parent of price change
    };

    return (
        <div>
            <div className="border-b-[1px] lg:border-[1px] border-solid border-[#E7E7E7] lg:rounded-[5px] px-4 lg:px-3.5 py-4 lg:py-4 bg-[#FCFCFC] mb-0 lg:mb-3.5">
                <div className="filter-title flex justify-between items-center pb-2">
                    <h4 className="text-sm font-medium leading-none uppercase">Price Range</h4>
                    <div className="filter-buttons flex items-center justify-end">
                        <button className="icon pl-2 w-4 icon-minus" type="button">-</button>
                    </div>
                </div>
                <div className="w-full flex justify-between">
                    <span className="text-[13px] font-normal text-left">Min: ৳15</span>
                    <span className="text-[13px] font-normal text-right">Max: ৳3290</span>
                </div>
                {/* <Slider defaultValue={[33]} max={100} step={1} className="pb-7" /> */}
                <MultiRangeSlider
                    min={minValue} // Set the min from props
                    max={maxValue} // Set the max from props
                    step={5}
                    ruler={false}
                    label={false}
                    minValue={sliderMinValue}
                    maxValue={sliderMaxValue}
                    /* onInput={(e) => {
                        handleInput(e);
                    }} */
                    onInput={handleInput}
                    style={{ border: "none", boxShadow: "none", padding: "15px 10px" }}
                    //barLeftColor="red"
                    barInnerColor="green"
                //barRightColor="green"
                //thumbLeftColor="lime"
                //thumbRightColor="lime"
                />


                <div className="w-full flex justify-between">
                    <span className="text-[14px] font-medium text-left text-main">{minValue}</span>
                    <span className="text-[14px] font-medium text-right text-main">{maxValue}</span>
                </div>
            </div>
        </div>
    )
}

export default PriceSlider
