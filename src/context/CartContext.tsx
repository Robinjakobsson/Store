import { createContext, ReactNode, useContext, useState } from "react";
import { Product } from "../types/Product";



type CartContextType = {
    cart: Product[]
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
}

const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
})

export const useCart = () => useContext(CartContext);

type Props = { children : ReactNode };

export const CartProvider = ({ children }: Props) => {
    const [cart, setCart] = useState<Product[]>([]);

    const addToCart = (product: Product) => {
        setCart(prev => [...prev, product])
        console.log(product.title, "Has been added")
    }

    const removeFromCart = (id: number) => {
        setCart(prev => prev.filter(p => p.id !== id))
        
    }

 return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
    );

}