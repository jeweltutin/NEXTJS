'use client'
import { useAppSelector } from '@/app/redux/store'
import { useSelector } from 'react-redux'

const CakeView = () => {
  const numOfCakes = useSelector((state:any)=>state.cake.numOfCakes)
  //const count = useSelector((state: RootState) => state.counter.value)
  return (
    <div className='bg-white'>
      <h2>Number of cakes - {numOfCakes}</h2>
      <button>Order cake</button>
      <button>Restock cake</button>
    </div>
  )
}

export default CakeView
