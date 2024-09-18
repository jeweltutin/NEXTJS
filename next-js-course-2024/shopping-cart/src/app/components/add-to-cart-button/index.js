"use client";

import { useDispatch, useSelector } from "react-redux";

import { addToCart, removeFromCart } from "@/store/slices/cart-slice";
import { Button } from "@/app/components/ui/button";

function AddToCartButton({ productItem }) {
  //const getState = useSelector((state) => state)
  //console.log(getState);
  const { cart } = useSelector((state) => state);
  console.log(cart?.cartItems);
  const cartItemsTotal = (cart.cartItems).length;
  console.log(cartItemsTotal);
  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(addToCart(productItem));
  }

  function handleRemoveFromCart() {
    dispatch(removeFromCart(productItem?.id));
  }

  return (
    <div className="mt-8 max-w-md">
      <Button type="button"
        onClick={
          cart?.cartItems.some((item) => item.id === productItem.id)
            ? handleRemoveFromCart
            : handleAddToCart
        }
      >
        {
          cart?.cartItems.some((item) => item.id === productItem.id) ? "Remove from cart" : "Add to cart"
        }
      </Button>
    </div>
  );
}

export default AddToCartButton;