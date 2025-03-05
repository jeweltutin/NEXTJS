"use client";
import Link from 'next/link';
import { useState } from 'react';

const SearchProduct = ({ productList }) => {
    console.log("Search Page:", productList);
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
            <input type="text" value={query} onChange={handleChange} placeholder="Search for products..." className="outline-none" />

            {results.length > 0 && (
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0, position: 'absolute', top: '100%', left: 0, right: 0, backgroundColor: 'white', border: '1px solid #ddd', borderRadius: '4px', maxHeight: '200px', overflowY: 'auto', zIndex: 10, }}>
                    {results.map((item) => (
                        <li key={item.id} style={{ display: 'flex', alignItems: 'center', padding: '8px', borderBottom: '1px solid #eee', cursor: 'pointer' }}>
                            <Link href={"/product/"+item.slug} className="flex">
                                <img src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + item.images[0].url} alt={item.name} width={30} height={30} style={{ marginRight: '8px' }} />
                                <span>{item.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchProduct;
