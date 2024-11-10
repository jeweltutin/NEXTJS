import React, { useState } from 'react';

function PriceRangeFilter({ onPriceChange }) {
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
        <div className="price-range-filter">
            <div className="flex gap-2">
                <input
                    type="number"
                    placeholder="Min Price"
                    value={minPrice}
                    onChange={handleMinPriceChange}
                    className="input-field"
                />
                <input
                    type="number"
                    placeholder="Max Price"
                    value={maxPrice}
                    onChange={handleMaxPriceChange}
                    className="input-field"
                />
                <button onClick={handleGoClick} className="go-button">Go</button>
            </div>
        </div>
    );
}

export default PriceRangeFilter;
