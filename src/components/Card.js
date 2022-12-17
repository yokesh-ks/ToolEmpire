import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: #2b2b37;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 8px;

  h4 {
    font-size: 24px;
    font-weight: 400;
    color: #fff;
  }

  p {
    margin-top: 10px;
    margin-bottom: 20px;
    color: #fff;
  }

  &:hover {
    background: linear-gradient(330deg, #fff59a 20%, #ff6d6d 100%);
  }
`;

export default Card;
