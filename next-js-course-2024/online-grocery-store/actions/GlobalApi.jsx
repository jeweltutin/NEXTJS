const { default: axios } = require("axios");


const axiosClient = axios.create({
    //baseURL: 'http://localhost:1337/api'
    baseURL: 'http://127.0.0.1:1337/api'
})

const getCategories = () => axiosClient.get('/categories?populate=*');

const getSliders = () => axiosClient.get('/sliders?populate=*').then(resp => {
    return resp.data.data;
})

//category list for server side
async function getCategoryList() {
    const catlist = await axiosClient.get("/categories?populate=*");
    const resp = catlist.data.data;
    return resp;
}

const getAllProducts = () => {
    return (
        axiosClient.get('/products?populate=*').then(resp => {
            return resp.data.data;
        })
    )
}

const getProductsByCategory = (category) => axiosClient.get('/products?filters[categories][slug][$in]=' + category + '&populate=*').then(resp => {
    //console.log("cat:", category);
    //console.log("Products:", resp.data.data);
    return resp.data.data;
})

const getSingleProduct = (productSlug) => axiosClient.get("/products?filters[slug][$eq]=" + productSlug + "&populate=*").then(resp => {
    return resp.data.data;
})

const testfunc = (username, email, phone) => {
    console.log(phone);
}

const registerUser = (username, email, password) => axiosClient.post('/auth/local/register', {
    username: username,
    email: email,
    //phone: phome,
    password: password
});

const signIn = (email, password) => axiosClient.post('/auth/local', {
    identifier: email,
    password: password
})

// Worked Add To Cart function
/* const addToCart = (userId, data, token) => axiosClient.post('/user-carts', data, {
    headers: {
        Authorization: "Bearer " + token
    }
}) */

    async function addToCart(userId, pId, productPrice, data, token) {
        try {
            const theItem = await axiosClient.get(`/user-carts?filters[userId][$eq]=${userId}&filters[productId][$eq]=${pId}`);
    
            if (theItem.data.data.length === 0) {
                console.log("Not Exists");
                await axiosClient.post('/user-carts', data, {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                });
            } else {
                console.log("Exists");
                const checkItem = theItem.data.data;
                const cartId = checkItem[0]?.documentId;
    
                if (cartId) {
                    const existingQuantity = Number(checkItem[0].quantity);
                    const newQuantity = Number(data.data.quantity);
                    const totalQuantity = existingQuantity + newQuantity;
    
                    const productCurrentPrice = productPrice; // Ensure this is a number
                    console.log("Product Current Price:", productCurrentPrice);
    
                    const totalAmount = productCurrentPrice * totalQuantity;
                    console.log("Calculating Total Amount: ", productCurrentPrice, "*", totalQuantity, "=", totalAmount);
    
                    console.log("Existing Quantity:", existingQuantity);
                    console.log("New Quantity to Add:", newQuantity);
                    console.log("Total Quantity:", totalQuantity);
                    console.log("Total Amount:", totalAmount);
    
                    // Update the cart with the new quantity and amount
                    await axiosClient.put(`/user-carts/${cartId}`, { data: { amount: totalAmount, quantity: totalQuantity } }, {
                        headers: {
                            Authorization: "Bearer " + token
                        }
                    });
                } else {
                    console.log("Cart ID not found");
                }
            }
        } catch (error) {
            console.error("Error adding to cart:", error);
        }
    }
    

/* async function addToCart(userId, productId, data, token) {
    // Fetch the user's cart and populate the products
    const getCartItems = await axiosClient.get(`/user-carts?filters[userId][$eq]=${userId}&populate=products`);

    // Assuming getCartItems.data.data is an array of carts
    const cartItems = getCartItems.data.data;
    //console.log(cartItems);

    // Flag to check if the product exists
    let productExists = false;

    // Iterate over all carts
    cartItems.forEach(cart => {
        const productsInCart = cart.products;
        //console.log(productsInCart);
        console.log(cart.id);

        // Check if the productId exists in the current cart's products
        if (productsInCart.some(product => product.documentId === productId)) {
            productExists = true;
            //const cartId = 
        }
    });

    if (productExists) {
        console.log(`Product with ID ${productId} already exists in the cart.`);
        // You can return or handle this case as needed
        return;
    } else {
        console.log(`Product with ID ${productId} does not exist in any cart. Adding to cart.`);
        // Here, you would add the product to the cart (implement that logic)
        axiosClient.post('/user-carts', data, {
            headers: {
                Authorization: "Bearer " + token
            }
        })
    }

    if (cartItems.length === 0) {
        console.log("No cart found for the user. Creating a new cart.");
        // Here, you would create a new cart and add the product
    }
}
 */


/* async function addToCart(userId, productId, data, token) {
    // Fetch the user's cart and populate the products
    const getCartItems = await axiosClient.get(`/user-carts?filters[userId][$eq]=${userId}&populate=products`);

    // Assuming getCartItems.data.data is an array of carts
    const cartItems = getCartItems.data.data;

    // Flag to check if the product exists
    let productExists = false;

    // Iterate over all carts
    for (const cart of cartItems) {
        const productsInCart = cart.products;

        // Check if the productId exists in the current cart's products
        const product = productsInCart.find(product => product.documentId === productId);
        if (product) {
            productExists = true;
            // Update the quantity of the product
            product.quantity += data.quantity; // Assuming `data.quantity` is the amount to add
            console.log(`Updated quantity of product ID ${productId} to ${product.quantity}.`);

            // Call the API to update the cart
            await axiosClient.put(`/user-carts/${cart.id}`, { products: productsInCart }, {
                headers: {
                    Authorization: "Bearer " + token
                }
            });
            return;
        }
    }

    if (!productExists) {
        console.log(`Product with ID ${productId} does not exist in any cart. Adding to cart.`);
        
        // If no cart found, create a new one
        if (cartItems.length === 0) {
            console.log("No cart found for the user. Creating a new cart.");
            await axiosClient.post('/user-carts', data, {
                headers: {
                    Authorization: "Bearer " + token
                }
            })
        } else {
            // Add the product to the existing cart
            const cartId = cartItems[0].id; // You might want to adjust which cart to add to
            await axiosClient.put(`/user-carts/${cartId}`, { products: [...cartItems[0].products, { documentId: productId, quantity: data.quantity }] }, {
                headers: {
                    Authorization: "Bearer " + token
                }
            });
        }
    }
} */


/* const getCartItems = (userId, token) => axiosClient.get('/user-carts?filters[userId][$eq]='+userId+'&populate=*',{
    headers: {
        Authorization: "Bearer "+token
    }
}).then(resp => {
    return resp.data.data;
}) */

const getCartItems = (userId, token) => axiosClient.get('/user-carts?filters[userId][$eq]=' + userId + '&[populate][products][populate][images]=*', {
    headers: {
        Authorization: "Bearer " + token
    }
}).then(resp => {
    const data = resp.data.data;
    const cartItemsList = data.map((item, index) => ({
        name: item?.products[0]?.name,
        quantity: item.quantity,
        amount: item.amount,
        image: item?.products[0]?.images[0]?.url,
        actualPrice: item?.products[0]?.mrp,
        id: item.documentId,
        product: item?.products[0]?.id
    }))
    return cartItemsList;
})

const getCartItemsForOrder = (userId, token) => axiosClient.get('/user-carts?filters[userId][$eq]=' + userId + '&[populate][products]=*', {
    headers: {
        Authorization: "Bearer " + token
    }
}).then(resp => {
    const data = resp.data.data;
    const cartItemsList = data.map((item, index) => ({
        quantity: item.quantity,
        amount: item.amount,
        product: item.products[0].id,
        id: item.documentId
    }))
    return cartItemsList;
})

const deleteCartItem = (id, token) => axiosClient.delete('/user-carts/' + id, {
    headers: {
        Authorization: "Bearer " + token
    }
}).then(resp => {
    console.log(resp.data.data)
}).catch(error => console.error(error));


const createOrder = (alldata, token) => axiosClient.post('/orders', alldata, {
    headers: {
        Authorization: "Bearer " + token
    }
}).then(resp => {
    //console.log(resp.data.data)
}).catch(error => console.error(error));

const getMyOrder = (userId, token) => axiosClient.get("/orders?filters[userId][$eq]=" + userId + "&sort[0]=createdAt:desc&populate[orderItemList][populate][product][populate][images]=*", {
    headers: {
        Authorization: "Bearer " + token
    }
}).then(resp => {
    const response = resp.data.data;
    const orderList = response.map(item => ({
        id: item.documentId,
        totalAmount: item.totalAmount,
        paymentId: item.paymentId,
        orderItemList: item.orderItemList,
        status: item.orderStatus,
        createdAt: item.createdAt
    }));

    return orderList;
})

//const getSingleOrder = (orderId, token) => axiosClient.get("/orders?filters[documentId][$eq]=" + orderId, {
const getSingleOrder = (orderId, token) => axiosClient.get("/orders?filters[documentId][$eq]=" + orderId + "&populate[orderItemList][populate][product][populate][images]=*", {
    headers: {
        Authorization: "Bearer " + token
    }
}).then(resp => {
    const response = resp.data.data;

    return response;
})



export default {
    getCategories,
    getSliders,
    getCategoryList,
    getAllProducts,
    getSingleProduct,
    getProductsByCategory,
    registerUser,
    testfunc,
    signIn,
    addToCart,
    getCartItems,
    deleteCartItem,
    getCartItemsForOrder,
    createOrder,
    getMyOrder,
    getSingleOrder
}





// products filter api by category:
// http://localhost:1337/api/products?filters[categories][name][$in]=Fruits

// Select fields name , mrp and description
//http://localhost:1337/api/products?fields=name,mrp,description

// Select where product id = 6
//http://localhost:1337/api/products?filters[id][$eq]=6

// Select fields name , mrp and description Select where product id = 6
//http://localhost:1337/api/products?fields=name,mrp,description&filters[id][$eq]=6

// get products from cart for the selected user
//http://localhost:1337/api/user-carts?filters[userId][$eq]=9&populate=*

// Select cart with products and images
//http://localhost:1337/api/user-carts?[populate][products][populate][images]=*

// get a product equalsto product-slug with image
//http://localhost:1337/api/products?filters[slug][$eq]=red-carrot&[populate][images]=*


// get a product equalsto product-slug with image and categories
//http://localhost:1337/api/products?filters[slug][$eq]=red-carrot&populate=*

//const getCartItems = await axiosClient.get("/user-carts?filters[userId][$eq]="+userId+"&fields[0]=quantity&fields[1]=amount&populate[products][fields][0]=name&populate[products][fields][1]=mrp");
//const getCartItems = await axiosClient.get("/user-carts?filters[userId][$eq]="+userId+"&populate[products][fields][0]=id");
//const getCartItems = await axiosClient.get("/user-carts?filters[userId][$eq]="+userId+"&populate[products][filters][id][$eq]=45");