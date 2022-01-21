"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { getCartItems, storeCartItems } from "./localstorage";

export type CartItem = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  itemQuantity: number;
};

export type CartContextType = {
  cartItems: CartItem[];
  totalQuantity: number;
  totalPrice: number;
  addCartItem: (food: CartItem) => void;
  removeItemFromCart: (id: number) => void;
  incrementQty: (id: number) => void;
  decrementQty: (id: number) => void;
};

const initialValue: CartContextType = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
  addCartItem: () => {},
  removeItemFromCart: () => {},
  incrementQty: () => {},
  decrementQty: () => {},
};

// Creating Context
export const CartContext = createContext<CartContextType>(initialValue);

// Creating Provider
export default function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function addCartItem(food: CartItem) {
    setCartItems((prevItems) => {
      const existingfood = prevItems.find((p) => p.id === food.id);

      if (existingfood) {
        return prevItems.map((q) => {
          if (q.id === food.id) {
            return {
              ...q,
              itemQuantity: q.itemQuantity + food.itemQuantity,
            };
          } else {
            return q;
          }
        });
      } else {
        return [...prevItems, food];
      }
    });
  }

  function removeItemFromCart(id: number) {
    setCartItems((prevItems) => {
      return prevItems.filter((r) => r.id !== id);
    });
  }

  function incrementQty(id: number) {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, itemQuantity: item.itemQuantity + 1 } : item
      )
    );
  }

  function decrementQty(id: number) {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.itemQuantity > 1
          ? { ...item, itemQuantity: item.itemQuantity - 1 }
          : item
      )
    );
  }

  let totalQuantity = 0;
  for (let i = 0; i < cartItems.length; i++) {
    totalQuantity = totalQuantity + cartItems[i].itemQuantity;
  }

  let totalPrice = 0;
  for (let i = 0; i < cartItems.length; i++) {
    totalPrice = totalPrice + cartItems[i].itemQuantity * cartItems[i].price;
  }

  useEffect(() => {
    const items = getCartItems();

    setCartItems(items);
  }, []);

  useEffect(() => {
    // if (mounted) {
    storeCartItems(cartItems);
    // } else {
    //   setMounted(true);
    // }
  }, [cartItems]);

  return (
    // current value
    <CartContext.Provider
      value={{
        cartItems,
        totalQuantity: totalQuantity,
        addCartItem,
        removeItemFromCart,
        totalPrice,
        incrementQty,
        decrementQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom Hook for Consuming the Context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
