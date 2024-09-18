import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Cart from "../components/cart";

async function CartPage() {
  const getSession = await auth();
  if (!getSession?.user) redirect("/unauth-page");

  return <Cart />;
}

export default CartPage;