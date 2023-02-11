import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ gap }) => gap || "10px"};
`;

export default Row;
