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

export default {
    getCategories,
    getSliders,
    getCategoryList,
    getAllProducts
}