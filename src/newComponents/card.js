import styled from "styled-components";

const Card = styled.div`
  background: ${(props) =>
    props.theme.colors[props.colorVariant] || props.theme.colors.colorName};
  border-radius: 8px;
  box-shadow: 2px 2px 4px #000000;
  border: 2px solid #000000;
`;

export default Card;
