import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Icon } from "../../icons";
import { Input, IconButton, Row } from "../../components";
import { copy } from "../../utils";

const Rgba2Hex = () => {
  const [result, setResult] = useState("");
  const [value, setValue] = useState("rgba(0, 255, 117, 1)");

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
          <Title>RGBA</Title>
          <Input
            width="300px"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <IconButton name="CopyLink" onClick={() => copy(value)} />
        </Row>
        <Icon name="ArrowDown" width={23} height={30} />
        <Row>
          <Title>Hex</Title>
          <Input width="300px" value={result} />
          <IconButton name="CopyLink" onClick={() => copy(result)} />
        </Row>
      </WrapperContainer>
    </Container>
  );
};

export default Rgba2Hex;

const Title = styled.h3`
  margin-right: ${({ theme }) => theme.spacing.spacing6};
  color: ${({ theme }) => theme.colors.onNeutral};
`;

const Container = styled.div`
  width: 100%;
  background: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.spacing12} 0px;
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
