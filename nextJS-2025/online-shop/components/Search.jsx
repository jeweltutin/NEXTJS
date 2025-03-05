import React, { useState, useEffect } from 'react';
import GlobalApi from '@/actions/GlobalApi';
import SearchProduct from './SearchProduct';

function SearchComponent() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await GlobalApi.getAllProducts();
      setProductList(products);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <SearchProduct productList={productList} />
    </div>
  );
}

export default SearchComponent;
