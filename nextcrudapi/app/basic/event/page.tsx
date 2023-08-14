'use client'
import React from 'react'


const Event = () => {
    /*const fruits = () => {
        alert("Apple, Banana, Orange ...");
    }*/
    /* function fruits(){
        alert("Apple, Banana, Orange ...");
    } */

    function fruits(item: any){
        alert(item);
    }
    return (
        <div className="container">
            <div className="mx-auto text-center pt-10">
                <h3 className="text-lg text-amber-700 p-8"><strong>Button Event</strong></h3>
                <button onClick={()=>alert("Hello! Nextjs")} className="btn btn-success">Click</button>
                <button onClick={fruits} className="btn btn-success">Click</button>
                <button onClick={()=>fruits("Apple is Good")} className="btn btn-success">Apple</button>
            </div>

        </div>
    )
}

export default Event
