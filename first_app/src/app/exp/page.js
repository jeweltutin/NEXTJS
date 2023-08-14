"use client"
import styles from "@/app/styles/common.module.css";
import { useRouter } from "next/navigation";


const Exp = () => {
const router = useRouter();
    const handleClick = () => {
        console.log("Order placing ...");
        //router.push("/movies");
        router.replace("/movies");
    }

  return (
    <div className={ styles.container }>
      <h3>Cake</h3>
      <h5>100tk</h5>
      <p>Nice cake</p>
      <button onClick={handleClick}>Place Order</button>
    </div>
  )
}

export default Exp
