import styled from "styled-components";
import { Icon } from "../../icons";

const IconButton = (props) => {
  const { onClick = () => {}, name } = props;
  return (
    <ButtonWrap onClick={onClick}>
      <Icon name={name} width={28} height={28} />
    </ButtonWrap>
  );
};

const ButtonWrap = styled.div`
  width: 48px;
  height: 48px;
  background: ${({ theme }) => theme.colors.background};
  border: 2px solid ${({ theme }) => theme.colors.onNeutral};
  box-shadow: 4px 4px 0px ${({ theme }) => theme.colors.onNeutral};
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: ${({ theme }) => theme.spacing.spacing6};
`;

export default IconButton;
