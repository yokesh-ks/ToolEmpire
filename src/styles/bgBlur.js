import styled from "styled-components";

export const BgGradient = styled.div`
  ${({ size, color }) => `
    position: absolute;
    height: ${size};
    width: ${size};
    background: ${color};
    border-radius: 50%;
    filter: blur(100px);
    z-index: -10;
`}
`;

// ${isLeft && `left: ${`calc(${size} / -1.5)`}`};
// ${isTop && `top: ${`calc(${size} / -1.5)`}`};
// ${isRight && `right: ${`calc(${size} / 1.5)`}`};
// ${isBottom && `bottom: ${`calc(${size} / -1.5)`}`};
