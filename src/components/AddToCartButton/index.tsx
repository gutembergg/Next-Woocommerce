import { ButtonHTMLAttributes, useContext } from "react";
import { IProduct } from "../../pages";
import { addNewCart } from "../../utils/addNewCart";
import { updateCart } from "../../utils/updateCart";
import { Cart, ProductContext } from "../Contex/ProductContex";
import { Container } from "./styles";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  product: IProduct;
}

const AddToCartButton = ({ product, ...rest }: IProps) => {
  const { cart, addProductInCart } = useContext(ProductContext);

  const handleAddToCart = () => {
    const cartExisit = localStorage.getItem("woo-next-cart");

    if (cartExisit) {
      const existCart: Cart = JSON.parse(cartExisit);

      const qtyToBeAdded = 1;

      const updatedCart = updateCart(existCart, product, qtyToBeAdded);

      console.log("updatedCart: ===>", updatedCart);
    } else {
      const newCart = addNewCart(product);
      addProductInCart(newCart);
    }
  };
  return (
    <Container>
      <button onClick={handleAddToCart}>AddToCart</button>
    </Container>
  );
};

export default AddToCartButton;
