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
          <h3 style={{ marginRight: 24, color: "#000000" }}>{activeTab}</h3>
          <Input width="300px" value={result} />
          <IconButton
            onClick={() => copy(result)}
            style={{ cursor: "pointer" }}
          >
            <Icon name="CopyLink" width={28} height={28} />
          </IconButton>
        </Row>
      </WrapperContainer>
      <Button onClick={() => handleButtonClick()}>Click Here</Button>
    </Container>
  );
};

export default Random;

const NavBar = styled.div`
  width: 100%;
  height: 78px;
  background: #ff5e5e;
  box-shadow: 0px 4px 0px #000000;
  margin-bottom: 144px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 40px;
  padding-right: 40px;
  color: #ffffff;
`;

const Container = styled.div`
  width: 100%;
  background: ${(props) => props.backgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 108px;
`;

const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  background: #ffffff;
  border-radius: 16px;
  border: 4px solid #000000;
  box-shadow: 8px 8px 4px #000000;
  margin: auto;
  padding-bottom: 36px;
  padding-left: 108px;
  padding-right: 108px;
  padding-top: 36px;
`;

const Button = styled.div`
  width: 166px;
  height: 47px;
  background: #0077ff;
  border: 2px solid #000000;
  box-shadow: 4px 4px 0px #000000;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  margin-top: 60px;
  cursor: pointer;
`;
