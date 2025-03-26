import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://localhost:5000/api",
    withCredentials: true, // Enable cookies if needed
});

// Login function (returns a promise)
const signIn = (email, password) => 
    axiosClient.post("/user/login", { email, password });

// Logout function
const signOut = () => 
    axiosClient.post("/user/logout");

// Fetch logged-in user details
async function getUser() {
    const response = await axiosClient.get("/user/me");
    return response.data; // Adjust according to API response
}

export default { signIn, signOut, getUser };
