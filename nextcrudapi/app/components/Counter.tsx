'use client'
import React, { useState } from 'react'

import { useAppSelector, useAppDispatch } from '@/app/redux/hooks'

import { counterSlice } from '@/app/redux/state/counter/counterSlice';

const Counter = () => {
  //const count = useAppSelector((state) => state.counter.value)
  //const dispatch = useAppDispatch()

  const [number, setNumber] = useState(0);

  function handleClick (change: boolean) {
    if (change) {
        setNumber(number+1);
    } else {
        setNumber(number-1);
    }
  }
    return (
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto text-center">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    My Counter App
                </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Counter App using Redux first time
            </p>
            <div className="text-center text-sky-600 font-bold">
                {/* <h3 className="text-2xl">00{count}</h3> */}
                <h3 className="text-2xl">{number}</h3>
            </div>
            <div className="max-w-4xl mx-auto">
                <div className="mt-20 px-4 flex justify-center space-x-6">
                    <button onClick= { () => setNumber (number+1) } className="bg-lime-500 text-white px-4 py-2 rounded-2xl shadow-lg shadow-lime-500/20">(+)</button>
                    <button onClick= { () => setNumber (number-1) } className="bg-indigo-500 text-white px-4 py-2 rounded-full shadow-md shadow-indigo-600/30">(-)</button>
                </div>
            </div>

            <div className="max-w-4xl mx-auto">
                <div className="mt-2 px-4 flex justify-center space-x-6">
                    <button onClick= { () => handleClick(true) } className="bg-lime-500 text-white px-4 py-2 rounded-2xl shadow-lg shadow-lime-500/20">PLUS</button>
                    <button onClick={ () => handleClick(false) } className="bg-indigo-500 text-white px-4 py-2 rounded-full shadow-md shadow-indigo-600/30">MINUS</button>
                </div>
            </div>
        </div>
    )
}

export default Counter
