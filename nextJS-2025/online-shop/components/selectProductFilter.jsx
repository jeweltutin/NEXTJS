"use client";
import React, { useState, useEffect } from 'react';

function SelectProductFilter({ onFilterChange, selectedSortOption }) {
    // Set initial value to the passed selectedSortOption prop
    const [value, setValue] = useState(selectedSortOption);

    // Ensure the value updates when selectedSortOption changes
    useEffect(() => {
        setValue(selectedSortOption);
    }, []);

    function handleChange(e) {
        const selectedValue = e.target.value;
        setValue(selectedValue);
        onFilterChange(selectedValue); // Notify parent of the change
    }

    return (
        <div className="max-w-sm mx-auto">
            <select
                value={value} // Controlled component, value set to state
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                <option value="DEFAULT" disabled>Choose ...</option>
                <option value="byNewest">Newest</option>
                <option value="byPriceLH">Price low to high</option>
                <option value="byPriceHL">Price high to low</option>
                <option value="byNameAZ">Name (A-Z)</option>
                <option value="byNameZA">Name (Z-A)</option>
            </select>
        </div>
    );
}

export default SelectProductFilter;
