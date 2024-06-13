// "use client"
import { notFound, useParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";


async function BlogPageDetails({params}) {
    //console.log(blogItem);
    //let { id } = useParams();

    const { id } = params;
    /* if(id === '200'){
        notFound();
    } */
    if (Number.isNaN(parseInt(id))) notFound(); // if parameter is not a number not found page will show
    const data = await getData(id);
    //console.log(data);
    

    //const pathname = usePathname();

    // Not worked
    /* const router = useRouter();
    const {bid} = router.query; */  

    return ( 
        <div>
            <h2>Blog page details</h2>
            <h4>Blog id is: { id }</h4>
            <h3>
                {data.title}
            </h3>
            <p>
                {data.body}
            </p>
        </div>
     );
}

/*  export const getServerSideProps = async (context) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
    const blogItem = await res.json();

    return {
        props: {
            blogItem
        }
    }
}  */

async function getData(id) {
    //console.log("Id"+ id);
    
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' +id)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}


export default BlogPageDetails;