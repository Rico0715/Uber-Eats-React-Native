import { useState } from "react";

const useCart = () => {
  const [cartTotal, setCartTotal] = useState(0);

  const addToCart = () => {
    setCartTotal((prevTotal) => prevTotal + 1);
  };

  const removeFromCart = () => {
    if (cartTotal > 0) {
      setCartTotal((prevTotal) => prevTotal - 1);
    }
  };

  const getTotalItems = () => {
    return cartTotal;
  };

  return {
    cartTotal,
    addToCart,
    removeFromCart,
    getTotalItems,
  };
};

export default useCart;
