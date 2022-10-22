import React, { useEffect } from "react";
import styled from "styled-components";
import { CopyToCLipBoard } from "../../components";

const Hex2Rgba = (props) => {
  const { setToastActive } = props;
  const [value, setValue] = React.useState("#4D96FF");
  const [result, setResult] = React.useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setToastActive(true);
  };

  useEffect(() => {
    const hex = value.replace("#", "");
    var r = parseInt(
      hex.length == 3 ? hex.slice(0, 1).repeat(2) : hex.slice(0, 2),
      16
    );
    var g = parseInt(
      hex.length == 3 ? hex.slice(1, 2).repeat(2) : hex.slice(2, 4),
      16
    );
    var b = parseInt(
      hex.length == 3 ? hex.slice(2, 3).repeat(2) : hex.slice(4, 6),
      16
    );
    if (!r || !g || !b || hex.length > 6) {
      setResult("Invalid Hex Code");
    } else {
      setResult("rgba(" + r + ", " + g + ", " + b + ", 1)");
    }
  }, [value]);

  return (
    <WrapperContainer>
      <h4>hex to rgba Convertor</h4>
      <Row>
        <p>hex</p>
        <InputBox value={value} onChange={(e) => setValue(e.target.value)} />
      </Row>
      <Result>
        <p>CONVERTED</p>
        <ResultText>
          <p>{result}</p>
          <CopyToCLipBoard onClick={handleCopy} />
        </ResultText>
        <Divider />
        <p>PREVIEW</p>
        <ResultBox result={result} />
      </Result>
    </WrapperContainer>
  );
};

export default Hex2Rgba

const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  gap: 24px;

  h4 {
    font-size: 20px;
    letter-spacing: 1px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  p {
    font-size: 16px;
    letter-spacing: 1px;
    color: #fff;
  }
`;

const InputBox = styled.input.attrs((props) => ({
  // we can define static props
  type: "text",

  // or we can define dynamic ones
  size: props.size || "1em",
}))`
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  outline: none;
  border-radius: 6px;
  font-size: 1em;
  text-align: center;
  width: 200px;
  height: 48px;
`;

const Result = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  gap: 10px;
  border-radius: 8px;
  margin-top: 32px;
`;

const ResultBox = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 12px;
  background: ${(props) => props.result};
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.5);
  margin: 10px 0;
`;

const ResultText = styled.p`
  font-size: 20px;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 20px;
`;
