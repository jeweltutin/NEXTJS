"use client";
import { usePathname, useSearchParams } from 'next/navigation';

export default function Cart() {

  const pathName = usePathname();
  console.warn(pathName);

  const searchParams = useSearchParams();
  console.log(searchParams.get('search'), searchParams.get('randomvalue'));

  return (
    <div>
      This is cart page.
    </div>
  )
}



//http://localhost:3000/cart?search=product01
//http://localhost:3000/cart?search=product01&randomvalue=123abc