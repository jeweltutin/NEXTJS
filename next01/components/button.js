"use client"

import { useState } from "react"

export default function AboutBtn01() {
    const [color, changeColor] = useState("green");
    const [number, setNumber] = useState(0);

    function handleClick(change){
        if (change) {
            setNumber(number+1);
        }else{
            setNumber(number-1);
        }
    }

    return (       
        <div>
            {/* <button onClick={() => console.log("Button Clicked!")} className="btn btn-primary btn-sm">Click</button> */}
            <button onClick={() => alert("Hello! welcome..")} className="btn btn-primary btn-sm">Click</button>
            <hr />

            <button onClick={() => changeColor("red")} className="btn btn-danger btn-sm mx-2">Change to Red</button>
            <button onClick={() => changeColor("blue")} className="btn btn-success btn-sm">Change to Green</button>
            <div style={{ backgroundColor: "lightblue", padding: 20, margin: 15 }}>
            {/* <div style={{ backgroundColor: `${color}`, padding: 20, margin: 15 }}> */}
                <h4 style={{ color }}>Hello world</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis totam rerum cupiditate sunt ipsa vel voluptas soluta amet omnis vero debitis,
                    accusantium atque harum quidem recusandae quasi beatae et nisi.
                </p>
            </div>

            <hr />

            <button onClick={() => setNumber(number+1)} className="btn btn-sm mx-2 btn-primary">Inc (+)</button>
            <button onClick={() => setNumber(number-1)} className="btn btn-sm mx-2 btn-primary">Dec (-)</button>
            The number is : {number}

            <hr />
            <h6>Example with function</h6>
            <button onClick={() => handleClick(true)} className="btn btn-sm mx-2 btn-primary">Inc (+)</button>
            <button onClick={() => handleClick(false)} className="btn btn-sm mx-2 btn-primary">Dec (-)</button>
            The number is : {number}
        </div>
    )
}
