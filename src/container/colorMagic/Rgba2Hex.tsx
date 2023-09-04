import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Input } from "@/components/ui/input";

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

    // Extract the red, green, blue, and alpha values from the match and convert to numbers
    let [, r, g, b, a] = match.map(Number);

    // Convert the RGBA values to hexadecimal
    const rHex = r.toString(16).padStart(2, "0");
    const gHex = g.toString(16).padStart(2, "0");
    const bHex = b.toString(16).padStart(2, "0");

    // If the alpha value is less than 1, set the result to "Transparent"
    if (a < 1) {
      setResult("Transparent");
    } else {
      // Otherwise, set the result to the hexadecimal color code
      setResult(`#${rHex}${gHex}${bHex}`);
    }
  }, [value, setResult]);

  return (
    <Container backgroundColor={result}>
      <div>
        <div>
          <h1>RGBA</h1>
          <Input
            width="300px"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          Copy
        </div>

        <div>
          <h1>Hex</h1>
          <Input width="300px" value={result} />
          Copy
        </div>
      </div>
    </Container>
  );
};

export default Rgba2Hex;

const Container = styled.div`
  width: 100%;
  background: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;
