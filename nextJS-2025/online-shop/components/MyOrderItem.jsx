import Image from "next/image";


function MyOrderItem({ orderItem }) {
  return (
    <div className="w-[90%] md:[70%] lg:w-[60%]">
      <div className="w-full p-4 overflow-x-auto">
        <div className="grid gap-3 grid-cols-2 md:grid-cols-5 mt-3 items-center">
          <Image src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + orderItem.product.images[0].url} width={80} height={80} alt="image" className="max-h-[80px] object-contain bg-gray-100 p-5 rounded-md border" />
          <div className="block">
            <h2 className="font-bold">{orderItem.product.name}</h2>
            <h2>Item Price: {orderItem.product.mrp}</h2>
          </div>
          <h3>{orderItem.color&& <span>Color: <br /><strong>{orderItem.color}</strong></span>}</h3>
          <h3>Qty: {orderItem.quantity}</h3>
          <h3><strong>Price</strong>: {orderItem.amount}</h3>
        </div>
      </div>
      <hr></hr>
    </div>
  )
}

export default MyOrderItem;  
