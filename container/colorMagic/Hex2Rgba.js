import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Icon } from "../../icons";
import { Input, IconButton, Row } from "../../components";
import { copy } from "../../utils";

const Hex2Rgba = () => {
  const [result, setResult] = useState("");
  const [value, setValue] = useState("#ff0ed8");

  useEffect(() => {
    // Remove the "#" symbol from the hex code
    const hex = value.replace("#", "");

    // If the hex code is too long, set the result to "Invalid Hex Code" and return
    if (hex.length > 6) {
      setResult("Invalid Hex Code");
      return;
    }

    // Extract the red, green, and blue values from the hex code
    let [r, g, b] = [0, 2, 4].map((offset) => {
      // If the hex code is 3 characters long, repeat each character to get a 2-character string
      const sub =
        hex.length === 3
          ? hex.slice(offset, offset + 1).repeat(2)
          : hex.slice(offset, offset + 2);
      // Convert the 2-character string to a number
      return parseInt(sub, 16);
    });

    // If any of the values are not a number, set the result to "Invalid Hex Code"
    if (!r || !g || !b) {
      setResult("Invalid Hex Code");
    } else {
      // Otherwise, set the result to the `rgba` value
      setResult(`rgba(${r}, ${g}, ${b}, 1)`);
    }
  }, [value]);

  return (
    <Container backgroundColor={result}>
      <WrapperContainer>
        <Row>
          <h3 style={{ marginRight: 24, color: "#000000" }}>Hex</h3>
          <Input
            width="300px"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <IconButton
            onClick={() => copy(value)}
            style={{ cursor: "pointer" }}
          >
            <Icon name="CopyLink" width={28} height={28} />
          </IconButton>
        </Row>
        <Icon name="ArrowDown" width={23} height={30} />
        <Row>
          <h3 style={{ marginRight: 24, color: "#000000" }}>RGBA</h3>
          <Input width="300px" value={result} />
          <IconButton
            onClick={() => copy(result)}
            style={{ cursor: "pointer" }}
          >
            <Icon name="CopyLink" width={28} height={28} />
          </IconButton>
        </Row>
      </WrapperContainer>
    </Container>
  );
};

export default Hex2Rgba;

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
