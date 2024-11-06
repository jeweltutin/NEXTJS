"use client";
import React, { useState } from 'react';

function SelectProductFilter() {
    const [value, setValue] = useState("a");

    function logValue() {
        console.log(value);
    }

    return (
        <div className="max-w-sm mx-auto">
            <select value={value} onChange={(e) => { setValue(e.target.value); }} id="product-filter" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="DEFAULT" disabled>Choose ...</option>
                <option value="a" >Newest</option>
                <option value="b">Price low to high</option>
                <option value="c">Price high to low</option>
                <option value="d">Name(A-Z)</option>
                <option value="e">Name(Z-A)</option>
            </select>

            {/* <div class="max-w-sm mx-auto">
                <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                </select>
            </div> */}

            {/* <button onClick={logValue}>submit</button>
            Selected Item {value} */}
        </div>
    )
}

export default SelectProductFilter
