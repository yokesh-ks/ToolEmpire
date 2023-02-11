import styled from "styled-components";

const Input = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "1em",
}))`
  background: ${({ theme }) => theme.colors.background};
  border: 2px solid ${({ theme }) => theme.colors.onNeutral};
  box-shadow: 2px 2px 4px ${({ theme }) => theme.colors.onNeutral};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.onNeutral};
  outline: none;
  font-size: 1em;
  text-align: center;
  width: ${({ width }) => width || "200px"};
  height: 48px;
`;

export default Input;
