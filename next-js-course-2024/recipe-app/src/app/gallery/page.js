import React from 'react'
import ClientPagination from "@/components/client-pagination";
import ReactPagination from '@/components/react-paginate';
import GalleryFaker from '@/components/gallery-faker';

export default function Gallery() {
  return (
    <div className="flex flex-col items-center justify-center w-full p-4">
      <span className="text-4xl font-bold">Gallery with Pagination</span>
      {/* <ClientPagination /> */}
      {/* <ReactPagination /> */}
      <GalleryFaker />  
    </div>
  )
}
