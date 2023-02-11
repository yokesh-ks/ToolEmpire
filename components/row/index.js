import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${(props) => props.gap || "10px"};
`;

export default Row;
