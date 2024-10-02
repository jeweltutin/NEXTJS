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

const getProductsByCategory = (category) => axiosClient.get('/products?filters[categories][slug][$in]='+category+'&populate=*').then(resp => {
    //console.log("cat:", category);
    //console.log("Products:", resp.data.data);
    return resp.data.data;
})

const testfunc = (username, email, phone) => {
    console.log(phone);
}

const registerUser = (username, email, password) => axiosClient.post('/auth/local/register',{
    username: username,
    email: email,
    //phone: phome,
    password: password
});

const signIn = (email, password) => axiosClient.post('/auth/local', {
    identifier: email,
    password: password
})


export default {
    getCategories,
    getSliders,
    getCategoryList,
    getAllProducts,
    getProductsByCategory,
    registerUser,
    testfunc,
    signIn 
}





// products filter api by category: 
// http://localhost:1337/api/products?filters[categories][name][$in]=Fruits

// Select fields name , mrp and description
//http://localhost:1337/api/products?fields=name,mrp,description

// Select where product id = 6
//http://localhost:1337/api/products?filters[id][$eq]=6

// Select fields name , mrp and description Select where product id = 6
//http://localhost:1337/api/products?fields=name,mrp,description&filters[id][$eq]=6