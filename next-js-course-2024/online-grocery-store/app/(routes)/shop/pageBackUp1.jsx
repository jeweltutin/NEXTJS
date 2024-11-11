import GlobalApi from '@/actions/GlobalApi';
import ProductList from '@/components/ProductList';
import SelectProductFilter from '@/components/selectProductFilter';


async function Shop() {
  const productList = await GlobalApi.getAllProducts();
  return (
    <div class="container mx-auto bg-white shadow-xl min-w-0 dark:bg-slate-800 dark:highlight-white/5">
      <div className="flex justify-between bg-gray-100 p-2 items-center">
        <h2 className="text-black uppercase">
          All Products
        </h2>
        <div>
          <SelectProductFilter />
        </div>
      </div>
      <div class="px-8 py-2 pb-10">
        <ProductList productList={productList} />
      </div>
    </div>
  )
}

export default Shop;
