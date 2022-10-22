import React from "react";

import { Container } from "@uimakers/tools-ui";
import { Footer, Header } from "../components";
export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
