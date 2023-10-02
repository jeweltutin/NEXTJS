'use client';
import React, { useEffect } from 'react';
import { MdClose, MdDelete, MdDoneOutline, MdWarning } from 'react-icons/md';
import { setPopup } from '@/redux/slices/popupSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const Toast = () => {
    const toast = useSelector((state: RootState) => state.popupReducer.data);
    //console.log(toast)
    const dispatch = useDispatch();

    return (
        <div className='relative z-[10000] w-max'>
            {toast?.show ? (
                <div id='toast-success'
                    className={`fixed_center z-[10000] flex items-center justify-center  w-max  transition duration-700 ease-out dark:text-gray-400 dark:bg-gray-800
                              ${toast?.show ? 'opacity-100' : 'opacity-0  '} `} >
                    <div className=' flex items-center w-max justify-center bg-gray-900 p-4 mb-4  rounded-lg shadow'>
                        <div className='inline-flex items-center justify-center flex-shrink-0 w-8 h-8  rounded-lg dark:bg-green-800 dark:text-green-200  transition duration-700 ease-out'>
                            <div>
                                {toast?.type === 'success' && (
                                    <div className='bg-green-500 p-2 rounded-lg text-white'>
                                        <MdDoneOutline />
                                    </div>
                                )}
                                {toast?.type === 'warning' && (
                                    <div className='bg-brand_color p-2 rounded-lg text-white'>
                                        <MdWarning />
                                    </div>
                                )}
                                {toast?.type === 'failed' && (
                                    <div className='bg-red-900 p-2 rounded-lg text-white'>
                                        <MdClose />
                                    </div>
                                )}
                                {toast?.type === 'delete' && (
                                    <div className='bg-red-500 p-2 rounded-lg text-white'>
                                        <MdDelete />
                                    </div>
                                )}
                            </div>
                            <span className='sr-only'>Check icon</span>
                        </div>
                        <div className='ml-3 text-sm font-normal text-white'>
                            {toast?.message}.
                        </div>
                        <button
                            type='button'
                            className='ml-auto -mx-1.5 -my-1.5  text-gray-100 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700'
                            data-dismiss-target='#toast-success'
                            aria-label='Close'
                            onClick={() =>
                                dispatch(setPopup({ type: '', show: false, message: '' }))
                            } >
                            <span className='sr-only'>Close</span>
                            <svg aria-hidden='true' className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                                <path fillRule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' clipRule='evenodd'></path>
                            </svg>
                        </button>
                    </div>
                </div>
            ) : null}
        </div>
    );
};
export default Toast;
