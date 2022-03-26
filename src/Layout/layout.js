import React from "react";

import { Container } from "./LayoutStyles";
import Footer from "../components/Footer";

export const Layout = ({ children }) => {
  return (
    <Container>
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
