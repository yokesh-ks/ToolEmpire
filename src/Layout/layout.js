import React from "react";

import { Container } from "./LayoutStyles";
import Footer from "../components/Footer";
import Header from "../components/Header";
export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
