"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { Textarea } from "@/components/ui/textarea";

function Profile() {
    const token = sessionStorage.getItem("jwt");

    const [user, setUser] = useState({
        username: "",
        name: "",
        email: "",
        mobile: "",
        about: "",
        profileImage: "",
    });

    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(false); // Spinner state

    // Fetch user data
    useEffect(() => {
        axios
            .get("http://localhost:1337/api/users/me", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                setUser(response.data);
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
            });
    }, [token]);

    if (!user) {
        return <div>Loading...</div>;
    }

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    // Handle file upload for profile picture
    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append("files", file);

        try {
            const response = await axios.post("http://localhost:1337/api/upload", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            });

            // Get the URL directly from the upload response
            const uploadedImageUrl = `http://localhost:1337${response.data[0]?.url}`;

            // Update the user state with the URL (for immediate use in the UI)
            setUser((prevUser) => ({
                ...prevUser,
                profileImage: uploadedImageUrl, // Save the URL string in the state
            }));

            console.log("Profile image uploaded:", uploadedImageUrl);
        } catch (error) {
            console.error("Error uploading image:", error.message);
        }
    };

    // Validate inputs before submission
    const validateForm = () => {
        if (!user.name.trim()) {
            alert("Name is required");
            return false;
        }
        if (!user.mobile.trim() || !/^\d{11}$/.test(user.mobile)) {
            alert("Enter a valid 10-digit phone number");
            return false;
        }
        return true;
    };

    // Submit updated data
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return; // Stop if validation fails

        setLoading(true); // Start loading

        try {
            const response = await axios.put(
                `http://localhost:1337/api/users/${user.id}`,
                {
                    name: user.name,
                    about: user.about,
                    mobile: user.mobile,
                    profileImage: user.profileImage, // Save the image URL in the database
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log("User profile updated:", response.data);
            setLoading(false); // End loading
            setIsEditing(false); // Exit editing mode
        } catch (error) {
            console.error("Error updating profile:", error.message);
            setLoading(false); // End loading
        }
    };

    return (
        <div className="bg-gray-100">
            <div className="container mx-auto py-8">
                <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                    {/* Sidebar */}
                    <div className="col-span-4 sm:col-span-3">
                        <div className="bg-white shadow rounded-lg p-6">
                            <div className="flex flex-col">
                                <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                                    My Account
                                </span>
                                <hr className="my-6 border-t border-gray-300" />
                                <ul>
                                    <li className="mb-2">My Orders</li>
                                    <li className="mb-2">My Profile</li>
                                    <li className="mb-2">My Address</li>
                                    <li className="mb-2">Wishlist</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="col-span-4 sm:col-span-9">
                        <div className="bg-white shadow rounded-lg p-6">
                            <div className="flex flex-col items-center">
                                {/* Display Profile Image */}
                                <img src={user.profileImage || "https://via.placeholder.com/150"} alt="Profile" className="w-32 h-32 bg-gray-300 rounded-full mb-4" />
                                {/* <p>{user.id}</p> */}

                                {!isEditing ? (
                                    <>
                                        <h1 className="text-xl font-bold">{user.name}</h1>
                                        <p className="text-gray-700">{user.email}</p>
                                        <p className="text-gray-700">{user.mobile}</p>
                                        <p className="text-gray-700">{user.about}</p>
                                        <button onClick={() => setIsEditing(true)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                                            Edit Profile
                                        </button>
                                    </>
                                ) : (
                                    <form onSubmit={handleSubmit} className="w-full mt-4">
                                        <div className="mb-4">
                                            <label className="block text-gray-700 font-bold">Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={user.name}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 border rounded"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-gray-700 font-bold">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={user.email}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 border rounded"
                                                disabled // Email is not editable
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-gray-700 font-bold">Phone</label>
                                            <input
                                                type="text"
                                                name="mobile"
                                                value={user.mobile}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 border rounded"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-gray-700 font-bold">Bio</label>
                                            <Textarea
                                                name="about"
                                                value={user.about}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 border rounded"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-gray-700 font-bold">Profile Picture</label>
                                            <input
                                                type="file"
                                                onChange={handleFileChange}
                                                className="w-full px-4 py-2 border rounded"
                                                accept="image/*"
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className={`px-4 py-2 ${loading ? "bg-gray-500" : "bg-green-500"} text-white rounded`}
                                            disabled={loading}
                                        >
                                            {loading ? "Saving..." : "Save"}
                                        </button>
                                        <button
                                            type="button"
                                            className="ml-4 px-4 py-2 bg-gray-500 text-white rounded"
                                            onClick={() => setIsEditing(false)}
                                        >
                                            Cancel
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
