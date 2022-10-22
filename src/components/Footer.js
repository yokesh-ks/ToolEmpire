import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        Made with <span>&hearts;</span> by Yokesh
      </FooterText>
    </FooterContainer>
  );
}

export default Footer

const FooterContainer = styled.div`
  position: absolute;
  background: rgba(35, 60, 115, 0.3);
  height: 60px;
  width: 100vw;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterText = styled.p`
  color: white;
  font-size: 18px;

  span {
    color: red;
  }
`;
