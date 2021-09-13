import { createContext, ReactNode, useEffect, useState } from "react";
import { IProduct } from "../../pages";

interface DataContext {
  cart: Cart;
  addProductInCart: (cart: Cart) => void;
}

interface IChildren {
  children: ReactNode;
}

export interface ProductCart {
  id: number;
  name: string;
  price: number;
  image: string;
  qty: number;
  totalPrice?: number;
}

export interface Cart {
  products: ProductCart[];
  totalProductsCount: number;
  totalProductsPrice: number;
}

export const ProductContext = createContext<DataContext>({} as DataContext);

const AppProvider = ({ children }: IChildren) => {
  const [cart, setCart] = useState<Cart>({} as Cart);

  useEffect(() => {
    const cartData = localStorage.getItem("woo-next-cart");

    if (cartData) {
      const cartJson = JSON.parse(cartData);

      console.log("cartJson", cartJson);

      setCart(cartJson);
    }
  }, []);

  const addProductInCart = (_cart: Cart) => {
    setCart(_cart);
  };

  console.log("cartData: ", cart);

  return (
    <ProductContext.Provider value={{ cart, addProductInCart }}>
      {children}
    </ProductContext.Provider>
  );
};

export default AppProvider;
