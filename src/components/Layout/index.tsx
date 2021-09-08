import { NextPage } from "next";
import { ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";

import { Container, HeaderStyle, FooterStyle } from "./styles";

interface IProps {
  children: ReactNode;
}

const Layout: NextPage<IProps> = ({ children }) => {
  return (
    <Container>
      <HeaderStyle>
        <Header />
      </HeaderStyle>

      <main>{children}</main>

      <FooterStyle>
        <Footer />
      </FooterStyle>
    </Container>
  );
};

export default Layout;
