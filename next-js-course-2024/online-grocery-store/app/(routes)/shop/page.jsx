import GlobalApi from '@/actions/GlobalApi';
import SearchProduct from '@/components/SearchProduct';
import React from 'react';

async function Shop() {
    const productList = await GlobalApi.getAllProducts();
  return (
    <div>
      <SearchProduct productList={productList} />
    </div>
  )
}

export default Shop;
