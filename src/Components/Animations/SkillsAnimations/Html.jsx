import React from "react";
import styled, { keyframes } from "styled-components";

const Html = () => {
  return (
    <Wrapper className="skills__container__item">
      <i className="skills__container__item__icon fab fa-html5"></i>
      <p className="skills__container__item__desc">HTML</p>
    </Wrapper>
  );
};
const moveInUp = keyframes`
    0% {
    opacity: 0;
    transform: translateY(15rem);
    }

    100% {
    opacity: 1;
    transform: translateY(0);
    }`;

const Wrapper = styled.div`
  animation: ${moveInUp} 0.8s ease-in 1.2s both; 
`;

export default Html;
