import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Icon } from "../../icons";
import { Input, IconButton, Row } from "../../components";
import { copy } from "../../utils";

const Random = () => {
  const [result, setResult] = useState("#FFC700");
  const [activeTab, setActiveTab] = useState("Hex");

  const handleButtonClick = () => {
    if (activeTab === "Hex") {
      setResult(getRandomHexCode());
      return;
    }

    if (activeTab === "RGBA") {
      setResult(getRandomRgbaCode());
      return;
    }
  };
  const HEX = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

  const getRandomHexCode = () => {
    let hex = "#";
    for (let i = 0; i < 6; i++) {
      var num = getRandomNumber();
      hex += HEX[num];
    }
    return hex;
  };

  const getRandomRgbaCode = () => {
    const color1 = Math.floor(Math.random() * 255);
    const color2 = Math.floor(Math.random() * 255);
    const color3 = Math.floor(Math.random() * 255);
    return `rgba(${color1}, ${color2}, ${color3}, 1)`;
  };

  const getRandomNumber = () => Math.floor(Math.random() * HEX.length);

  return (
    <Container backgroundColor={result}>
      <NavBar>
        <h3>Random Color Generator</h3>
        <Row style={{ gap: 32 }}>
          <h3 onClick={() => setActiveTab("Hex")} style={{ cursor: "pointer" }}>
            Hex
          </h3>
          <h3
            onClick={() => setActiveTab("RGBA")}
            style={{ cursor: "pointer" }}
          >
            RGBA
          </h3>
        </Row>
      </NavBar>
      <WrapperContainer>
        <Row>
          <Title>{activeTab}</Title>
          <Input width="300px" value={result} />
          <IconButton name="CopyLink" onClick={() => copy(result)} />
        </Row>
      </WrapperContainer>
      <Button onClick={() => handleButtonClick()}>Click Here</Button>
    </Container>
  );
};

const Title = styled.h3`
  margin-right: ${({ theme }) => theme.spacing.spacing6};
  color: ${({ theme }) => theme.colors.onNeutral};
`;

export default Random;

const NavBar = styled.div`
  width: 100%;
  height: 78px;
  background: #ff5e5e;
  box-shadow: 0px 4px 0px ${({ theme }) => theme.colors.onNeutral};
  margin-bottom: ${({ theme }) => theme.spacing.spacing12};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px ${({ theme }) => theme.spacing.spacing8};
  color: ${({ theme }) => theme.colors.onPrimary};
`;

const Container = styled.div`
  width: 100%;
  background: ${(props) => props.backgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: ${({ theme }) => theme.spacing.spacing12};
`;

const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.spacing6};
  background: ${({ theme }) => theme.colors.background};
  border-radius: 16px;
  border: 4px solid ${({ theme }) => theme.colors.onNeutral};
  box-shadow: 8px 8px 4px ${({ theme }) => theme.colors.onNeutral};
  margin: auto;
  padding: ${({ theme }) => theme.spacing.spacing7}
    ${({ theme }) => theme.spacing.spacing12};
`;

const Button = styled.div`
  width: 166px;
  height: 47px;
  background: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.onNeutral};
  box-shadow: 4px 4px 0px ${({ theme }) => theme.colors.onNeutral};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.onPrimary};
  margin-top: ${({ theme }) => theme.spacing.spacing10};
  cursor: pointer;
`;
