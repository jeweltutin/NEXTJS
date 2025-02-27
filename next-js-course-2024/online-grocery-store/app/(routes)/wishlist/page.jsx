"use client";
import { useEffect, useState } from "react";
import { Tabs } from "@/components/ui/tabs"; // Import Tabs (if using ShadCN)
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import axios from "axios";

const WishlistPage = () => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedToken = sessionStorage.getItem("jwt");
    const storedUser = sessionStorage.getItem("user");

    if (storedToken) setToken(storedToken);
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  //console.log("User:", user);

  const [activeTab, setActiveTab] = useState("wishlist");

  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /*   const wishlistItems = [
      {
        id: 1,
        name: "Automatic Yogurt Maker",
        description: "Premium ABS & PP, 1L Capacity, 220-240V/50Hz, 15W",
        price: 380,
        image: "/yogurt-maker.jpg",
      },
      {
        id: 2,
        name: "Joya Wings Regular",
        description: "8 Pads Pack - Size 7-12",
        price: 55,
        image: "/joya-wings.jpg",
      },
      {
        id: 3,
        name: "Silicone Heel Protector Socks",
        description: "Moisturizing Gel Heel Pain Relief",
        price: 68,
        image: "/heel-socks.jpg",
      },
    ];
   */


  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        setLoading(true);
        // Fetch the wishlist items for the logged-in user
        const response = await axios.get(
          //`${process.env.NEXT_PUBLIC_API_URL}/wishlists?filters[users_permissions_user][id]=${user.id}&populate=products`,   // Populate 'products' to get product details
          `${process.env.NEXT_PUBLIC_API_URL}/wishlists?filters[users_permissions_user][id]=${user.id}&populate[products][populate][images][fields][0]=url`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        console.log("data", response);
        setWishlistItems(response.data.data); // Store the wishlist items
      } catch (err) {
        setError("Error fetching wishlist data");
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchWishlist();
    }
  }, [user, token]); // Re-run when user or token changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  console.log("wishlistItems", wishlistItems);

  const handleDelete = async (wishlistItemId) => {
    try {
      // First, delete the wishlist item from the server
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/wishlists/${wishlistItemId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      console.log('Wishlist item deleted:', response.data);

      // Optimistic UI update: Remove the item from state immediately
      /*    setWishlistItems((prevWishlistItems) => {
           const updatedList = prevWishlistItems.filter((item) => item.id !== wishlistItemId);
           console.log('Updated wishlist items:', updatedList);  // Check if the state is updated
           return updatedList;
         }); */

      // Re-fetch the wishlists to ensure the data is up-to-date
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/wishlists?filters[users_permissions_user][id]=${user.id}&populate[products][populate][images][fields][0]=url`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      console.log('Refetched wishlists:', res.data.data);  // Check if the server returns the updated list
      setWishlistItems(res.data.data); // Update the state with the fresh list
    } catch (error) {
      console.error('Error deleting wishlist item:', error);
    }
  };

  const truncateDescription = (description, wordLimit = 10) => {
    const words = description.split(' '); // Split the description into words
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...'; // Return first 'wordLimit' words, with '...'
    }
    return description; // If description is shorter than the limit, return it as is
  };


  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Tabs */}
      <div className="flex border-b">
        {["wishlist", "purchases", "stores"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 ${activeTab === tab
              ? "border-b-2 border-blue-500 text-blue-500 font-semibold"
              : "text-gray-500"
              }`}
          >
            {tab === "wishlist" ? "My Wishlist" : tab === "purchases" ? "Past Purchases" : "Followed Stores"}
          </button>
        ))}
      </div>

      {/* "Add All to Cart" Button */}
      {/* <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded flex items-center gap-2">
        <FaShoppingCart /> ADD ALL TO CART
      </button> */}
      <p className="py-2">My Wishlist & Followed Stores (15)</p>

      {/* Wishlist Items */}
      <div className="mt-4 space-y-4">
        {wishlistItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between border p-3 rounded-lg shadow-sm">
            {/* Product Details */}
            <div className="flex items-center gap-4">
              <img src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + item.products[0].images[0].url} alt={item.name} className="w-16 h-16 object-cover rounded" />
              <div>
                <h3 className="font-semibold">{item.products[0].name}</h3>
                <p className="text-sm text-gray-500 w-52">{truncateDescription(item.products[0].description)}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <p className="text-orange-500 font-semibold">৳ {item.products[0].mrp}</p>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <button className="bg-orange-500 text-white px-3 py-2 rounded flex items-center gap-2">
                <span>+</span><FaShoppingCart />
              </button>
              <button onClick={() => handleDelete(item.documentId)} className="bg-gray-500 text-white px-3 py-2 rounded flex items-center">
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
