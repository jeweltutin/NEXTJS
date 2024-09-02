"use client"
import { useParams } from "next/navigation"


//export default function CartDetails({ params }) {
export default function CartDetails() {
  //console.log(params.id);
  const para = useParams();
  console.log(para.id);

  return (
    <div>
      Cart details {para.id}
    </div>
  )
}
