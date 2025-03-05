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

async function getAboutUsData() {
    const aboutData = await axiosClient.get("/about-page?populate[banner]=true");
    const resp = aboutData.data.data;
    return resp;
}

const getAllProducts = () => {
    return (
        axiosClient.get('/products?populate=*').then(resp => {
            return resp.data.data;
        })
    )
}

const fetchTop12Products = async () => {
    try {
        const response = await axiosClient.get('/products', {
            params: {
                populate: {
                    images: true, // Populate images field
                    categories: true
                },
                sort: ['id:desc'], // Sort by ID in descending order (or use 'createdAt' or another field)
                pagination: {
                    page: 1,
                    pageSize: 12, // Fetch 12 products only
                },
            },
        });

        return response.data.data; // Return raw products data
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
};

async function fetch12ProductsInACategory (){
    try {
        const response = await axiosClient.get('/products', {
            params: {
                populate: {
                    images: true,  // Populate images field
                    categories: true  // Populate categories field
                },
                sort: ['id:desc'],  // Sort by ID in descending order
                pagination: {
                    page: 1,
                    pageSize: 12,  // Fetch 12 products only
                },
                filters: {
                    categories: {
                        slug: 'smart-watch',  // Filter products by category slug "watch"
                    }
                }
            },
        });
    
        return response.data.data;  // Return raw products data
    } catch (error) {
        console.error("Error fetching products: ", error);
        throw error;
    }
    
}

const fetchRandom12Products = async () => {
    try {
        const response = await axiosClient.get('/products?populate[categories]=true&populate[images]=true');
        const allProducts = response.data.data;
        const randomProducts = allProducts.sort(() => 0.5 - Math.random()).slice(0, 12);
        return randomProducts;
    } catch (error) {
        console.error('Error fetching random products:', error);
        return [];
    }
};

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Random index
        [array[i], array[j]] = [array[j], array[i]]; // Swap
    }
    return array;
}

async function getRelatedProducts(categorySlug) {
    try {
        // const response = await axiosClient.get("products?filters[categories][slug][$eq]="+categorySlug+"&populate[images]=true");
        // const rltdProducts = response.data.data; 
        // const relatedProducts = rltdProducts.sort(() => 0.5 - Math.random()).slice(0, 4);

        const response = await axiosClient.get(`products?filters[categories][slug][$eq]=${categorySlug}&pagination[page]=1&pagination[pageSize]=10&populate[images]=true`);
        const rltdProducts = response.data.data;
        const shuffledProducts = shuffleArray(rltdProducts).slice(0, 4);
        return shuffledProducts;
    } catch (error) {
        console.error('Error fetching random products:', error);
        return [];
    }    
}

async function singleCategory(categorySlug) {
    const theCategory = await axiosClient.get("/categories?filters[slug][$eq]=" + categorySlug + "&populate=banner");
    const respcat = theCategory.data.data;
    return respcat;
}

const getProductsByCategory = (category) => axiosClient.get('/products?filters[categories][slug][$in]=' + category + '&populate=*').then(resp => {
    return resp.data.data;
})

/*  const getProductsByCategory = (category, minPrice, maxPrice) => {
    // Base URL for fetching products by category
    let url = `/products?filters[categories][slug][$in]=${category}&populate=*`;

    // Append price filters if minPrice and maxPrice are provided
    if (minPrice !== undefined && maxPrice !== undefined) {
        url += `&filters[mrp][$gte]=${minPrice}&filters[mrp][$lte]=${maxPrice}`;
    }

    return axiosClient.get(url).then(resp => {
        return resp.data.data;
    });
}; */

const getProductsByCategoryWithFilters = async (categoryName, selectedBrands = [], minPrice = 0, maxPrice = 10000) => {
    let filters = `filters[categories][slug][$eq]=${categoryName}`;
    console.log(selectedBrands);
    // Add brand filters if any brands are selected
    if (selectedBrands.length > 0) {
        const brandFilters = selectedBrands
            .map(brand => `filters[brand][name][$eq]=${encodeURIComponent(brand)}`)
            .join("&");
        filters += `&${brandFilters}`;
    }


    // Add price range filter
    // Add price filters only if minPrice or maxPrice are greater than 0
    if (minPrice > 0 || maxPrice > 0) {
        if (minPrice > 0) {
            filters += `&filters[mrp][$gte]=${minPrice}`; // Greater than or equal to minPrice
        }
        if (maxPrice > 0) {
            filters += `&filters[mrp][$lte]=${maxPrice}`; // Less than or equal to maxPrice
        }
    }
    //console.log(filters);

    // Make the API request with the constructed filters
    try {
        const response = await axiosClient.get(`/products?${filters}&populate[images]=true`);
        return response.data.data; // Return the filtered products data
    } catch (error) {
        console.error("Error fetching products by category and filters:", error);
        return []; // Return an empty array in case of error
    }
}


/* const getProductsByCategoryWithPriceRange = async (categoryName, minPrice, maxPrice) => {
    let filters = `filters[categories][slug][$eq]=${categoryName}`;
    if (minPrice !== undefined && maxPrice !== undefined) {
        filters += `&filters[mrp][$gte]=${minPrice}&filters[mrp][$lte]=${maxPrice}`;
    }
    try {
        const response = await axiosClient.get(`/products?${filters}&populate[images]=true`);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching products by category:", error);
        return [];
    }
}; */

/* const getProductsByCategoryWithBrands = async (categoryName, selectedBrands = []) => {
    let filters = `filters[categories][slug][$eq]=${categoryName}`;

    // Add brand filters if any brands are selected
    if (selectedBrands.length > 0) {
        const brandFilters = selectedBrands
            .map(brand => `filters[brand][name][$eq]=${brand}`)
            .join("&");
        filters += `&${brandFilters}`;
    }

    // Make the API request with the constructed filters
    try {
        const response = await axiosClient.get(`/products?${filters}&populate[images]=true`);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching products by category and brands:", error);
        return [];
    }
} */

/* const getProductsByCategoryWithFilters = (category, minPrice, maxPrice, selectedBrands) => {
    let url = `/products?filters[categories][slug][$eq]=${category}&populate=brand`;

    if (minPrice !== undefined && maxPrice !== undefined) {
        url += `&filters[mrp][$gte]=${minPrice}&filters[mrp][$lte]=${maxPrice}`;
    }

    if (selectedBrands.length > 0) {
        selectedBrands.forEach(brand => {
            url += `&filters[brands][name][$eq]=${brand}`;
        });
    }

    return axiosClient.get(url).then(resp => {
        return resp.data.data;
    });
}; */

/* const getBrandsForFilter = async () => {
    const brands = await axiosClient.get("/brands");
    const resp = brands.data.data;
    return resp;
} */

const getBrandsForFilter = async (categorySlug) => {
    //console.log(categorySlug);
    const products = await axiosClient.get(`/products?filters[categories][slug][$eq]=${categorySlug}&populate=brand`);
    const resp = products.data.data;
    //console.log("Products : ", resp);

    // Use a Set to keep unique brand names
    const brandsSet = new Set();

    // Loop through each product
    resp.forEach(product => {
        const brandName = product.brand?.name;

        if (brandName) {
            // Add brand name to Set to ensure uniqueness
            brandsSet.add(brandName);
        }
    });

    // Convert the Set back to an array of unique brand names
    return Array.from(brandsSet);
};

/* async function getProductsByCategory(categoryName, minPrice, maxPrice) {
    let url = `/api/products?filters[category][$eq]=${categoryName}`;

    if (minPrice && maxPrice) {
        url += `&filters[price][$gte]=${minPrice}&filters[price][$lte]=${maxPrice}`;
    }

    const response = await fetch(url);
    return await response.json();
}
 */

//http://localhost:1337/api/products?populate=colors&populate=images&populate=categories
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


/* const getCartItems = (userId, token) => axiosClient.get('/user-carts?filters[userId][$eq]='+userId+'&populate=*',{
    headers: {
        Authorization: "Bearer "+token
    }
}).then(resp => {
    return resp.data.data;
}) */

//const getCartItems = (userId, token) => axiosClient.get('/user-carts?filters[userId][$eq]=' + userId + '&populate[0]=products&populate[1]=products.colors&populate[2]=products.images', {
const getCartItems = (userId, token) => axiosClient.get('/user-carts?filters[userId][$eq]=' + userId + '&populate=products&populate=products.images', {
    headers: {
        Authorization: "Bearer " + token
    }
}).then(resp => {
    const data = resp.data.data;
    const cartItemsList = data.map((item, index) => ({
        name: item?.products[0]?.name,
        quantity: item.quantity,
        //color: item.products[0].colors[0]?.name,
        color: item.color,
        amount: item.amount,
        image: item?.products[0]?.images[0]?.url,
        actualPrice: item?.products[0]?.mrp,
        id: item.documentId,
        product: item?.products[0]?.id,
        // productDocId: item?.products[0]?.documentId
        stock: item?.products[0]?.stock
    }))
    return cartItemsList;
})


//const getCartItemsForOrder = (userId, token) => axiosClient.get('/user-carts?filters[userId][$eq]=' + userId + '&populate=products&populate=products.colors', {
const getCartItemsForOrder = (userId, token) => axiosClient.get('/user-carts?filters[userId][$eq]=' + userId + '&[populate][products]=*', {
    headers: {
        Authorization: "Bearer " + token
    }
}).then(resp => {
    const data = resp.data.data;
    const cartItemsList = data.map((item, index) => ({
        name: item.products[0].name,
        quantity: item.quantity,
        //color: item.products[0].colors[0]?.name,
        color: item.color,
        amount: item.amount,
        //product: item.products[0].id,
        product: item?.products[0]?.documentId,
        id: item.documentId
    }))
    return cartItemsList;
})

/* async function updateCartItem(cartItemId, updatedData, token) {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}api/user-carts/${cartItemId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ data: updatedData }),  // Wrap in a data object for Strapi
        });

        if (!response.ok) {
            const errorResponse = await response.json();
            console.error(`Error: ${response.status}`, errorResponse);
            throw new Error(`Error: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error updating cart item:', error);
    }
} */

const updateCartItem = async (cartItemId, updatedData, token) => {
    try {
        const response = await axiosClient.put(`/user-carts/${cartItemId}`,
            { data: updatedData }, // Wrapping `updatedData` in `data` object for Strapi
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        console.log(response.data.data); // Log the updated item data
        return response.data.data;
    } catch (error) {
        console.error('Error updating cart item:', error);
    }
};


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

async function stockUpdate(item, token) {
    const response = await axiosClient.get(`/products/${item.product}`, {
        headers: { Authorization: "Bearer " + token }
    });
    const product = response.data.data;
    //console.log("Up Pro:", product);

    // Update stock based on the order quantity
    return axiosClient.put(`/products/${item.product}`, {
        data: { stock: product.stock - item.quantity }
    }, {
        headers: { Authorization: "Bearer " + token }
    });
}

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
    singleCategory,
    getAllProducts,
    getAboutUsData,
    fetchTop12Products,
    fetch12ProductsInACategory,
    fetchRandom12Products,
    getRelatedProducts,
    getSingleProduct,
    getProductsByCategory,
    //getProductsByCategoryWithBrands,
    getProductsByCategoryWithFilters,
    getBrandsForFilter,
    registerUser,
    testfunc,
    signIn,
    addToCart,
    getCartItems,
    updateCartItem,
    deleteCartItem,
    getCartItemsForOrder,
    createOrder,
    stockUpdate,
    getMyOrder,
    getSingleOrder
}



//Select products with images url only
//http://localhost:1337/api/products?populate[images][fields][0]=url

// products filter api by category:
// http://localhost:1337/api/products?filters[categories][name][$in]=Fruits

// Select fields name , mrp and description
//http://localhost:1337/api/products?fields=name,mrp,description

// Select where product id = 6
//http://localhost:1337/api/products?filters[id][$eq]=6

//Get products with images & sorted by id desc
//http://localhost:1337/api/products?populate[images]=true&sort[id]=desc

// Select fields name , mrp and description Select where product id = 6
//http://localhost:1337/api/products?fields=name,mrp,description&filters[id][$eq]=6

// Products filter with category slug
//http://localhost:1337/api/products?filters[categories][slug][$eq]=smart-watch

//Selected category products with brand
//http://localhost:1337/api/products?filters[categories][slug][$eq]=smart-watch&populate=brand

////Selected category products with price range
//http://127.0.0.1:1337/api/products?category=smart-watch&minPrice=2000&maxPrice=5571
//http://127.0.0.1:1337/api/products?filters[categories][slug][$eq]=smart-watch&filters[mrp][$gte]=5&filters[mrp][$lte]=8000

// get products from cart for the selected user
//http://localhost:1337/api/user-carts?filters[userId][$eq]=9&populate=*

// Select cart with products and images
//http://localhost:1337/api/user-carts?[populate][products][populate][images]=*
// Select cart with products , images and color
//http://localhost:1337/api/user-carts?populate[0]=products&populate[1]=products.colors&populate[2]=products.images        // way 01
//http://localhost:1337/api/user-carts?[populate][products][populate][colors]=*&[populate][products][populate][images]=*   // way 02


// get a product equalsto product-slug with image
//http://localhost:1337/api/products?filters[slug][$eq]=red-carrot&[populate][images]=*


// get a product equalsto product-slug with image and categories
//http://localhost:1337/api/products?filters[slug][$eq]=red-carrot&populate=*

//const getCartItems = await axiosClient.get("/user-carts?filters[userId][$eq]="+userId+"&fields[0]=quantity&fields[1]=amount&populate[products][fields][0]=name&populate[products][fields][1]=mrp");
//const getCartItems = await axiosClient.get("/user-carts?filters[userId][$eq]="+userId+"&populate[products][fields][0]=id");
//const getCartItems = await axiosClient.get("/user-carts?filters[userId][$eq]="+userId+"&populate[products][filters][id][$eq]=45");