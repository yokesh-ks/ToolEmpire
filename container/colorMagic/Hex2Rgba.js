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
          <Title>Hex</Title>
          <Input
            width="300px"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <IconButton name="CopyLink" onClick={() => copy(value)} />
        </Row>
        <Icon name="ArrowDown" width={23} height={30} />
        <Row>
          <Title>RGBA</Title>
          <Input width="300px" value={result} />
          <IconButton name="CopyLink" onClick={() => copy(result)} />
        </Row>
      </WrapperContainer>
    </Container>
  );
};

export default Hex2Rgba;

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
