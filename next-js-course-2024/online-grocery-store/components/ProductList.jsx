import ProductItem from './ProductItem';
import SelectProductFilter from './selectProductFilter';

function ProductList({ productList }) {
    //console.log(productList);
    //console.log("Product Count :", productCount );

    return (
        <div className="mt-1 px-5 xl:p-10 ">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-6">
                {/* {productList.map((product, index) => index < 10 && ( */}
                {productList.map((product, index) => ( 
                    <ProductItem product={product} key={index} />
                ))}
            </div>
        </div>
    )
}

export default ProductList
