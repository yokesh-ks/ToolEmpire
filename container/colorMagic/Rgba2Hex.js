import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Icon } from "../../icons";
import { Input, IconButton, Row } from "../../components";

const Rgba2Hex = () => {
  const [result, setResult] = useState("");
  const [value, setValue] = useState("rgba(0, 255, 117, 1)");

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  useEffect(() => {
    // Match the RGBA values using a regular expression
    const match = value.match(
      /^rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d*(?:\.\d+)?)\s*\)$/
    );

    // If the match fails, set the result to "Invalid RGBA Code"
    if (!match) {
      setResult("Invalid RGBA Code");
      return;
    }

    // Extract the red, green, and blue values from the match
    let [, r, g, b, a] = match;

    // Convert the RGBA values to hexadecimal
    r = +r;
    g = +g;
    b = +b;
    a = +a;

    r = r.toString(16).padStart(2, "0");
    g = g.toString(16).padStart(2, "0");
    b = b.toString(16).padStart(2, "0");

    // If the alpha value is less than 1, set the result to "Transparent"
    if (a < 1) {
      setResult("Transparent");
    } else {
      // Otherwise, set the result to the hexadecimal color code
      setResult(`#${r}${g}${b}`);
    }
  }, [value]);

  return (
    <Container backgroundColor={result}>
      <WrapperContainer>
        <Row>
          <h3 style={{ marginRight: 24, color: "#000000" }}>RGBA</h3>
          <Input
            width="300px"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <IconButton
            onClick={() => handleCopy(value)}
            style={{ cursor: "pointer" }}
          >
            <Icon name="CopyLink" width={28} height={28} />
          </IconButton>
        </Row>
        <Icon name="ArrowDown" width={23} height={30} />
        <Row>
          <h3 style={{ marginRight: 24, color: "#000000" }}>Hex</h3>
          <Input width="300px" value={result} />
          <IconButton
            onClick={() => handleCopy(result)}
            style={{ cursor: "pointer" }}
          >
            <Icon name="CopyLink" width={28} height={28} />
          </IconButton>
        </Row>
      </WrapperContainer>
    </Container>
  );
};

export default Rgba2Hex;

const Container = styled.div`
  width: 100%;
  background: ${(props) => props.backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 144px;
  padding-bottom: 144px;
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
