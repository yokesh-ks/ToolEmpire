import styled from "styled-components";
import React from "react";

const FontInputBox = (props) => {
  const { value, onChange } = props;
  return (
    <InputContain>
      <InputBox value={value} onChange={onChange} />
      <h3 style={{ color: "#000000" }}>px</h3>
    </InputContain>
  );
};

export default FontInputBox;

const InputContain = styled.div`
  background: #ffffff;
  box-shadow: 2px 2px 4px #000000;
  border-radius: 6px;
  width: 116px;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  border: 2px solid #000000;
`;

const InputBox = styled.input.attrs((props) => ({
  // we can define static props
  type: "number",

  // or we can define dynamic ones
  size: props.size || "1em",
}))`
  color: #000000;
  background: transparent;
  outline: none;
  border: none;
  border-radius: 6px;
  font-size: 1em;
  text-align: center;
  width: 56px;
  height: 28px;
  font-weight: 700;
`;
