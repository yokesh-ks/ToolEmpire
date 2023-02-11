import styled from "styled-components";

const Input = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "1em",
}))`
  background: #ffffff;
  border: 2px solid #000000;
  box-shadow: 2px 2px 4px #000000;
  border-radius: 8px;
  color: #000000;
  outline: none;
  border-radius: 6px;
  font-size: 1em;
  text-align: center;
  width: ${(props) => props.width || "200px"};
  height: 48px;
`;

export default Input;
