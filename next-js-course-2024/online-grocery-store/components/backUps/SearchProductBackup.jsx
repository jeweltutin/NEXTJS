"use client";
import { useState } from 'react';

const products = [
  { id: 1, name: 'boAt Rockerz 450', image: '/images/rockerz450.png' },
  { id: 2, name: 'boAt Rockerz 551 ANC', image: '/images/rockerz551anc.png' },
  { id: 3, name: 'boAt Stone 135', image: '/images/stone135.png' },
  { id: 4, name: 'boAt Rockerz 550', image: '/images/rockerz550.png' },
  { id: 5, name: 'boAt Airdopes 131 Pro', image: '/images/airdopes131pro.png' },
  { id: 6, name: 'boAt Airdopes 141', image: '/images/airdopes141.png' },
  { id: 7, name: 'boAt Enigma X400', image: '/images/enigmax400.png' },
  { id: 8, name: 'boAt Storm Pro Call', image: '/images/stormprocall.png' },
  { id: 9, name: 'boAt Rockerz 255 Pro+', image: '/images/rockerz255pro.png' },
  { id: 10, name: 'boAt Bassheads 103', image: '/images/bassheads103.png' },
  { id: 11, name: 'jewel', image: '/images/bassheads103.png' },
];

const SearchProduct = ({productList}) => {
  console.log("Search Page:",productList);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Filter products based on the search query
    const filteredResults = productList.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );

    setResults(filteredResults);
  };
  
  return (
    <div style={{ position: 'relative', width: '300px' }}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for products..."
        style={{
          width: '100%',
          padding: '8px',
          boxSizing: 'border-box',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      />
      {results.length > 0 && (
        <ul style={{
          listStyleType: 'none',
          padding: 0,
          margin: 0,
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: 'white',
          border: '1px solid #ddd',
          borderRadius: '4px',
          maxHeight: '200px',
          overflowY: 'auto',
          zIndex: 10,
        }}>
          {results.map((item) => (
            <li
              key={item.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '8px',
                borderBottom: '1px solid #eee',
                cursor: 'pointer',
              }}
            >
              <img src={item.image} alt={item.name} width={30} height={30} style={{ marginRight: '8px' }} />
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchProduct;
