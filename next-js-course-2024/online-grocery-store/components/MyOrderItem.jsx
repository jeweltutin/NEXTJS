import Image from "next/image";


function MyOrderItem({ orderItem }) {
  return (
    <div className="w-[40%]">
      <div className="grid grid-cols-5 mt-3 items-center">
        <Image src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + orderItem.product.images[0].url} width={80} height={80} alt="image" className="max-h-[80px] object-contain bg-gray-100 p-5 rounded-md border" />
        <div className="col-span-2">
          <h2 className="font-bold">{orderItem.product.name}</h2>
          <h2>Item Price: {orderItem.product.mrp}</h2>
        </div>
        <h3>Qty: {orderItem.quantity}</h3>
        <h3><strong>Price</strong>: {orderItem.amount}</h3>
        <hr className="mt-3"></hr>
      </div>
      <hr></hr>
    </div>
  )
}

export default MyOrderItem;  
