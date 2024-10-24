import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function PopUpModal({ isOpen, setIsOpen, heading, popUpImage }) {
    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            {/*  <button onClick={toggleModal} className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="button">
                Toggle modal
            </button> */}

            {isOpen && (
                <div onClick={closeModal} id="popup-modal" className="fixed top-0 right-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
                    <div onClick={(e) => e.stopPropagation()} className="relative p-4 w-full max-w-md" >
                        <div className="relative bg-white rounded-lg shadow">
                            <button onClick={closeModal} type="button" className="absolute top-3 right-2.5 text-gray-400 hover:bg-gray-200 rounded-lg text-sm w-8 h-8 flex justify-center items-center">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                            <div className="p-4 text-center">
                                {/* <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg> */}

                                <div className="flex items-center justify-center py-5">
                                    <Image src={popUpImage} width={110} height={95} alt='Out of Stock' />
                                </div>
                                <h3 className="mb-5 text-lg font-normal text-gray-500">{heading ? heading : "Are you sure you want to delete this product?"}</h3>
                                <Link href={"/"}>
                                    <button type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5">
                                        Go to Cart
                                    </button>
                                </Link>
                                <button onClick={closeModal} type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700">
                                    Continue Shopping
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
