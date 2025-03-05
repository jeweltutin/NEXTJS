import { useState, useEffect } from "react";
import axios from "axios";

const WishlistButton = ({ productId, user, token }) => {
    const [isInWishlist, setIsInWishlist] = useState(false);

    // Fetch wishlist status when component loads
    useEffect(() => {
        if (!user) return;

        const fetchWishlist = async () => {
            try {
                const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/wishlists?filters[users_permissions_user][id]=${user.id}&filters[products][id]=${productId}`,
                    //`http://127.0.0.1:1337/api/wishlists?filters[user][id]=${user.id}&filters[product][id]=${productId}`,                   
                    {
                        headers: { Authorization: `Bearer ${token}` },
                    }
                );
                setIsInWishlist(response.data.data.length > 0);
            } catch (error) {
                console.error("Error fetching wishlist:", error);
            }
        };

        fetchWishlist();
    }, [user, productId, token]);

    const toggleWishlist = async () => {
        if (!user) {
            alert("Please log in to add items to your wishlist.");
            return;
        }

        try {
            if (isInWishlist) {
                // Remove from wishlist
                const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/wishlists?filters[users_permissions_user][id]=${user.id}&populate[products][populate][images][fields][0]=url`,
                    {
                        headers: { Authorization: `Bearer ${token}` },
                    }
                );

                const wishlistItem = response.data.data[0]; // Check if an item exists
                //console.log("wishlistItem", wishlistItem);

                if (wishlistItem) {
                    await axios.delete(
                        `${process.env.NEXT_PUBLIC_API_URL}/wishlists/${wishlistItem.documentId}`,
                        {
                            headers: { Authorization: `Bearer ${token}` },
                        }
                    );

                    setIsInWishlist(false); // Update state after successful deletion
                }
            } else {
                // Add to wishlist
                const addResponse = await axios.post(
                    `${process.env.NEXT_PUBLIC_API_URL}/wishlists`,
                    {
                        data: {
                            users_permissions_user: user.id, // Corrected field name
                            products: [productId], // Ensure correct format for relations
                        },
                    },
                    {
                        headers: { Authorization: `Bearer ${token}` },
                    }
                );

                if (addResponse.data) {
                    setIsInWishlist(true); // Update state after successful addition
                }
            }
        } catch (error) {
            console.error("Error updating wishlist:", error);
        }
    };


    return (
        <div onClick={toggleWishlist} className="cursor-pointer">
            {isInWishlist ? (
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="red" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
            ) : (
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" stroke="black" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
            )}
        </div>
    );
};

export default WishlistButton;
