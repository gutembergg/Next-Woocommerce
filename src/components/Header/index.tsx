import { NextPage } from "next";

import { Container } from "./styles";

const Header: NextPage = () => {
  return (
    <Container>
      <div>Logo</div>
      <div>Menu1</div>
      <div>Menu2</div>
      <div>Menu3</div>
    </Container>
  );
};

export default Header;
