import styled from "styled-components";

const IconButton = (props) => {
  const { children, onClick = () => {} } = props;
  return <ButtonWrap onClick={onClick}>{children}</ButtonWrap>;
};

const ButtonWrap = styled.div`
  width: 48px;
  height: 48px;
  background: #ffffff;
  border: 2px solid #000000;
  box-shadow: 4px 4px 0px #000000;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 24px;
`;

export default IconButton;
