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
    setCart(prev => {
      const existing = prev.find(p => p.id === product.id);

      if (existing) {
        // öka quantity på befintlig produkt
        console.log("Ökar quantity")
        return prev.map(p =>
          p.id === product.id
            ? { ...p, quantity: (p.quantity ?? 1) + 1 }
            : p
        );
        
      }

      // lägg till ny produkt med quantity = 1
      console.log("Lägger till Quantity 1")
      return [...prev, { ...product, quantity: 1 }];
    });
  };

    const removeFromCart = (id: number) => {
        setCart(prev => prev.filter(p => p.id !== id))
        console.log(id)
    }

 return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
    );

}