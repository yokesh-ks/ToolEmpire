import React, { useState, useEffect } from "react";
import styled from "styled-components";
const Toast = (props) => {
  const { setToastActive, toastActive } = props;

  useEffect(() => {
    const interval = setInterval(() => {
      if (toastActive) {
        setToastActive(false);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [toastActive, setToastActive]);

  return (
    <NotificationContainer>
      <ToastItem>
        <CloseButton onClick={() => setToastActive(false)}>X</CloseButton>
        <ToastTitle>Link Copied to ClipBoard</ToastTitle>
      </ToastItem>
    </NotificationContainer>
  );
};

export default Toast;

const NotificationContainer = styled.div`
  font-size: 14px;
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  left: 25%;
  z-index: 1001;
`;

const ToastItem = styled.div`
  height: 50px;
  width: 365px;
  color: #fff;
  display: flex;
  gap: 12px;
  align-items: center;
  background-color: rgba(107, 203, 119, 0.7);
  border: 3px solid rgba(107, 203, 119, 1);
  padding: 20px;
  border-radius: 6px;
`;

const ToastTitle = styled.p`
  font-weight: 400;
  font-size: 16px;
`;

const CloseButton = styled.button`
  position: relative;
  font-weight: 400;
  color: #fff;
  outline: none;
  border: none;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.8;
  line-height: 1;
  font-size: 16px;
  padding: 0;
  cursor: pointer;
  background: 0 0;
  border: 0;
`;
