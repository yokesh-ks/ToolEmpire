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
              <Image
                layout="fill"
                src="/logo2.png"
                alt="logo"
                objectFit="contain"
              />
            </ImageContainer>
          </Link>

          <NavMenu>
            <Link href="/responsive-font">Fontwise</Link>
            <Link href="/color-convertor">Color Magic</Link>
            <Link href="http://yokesh.in/" passHref>
              <a target="_blank">My Portfolio</a>
            </Link>
          </NavMenu>
        </NavBarContain>
      </Container>
    </NavBar>
  );
};

const NavBar = styled.div`
  position: absolute;
  background: #2b2b37;
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
