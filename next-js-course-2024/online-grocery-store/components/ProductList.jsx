import ProductItem from './ProductItem';
import SelectProductFilter from './selectProductFilter';

function ProductList({ productList, categoryName, productCount }) {
    //console.log(productList);
    //console.log("Product Count :", productCount );
    const catName = categoryName.split('-').join(' ');

    return (
        <div className="mt-1 px-5 xl:px-0 ">
            <div className="flex justify-between bg-gray-100 p-2 items-center">
                <h2 className="text-black uppercase">
                    {productCount ? catName + " has " + productCount + " products" : "Our Popular Products"}
                </h2>
                <div>
                   <SelectProductFilter />
                </div>
            </div>


            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-6">
                {productList.map((product, index) => index < 10 && (
                    <ProductItem product={product} key={index} />
                ))}
            </div>
        </div>
    )
}

export default ProductList
