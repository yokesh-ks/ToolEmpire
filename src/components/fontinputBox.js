import styled from "styled-components";

export const InputBox = styled.input.attrs((props) => ({
  // we can define static props
  type: "number",

  // or we can define dynamic ones
  size: props.size || "1em",
}))`
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
  outline: none;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 6px;
  font-size: 1em;
  text-align: center;
  width: 60px;
  height: 28px;
`;
