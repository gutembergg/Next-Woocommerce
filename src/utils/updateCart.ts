import { Cart, ProductCart } from "../components/Contex/ProductContex";
import { IProduct } from "../pages";
import { createProduct } from "./addNewCart";

const isExistProductInCart = (
  existProducts: ProductCart[],
  productId: number
) => {
  const newArrayProducts = existProducts.filter(
    (item) => productId === item.id
  );
  console.log("newArrayProducts: ", newArrayProducts);

  const productIndex = existProducts.indexOf(newArrayProducts[0]);

  return productIndex;

  /*   const newArrayProductsFind = existProducts.find(
    (item) => productId === item.id
  );
  console.log("newArrayProducts: ", newArrayProductsFind); */
};

const getUpdateProducts = (
  existProducts: ProductCart[],
  product: IProduct,
  qtyToBeAdded: number
) => {
  const productExisitIndex = isExistProductInCart(existProducts, product.id);

  if (productExisitIndex > -1) {
    let updatedProducts = existProducts;
    let updateProduct = updatedProducts[productExisitIndex];

    updateProduct.qty = updateProduct.qty + qtyToBeAdded;
    updateProduct.totalPrice = updateProduct.qty * Number(product.price);

    return updateProduct;
  } else {
    const priceInt = Number(product.price);
    const newProduct = createProduct(product, priceInt);

    existProducts.push(newProduct);

    return existProducts;
  }
};

export const updateCart = (
  exisitCart: Cart,
  product: IProduct,
  qtyToBeAdded: number
) => {
  const updatedProducts = getUpdateProducts(
    exisitCart.products,
    product,
    qtyToBeAdded
  );

  console.log("updatedProducts: ", updatedProducts);

  return updatedProducts;
};
