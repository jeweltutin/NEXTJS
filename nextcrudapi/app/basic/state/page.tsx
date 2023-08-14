'use client'
import { useState } from "react";


export default function State() {
    const [fruitName, setFruitName] = useState("Apple");
   /*  const fruit = () => {
        setFruitName("Banana");
    } */
    function fruit() {
        setFruitName("Banana");
    }
    return (
        <div className="container">
            <div className="mx-auto text-center pt-10">
                <h4>We like fruits : {fruitName}</h4>
                <h3 className="text-lg text-amber-700 p-8"><strong>Using State</strong></h3>
                <button onClick={fruit} className="btn btn-success">Click</button>
            </div>

        </div>
    )
}
