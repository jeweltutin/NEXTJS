"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();
  console.log(router);

  function handleNavigate(){
    router.push('products');
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Welcome to Next JS Basic 2024</h1>
      <Link href={'products'} >Products</Link>
      <Link href={'/account'} >Account</Link>

      <h2 className="font-bold mt-3 text-lg">Alternative way of navigating using useRoute</h2>
      <p>
        Navigate to product page using use router
      </p>
      <button onClick={handleNavigate}>Go to products</button>
    </main>
  );
}
