"use client";
import React, { useState, useEffect, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import ReactPaginate from "react-paginate";
import Link from "next/link";


export default function ReactPaginateWork({ recipeList, itemsPerPage }) {
    //const itemsPerPage = 8;
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(recipeList.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(recipeList.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % recipeList.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };



    return (
        <>
            <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
                <h2 className="text-4xl font-bold text-gray-800 mb-12">Recipes</h2>
                <div className="mb-8 text-gray-600 font-serif border-b-2 border-indigo-500 p-2 w-24" >
                    <Link href={"/"}>Go Home</Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentItems && currentItems.length > 0
                        ? currentItems.map((recipe, index) => (
                            <div key={recipe.id}>
                                <Link href={`/recipe-list/${recipe.id}`}>
                                    <Card>
                                        <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.05] transition-all">
                                            <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                                                {/* {index} */}
                                                <img src={recipe.image} alt={recipe.name} className="h-full w-full object-cover object-top" />
                                            </div>
                                            <div className="p-6">
                                                <h3 className="text-lg font-bold text-gray-900">
                                                    {recipe.name}
                                                </h3>
                                                <div className="mt-4 flex items-center flex-wrap gap-2">
                                                    <p className="text-lg text-gray-600">
                                                        Rating: {recipe.rating}
                                                    </p>
                                                    <div className="ml-auto">
                                                        <p className="text-lg text-gray-600 font-bold">
                                                            {recipe.cuisine}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </div>
                        ))
                        : null}
                </div>
            </div>

            <div className="mypg relative p-6">
                <ReactPaginate
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                />

            </div>
        </>
    );
}