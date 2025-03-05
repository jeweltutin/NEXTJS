"use client";
import { useState, useEffect } from 'react';
import GlobalApi from '@/actions/GlobalApi';
import ProductList from '@/components/ProductList';
import SelectProductFilter from '@/components/selectProductFilter';
import Loading from '@/components/Loading';

function Shop() {
  const [productList, setProductList] = useState([]);
  const [sortedProductList, setSortedProductList] = useState([]);
  const [sortOption, setSortOption] = useState('byNewest'); // Default sort option
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const [itemsPerPage, setItemsPerPage] = useState(12); // Number of items per page
  //const [loading, setLoading] = useState(false);

  // Fetch product data and sort by default ('byNewest') on first load
  useEffect(() => {
    async function fetchProducts() {
      //setLoading(true);
      try {
        const products = await GlobalApi.getAllProducts();
        setProductList(products);
        sortProductsByNewest(products); // Apply default sorting
      } catch (error) {
        console.error('Error fetching products:', error);
      }
      //setLoading(false);
    }
    fetchProducts();
  }, []); // Empty dependency array to run once when the component mounts

  // Apply sorting logic by 'Newest' on first load
  const sortProductsByNewest = (products) => {
    const sortedProducts = [...products].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    setSortedProductList(sortedProducts);
  };

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

  // Get products for the current page
  const paginateProducts = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return sortedProductList.slice(startIndex, endIndex);
  };

  // Change page
  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate total pages
  const totalPages = Math.ceil(sortedProductList.length / itemsPerPage);

  return (
    <div className="container mx-auto bg-white shadow-xl min-w-0 dark:bg-slate-800 dark:highlight-white/5">
      <div className="flex justify-between bg-gray-100 p-2 items-center">
        <h2 className="text-black uppercase">All Products</h2>
        <div>
          <SelectProductFilter onFilterChange={handleSortChange} selectedSortOption={sortOption} />
        </div>
      </div>
      <div className="px-8 py-2 pb-10">
       {/*  {loading ? (
          <Loading /> // Loading indicator
        ) : (
          <ProductList productList={paginateProducts()} />
        )} */}
        <ProductList productList={paginateProducts()} />
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-center space-x-4 py-4">
        <button onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
          // className="bg-gray-300 p-2 rounded-md "
          className="pagination-button p-2 rounded-md"
        >
          Previous
        </button>
        {/* Page Numbers */}
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => changePage(index + 1)}
            // className={`px-4 py-2 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="pagination-button p-2 rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Shop;
