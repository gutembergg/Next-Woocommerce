import { createContext, ReactNode, useState } from "react";
import { IProduct, IProducts } from "../../pages";

interface DataContext {
  products: IProduct[];
  setProduct: (product: IProduct) => void;
}

interface IChildren {
  children: ReactNode;
}

export const ProductContext = createContext<DataContext>({} as DataContext);

export const AppProvider = ({ children }: IChildren) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const setProduct = (product: IProduct) => {
    setProducts([...products, product]);
  };

  return (
    <ProductContext.Provider
      value={{ products, setProduct }}
    ></ProductContext.Provider>
  );
};
