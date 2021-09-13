import { NextPage } from "next";
import { useContext } from "react";
import CartIcon from "../CartIcon";
import { ProductContext } from "../Contex/ProductContex";

import { Container, CartInfo, Nav } from "./styles";

const Header: NextPage = () => {
  const { cart } = useContext(ProductContext);

  return (
    <Container>
      <Nav>
        <div>Logo</div>
        <div>Menu1</div>
        <div>Menu2</div>
        <div>Menu3</div>
      </Nav>

      <CartInfo>
        <CartIcon />
      </CartInfo>
    </Container>
  );
};

export default Header;
