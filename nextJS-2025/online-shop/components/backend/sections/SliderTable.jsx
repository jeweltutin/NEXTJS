"use client";
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { HiSearch } from 'react-icons/hi';

// Sample data
/* const sliderData = [
    { id: 1, title: "Winter Sale", image: "img1.jpg", createdAt: "2024-03-15" },
    { id: 2, title: "Summer Collection", image: "img2.jpg", createdAt: "2024-03-10" },
    { id: 3, title: "Spring Collection", image: "img3.jpg", createdAt: "2024-02-28" },
    { id: 4, title: "Exclusive Deals", image: "img4.jpg", createdAt: "2024-03-05" },
    { id: 5, title: "Mega Discount Week", image: "img5.jpg", createdAt: "2024-03-12" },
]; */

export default function SliderTable({ sliderData }) {
    const [isClient, setIsClient] = useState(false);
    const [search, setSearch] = useState("");
    const router = useRouter();

    // Ensure the code runs only on the client
    useEffect(() => {
        setIsClient(true);
    }, []);

    // Filter data based on search term
    const filteredData = sliderData.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.createdAt.includes(search)
    );

    if (!isClient) {
        return null; // Don't render anything until client-side
    }

    // Define the columns for the table
    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Image',
            cell: row => <img src={`http://localhost:5000${row.image}`} alt={row.name} className="w-12 h-12 object-cover" />,
            sortable: false,
        },
        {
            name: 'URL',
            selector: row => row.url,
            sortable: true,
        },
        {
            name: 'Priority',
            selector: row => row.priority,
            sortable: true,
        },
        {
            name: 'Created At',
            selector: row => row.createdAt,
            sortable: true,
        },
        {
            name: 'Actions',
            cell: row => (
                <div className="flex gap-2">
                    <button
                        onClick={() => alert(`Viewing ${row.name}`)}
                        className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        View
                    </button>
                    <button
                        onClick={() => alert(`Editing ${row.name}`)}
                        className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => alert(`Deleting ${row.name}`)}
                        className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                    >
                        Delete
                    </button>
                </div>
            ),
        },
    ];

    return (
        <div className="p-4">
            <div className="mb-4 flex items-center gap-2 justify-between">
                <div className="flex items-center gap-2">
                    <HiSearch className="text-xl" />
                    <input
                        type="text"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        placeholder="Search"
                        className="p-2 border rounded"
                    />
                </div>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={() => router.push("/dx-admin/slider/slide/add")}
                >
                    + Create New Slide
                </button>
            </div>

            <DataTable
                columns={columns}
                data={filteredData}
                pagination
                sortIcon={<span>↕</span>}
                paginationPerPage={10} // Items per page
                paginationRowsPerPageOptions={[10, 20, 30]} // Options for number of rows per page
                highlightOnHover
                striped // Adds alternating row colors for better readability
                responsive // Makes the table responsive for mobile devices
                noDataComponent="No records found" // Custom message when no data is available
                customStyles={{
                    headCells: {
                        style: {
                            fontWeight: "bold",
                            fontSize: "18px", // Adjust font size
                        },
                    },
                }}
            />
        </div>
    );
}