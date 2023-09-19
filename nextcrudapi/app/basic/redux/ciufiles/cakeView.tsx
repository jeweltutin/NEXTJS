'use client'
//import { useAppSelector } from '@/app/redux/store'
import { useDispatch, useSelector } from 'react-redux';
import { ordered, restocked } from '@/app/redux/state/features/cake/cakeSlice';
import { useState } from 'react';

const CakeView = () => {
  const [value, setValue] = useState(1);

  const numOfCakes = useSelector((state: any) => state.cake.numOfCakes)
  //const numOfCakes =useAppSelector(state=>state.cake.numOfCakes);

  const dispatch = useDispatch();

  return (
    <div className='text-black'>
      <h2>Number of cakes - {numOfCakes}</h2><br />
      <button onClick={() => dispatch(ordered())} className="btn btn-success">Order cake</button><br /><br />
      <button onClick={() => dispatch(restocked(6))} className="btn btn-success">Restock cake</button>
      <div className="pt-10 pb-5">
        <label>Restock Cake: </label>
        <input type='number' value={value} onChange={(e) => setValue(parseInt(e.target.value))} /><br /><br />
        <button onClick={() => dispatch(restocked(value)) } className="btn btn-success">Restock</button>
      </div>
    </div>
  )
}

export default CakeView
