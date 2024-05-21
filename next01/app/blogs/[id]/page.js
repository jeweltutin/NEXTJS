"use client"
import { useParams, usePathname } from "next/navigation";


function blogPageDetails() {
    //let { id } = useParams();

    const pathname = usePathname();

    return ( 
        <div>
            <h2>Blog page details</h2>
            <h4>Blog id is: { pathname }</h4>
        </div>
     );
}

export default blogPageDetails;