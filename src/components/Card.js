import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: #ffffff;
  border: 2px solid #000000;
  box-shadow: 2px 2px 4px #000000;
  border-radius: 8px;
  padding: 20px 24px;
  cursor: pointer;
  h4 {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
  }

  p {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;

    color: #6e6d7a;
  }

  button {
    font-size: 12px;
    padding: 8px 16px;
    color: #ffffff;
    width: 100px;
    height: 31px;
    background: #0077ff;
    border: 2px solid #000000;
    box-shadow: 4px 4px 0px #000000;
    border-radius: 4px;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    margin-top: 32px;
    cursor: pointer;
  }
`;

export default Card;
