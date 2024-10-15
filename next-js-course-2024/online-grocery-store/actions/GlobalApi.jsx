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

const addToCart = (data, token) => axiosClient.post('/user-carts', data, {
    headers: {
        Authorization: "Bearer " + token
    }
})

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
        name: item.products[0].name,
        quantity: item.quantity,
        amount: item.amount,
        image: item.products[0].images[0].url,
        actualPrice: item.products[0].mrp,
        id: item.documentId,
        product: item.products[0].id
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

const getMyOrder = (userId, token) => axiosClient.get("/orders?filters[userId][$eq]="+userId+"&sort[0]=createdAt:desc&populate[orderItemList][populate][product][populate][images]=*", {
    headers: {
        Authorization: "Bearer " + token
    }
}).then(resp => {
    const response = resp.data.data;
    const orderList = response.map(item => ({
        id: item.id,
        totalAmount: item.totalAmount,
        paymentId: item.paymentId,
        orderItemList: item.orderItemList,
        status: item.orderStatus,
        createdAt: item.createdAt
    }));

    return orderList;
})



export default {
    getCategories,
    getSliders,
    getCategoryList,
    getAllProducts,
    getProductsByCategory,
    registerUser,
    testfunc,
    signIn,
    addToCart,
    getCartItems,
    deleteCartItem,
    getCartItemsForOrder,
    createOrder,
    getMyOrder
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