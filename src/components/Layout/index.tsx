import { ReactNode } from "react";
import AppProvider from "../Contex/ProductContex";
import Footer from "../Footer";
import Header from "../Header";

import { Container, HeaderStyle, FooterStyle } from "./styles";

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <AppProvider>
      <Container>
        <HeaderStyle>
          <Header />
        </HeaderStyle>

        <main>{children}</main>

        <FooterStyle>
          <Footer />
        </FooterStyle>
      </Container>
    </AppProvider>
  );
};

export default Layout;
