import styled from "styled-components";
import React from "react";

const FontInputBox = (props) => {
  const { value, onChange } = props;
  return (
    <InputContain>
      <InputBox value={value} onChange={onChange} />
      <Text>px</Text>
    </InputContain>
  );
};

export default FontInputBox;

const InputContain = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
`;

const Text = styled.p`
  color: #fff;
`;

const InputBox = styled.input.attrs((props) => ({
  // we can define static props
  type: "number",

  // or we can define dynamic ones
  size: props.size || "1em",
}))`
  color: #fff;
  background: transparent;
  outline: none;
  border: none;
  border-radius: 6px;
  font-size: 1em;
  text-align: center;
  width: 56px;
  height: 28px;
`;
