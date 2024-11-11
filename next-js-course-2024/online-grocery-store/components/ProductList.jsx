import Loading from './Loading';
import ProductItem from './ProductItem';
import SelectProductFilter from './selectProductFilter';

function ProductList({ productList }) {
    if (!productList || productList.length === 0) {
        return (
            <div className="text-center mt-10">
                {/* <p>No products found based on your filters.</p> */}
                <Loading />
            </div>
        );
    }

    return (
        <div className="mt-1 px-5 xl:px-1 ">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 mt-6">
                {productList.map((product, index) => (
                    <ProductItem product={product} key={index} />
                ))}
            </div>
        </div>
    );
}

export default ProductList;
