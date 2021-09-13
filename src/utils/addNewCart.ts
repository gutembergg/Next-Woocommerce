import { ProductCart } from "../components/Contex/ProductContex";
import { IProduct } from "../pages";

export const createProduct = (
  product: IProduct,
  price: number,
  qty: number = 1
) => {
  return {
    id: product.id,
    name: product.name,
    price: price,
    image: product.images[0].src,
    qty: qty,
    totalPrice: price * qty,
  };
};

export const addNewCart = (product: IProduct) => {
  const price = Number(product.price);

  const newCart = {
    products: [] as ProductCart[],
    totalProductsCount: 1,
    totalProductsPrice: price,
  };

  const newProduct = createProduct(product, price, 1);

  newCart.products.push(newProduct);

  localStorage.setItem("woo-next-cart", JSON.stringify(newCart));

  return newCart;
};
