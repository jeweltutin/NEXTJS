

/* async function fetchListOfProducts(){
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return data?.products; 
} */

import { fetchListOfProducts } from "@/actions";

async function ServerActionsExample() {
    /*  async function fetchListOfProducts(){
         "use server";
         const res = await fetch("https://dummyjson.com/products");
         const data = await res.json();
         return data?.products; 
     } */
    const products = await fetchListOfProducts();
    //console.log(products);
    return (
        <div>
            <h1>Server actions example - server components</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products && products.length > 0 ?
                            (products.map((product) =>
                                <tr>
                                    <td>{product.title}</td>
                                    <td>{product.price}</td>
                                </tr>
                            )) : (<h2>No products found</h2>)
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ServerActionsExample; 