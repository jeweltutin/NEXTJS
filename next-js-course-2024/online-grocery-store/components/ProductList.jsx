import React from 'react'
import ProductItem from './ProductItem';

function ProductList({ productList }) {
    //console.log(productList);
    return (
        <div className="mt-10">
            <h2 className="text-green-600 font-bold text-2xl">
                Our Popular Products
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-6">
                {productList.map((product, index) => index < 10 && (
                    <ProductItem product={product} />
                ))}
            </div>
        </div>
    )
}

export default ProductList
