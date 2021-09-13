import Link from "next/link";
import { useContext } from "react";
import { ProductContext } from "../Contex/ProductContex";

import { AiOutlineShoppingCart } from "react-icons/ai";

import { Container } from "./styles";

const CartIcon = () => {
  const { cart } = useContext(ProductContext);
  const productCount =
    cart !== null && Object.keys(cart).length ? cart.totalProductsCount : 0;
  const totalPrice =
    cart !== null && Object.keys(cart).length ? cart.totalProductsPrice : 0;

  return (
    <Container>
      <Link href="/cart">
        <a>
          <div>
            {totalPrice !== 0 && <span>{totalPrice}</span>}

            <span>
              <AiOutlineShoppingCart />
            </span>
            {productCount !== 0 && (
              <span className="productCount">{productCount}</span>
            )}
          </div>
        </a>
      </Link>
    </Container>
  );
};

export default CartIcon;
