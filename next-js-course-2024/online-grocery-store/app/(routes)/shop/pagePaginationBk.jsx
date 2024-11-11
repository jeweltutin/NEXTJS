"use client";
import { useState, useEffect } from 'react';
import GlobalApi from '@/actions/GlobalApi';
import ProductList from '@/components/ProductList';

function Shop() {
  const [productList, setProductList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true); // Loading state
  const itemsPerPage = 12; // Number of items per page

  // Fetch product data on component mount
  useEffect(() => {
    async function fetchProducts() {
      setLoading(true); // Start loading
      try {
        const products = await GlobalApi.getAllProducts();
        setProductList(products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
      setLoading(false); // Stop loading after fetching data
    }
    fetchProducts();
  }, []);

  // Get products for the current page
  const paginateProducts = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return productList.slice(startIndex, endIndex);
  };

  // Change page
  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate total pages
  const totalPages = Math.ceil(productList.length / itemsPerPage);

  return (
    <div className="container mx-auto bg-white shadow-xl min-w-0 dark:bg-slate-800 dark:highlight-white/5">
      <div className="flex justify-between bg-gray-100 p-2 items-center">
        <h2 className="text-black uppercase">All Products</h2>
      </div>
      <div className="px-8 py-2 pb-10">
        {loading ? (
          <p>Loading...</p> // Loading indicator
        ) : (
          <ProductList productList={paginateProducts()} />
        )}
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-center space-x-4 py-4">
        <button onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1} className="pagination-button p-2 rounded-md">
          Previous
        </button>
        {/* Page Numbers */}
        {Array.from({ length: totalPages }).map((_, index) => (
          <button key={index} onClick={() => changePage(index + 1)} className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}>
            {index + 1}
          </button>
        ))}
        <button onClick={() => changePage(currentPage + 1)} disabled={currentPage === totalPages} className="pagination-button p-2 rounded-md">
          Next
        </button>
      </div>
    </div>
  );
}

export default Shop;
