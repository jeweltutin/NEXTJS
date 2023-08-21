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

    const [visible, setVisible] = useState(false);

    const handleToggle = () => {
        setVisible((current) => !current);
    };
    return (
        <div className="container">
            <div className="mx-auto text-center pt-10">
                <h4>We like fruits : {fruitName}</h4>
                <h3 className="text-lg text-amber-700 p-8"><strong>Using State</strong></h3>
                <button onClick={fruit} className="btn btn-success">Click</button>
            </div>
            
            <div className="mx-auto text-center pt-10">
                <h3 className="p-4"><strong>Toggle a Boolean State in React</strong></h3>
                {/* https://codingbeautydev.com/blog/react-toggle-boolean-state/ */}
                <button className="btn" onClick={handleToggle}>Show name</button>
                <div className="block m-4 bg-amber-600">
                    {visible && <p className="p-4">Coding Beauty</p>}
                </div>
            </div>

        </div>
    )
}
