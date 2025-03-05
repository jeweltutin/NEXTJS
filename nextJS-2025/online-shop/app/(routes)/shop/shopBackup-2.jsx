"use client";
import { useState, useEffect } from 'react';
import GlobalApi from '@/actions/GlobalApi';
import ProductList from '@/components/ProductList';
import SelectProductFilter from '@/components/selectProductFilter';

function Shop() {
  const [productList, setProductList] = useState([]);
  const [sortedProductList, setSortedProductList] = useState([]);
  const [sortOption, setSortOption] = useState('byNewest'); // Default sort option to 'byNewest'

  // Fetch product data and sort by default ('byNewest') on first load
  useEffect(() => {
    async function fetchProducts() {
      try {
        const products = await GlobalApi.getAllProducts();
        setProductList(products);
        sortProductsByNewest(products); // Apply default sorting
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
    fetchProducts();
  }, []); // Empty dependency array to run once when the component mounts

  // Function to handle sorting by selected option
  const handleSortChange = (selectedValue) => {
    setSortOption(selectedValue);
    let sortedProducts = [...productList]; // Create a copy of the product list
    switch (selectedValue) {
      case 'byNewest':
        sortedProducts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // Sort by newest
        break;
      case 'byPriceLH':
        sortedProducts.sort((a, b) => a.mrp - b.mrp); // Sort by price low to high
        break;
      case 'byPriceHL':
        sortedProducts.sort((a, b) => b.mrp - a.mrp); // Sort by price high to low
        break;
      case 'byNameAZ':
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name)); // Sort by name (A-Z)
        break;
      case 'byNameZA':
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name)); // Sort by name (Z-A)
        break;
      default:
        break;
    }
    setSortedProductList(sortedProducts);
  };

  // Apply sorting logic by 'Newest' on first load
  const sortProductsByNewest = (products) => {
    const sortedProducts = [...products].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    setSortedProductList(sortedProducts);
  };

  return (
    <div className="container mx-auto bg-white shadow-xl min-w-0 dark:bg-slate-800 dark:highlight-white/5">
      <div className="flex justify-between bg-gray-100 p-2 items-center">
        <h2 className="text-black uppercase">All Products</h2>
        <div>
          <SelectProductFilter onFilterChange={handleSortChange} selectedSortOption={sortOption} />
        </div>
      </div>
      <div className="px-8 py-2 pb-10">
        <ProductList productList={sortedProductList} />
      </div>
    </div>
  );
}

export default Shop;
