'use client'
//import { useAppSelector } from '@/app/redux/store'
import { useDispatch, useSelector } from 'react-redux';
import { ordered, restocked } from '@/app/redux/state/features/cake/cakeSlice';

const CakeView = () => {
  const numOfCakes = useSelector((state:any)=>state.cake.numOfCakes)
  //const numOfCakes =useAppSelector(state=>state.cake.numOfCakes);

  const dispatch = useDispatch();
  
  return (
    <div className='text-black'>
      <h2>Number of cakes - {numOfCakes}</h2><br  />
      <button onClick={() => dispatch(ordered())} className="btn btn-success">Order cake</button><br  /><br  />
      <button onClick={() => dispatch(restocked(6))} className="btn btn-success">Restock cake</button>
    </div>
  )
}

export default CakeView
