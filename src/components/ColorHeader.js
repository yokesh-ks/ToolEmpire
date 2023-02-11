import React from "react";
import styled from "styled-components";
import { Container } from "@uimakers/tools-ui";
import { useRouter } from "next/router";
const ColorHeader = () => {
  const router = useRouter();
  return (
    <NavBar>
      <Container>
        <NavBarContain>
          {/* <h3>Color Convertor</h3> */}
          <NavMenu>
            <MenuItem onClick={() => router.push(`/color-magic/?CC=hex2rgba`)}>
              Hex to RGBA
            </MenuItem>
            <MenuItem onClick={() => router.push(`/color-magic/?CC=rgba2hex`)}>
              RGBA to Hex
            </MenuItem>
            <MenuItem onClick={() => router.push(`/color-magic/?CC=random`)}>
              Random Color Generator
            </MenuItem>
            <MenuItem onClick={() => router.push(`/color-magic/?CC=hex2rgb`)}>
              Hex to RGB
            </MenuItem>
          </NavMenu>
        </NavBarContain>
      </Container>
    </NavBar>
  );
};

export default ColorHeader;

const NavBar = styled.div`
  position: absolute;
  width: 100%;
  height: 70px;
  background: rgba(35, 60, 115, 0.3);
  left: 0;
  top: 70px;
`;

const NavBarContain = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;

  h3 {
    color: white;
  }
`;

const NavMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  gap: 20px;
  cursor: pointer;
`;

const MenuItem = styled.p`
  color: white;
  font-size: 16px;
`;
