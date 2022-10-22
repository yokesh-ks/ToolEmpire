import React from "react";
import styled from "styled-components";
import { Container } from "@uimakers/tools-ui";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <NavBar>
      <Container>
        <NavBarContain>
          <Link href="/" passHref>
            <ImageContainer>
              <Image layout="fill" src="/logo2.png" alt="logo" objectFit="contain"/>
            </ImageContainer>
          </Link>

          <NavMenu>
            <Link href="/responsive-font">Responsive Font</Link>
            <Link href="/color-convertor">Color Convertor</Link>
            <Link href="http://yokesh.in/" passHref>
              <a target="_blank">My Portfolio</a>
            </Link>
          </NavMenu>
        </NavBarContain>
      </Container>
    </NavBar>
  );
}

const NavBar = styled.div`
  position: absolute;
  background: rgba(35, 60, 115, 0.3);
  border-bottom: 2px solid rgba(35, 60, 115, 0.8);
  height: 70px;
  width: 100vw;
  top: 0;
  left: 0;
`;

const NavBarContain = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;

const Logo = styled.p`
  color: #6ebf8b;
  font-weight: bold;
  font-size: 18px;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 220px;
  width: 300px;
  cursor: pointer;
`;

export default Header;
