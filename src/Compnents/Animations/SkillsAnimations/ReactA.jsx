import React from "react";
import styled, { keyframes } from "styled-components";

const ReactA = () => {
  return (
    <Wrapper className="skills__container__item">
      <i class="skills__container__item__icon fab fa-react fa-spin"></i>
      <p class="skills__container__item__desc">React</p>
    </Wrapper>
  );
};
const moveInDown = keyframes`
    0% {
    opacity: 0;
    transform: translateY(-110rem);
    }

    100% {
    opacity: 1;
    transform: translateY(0);
    }`;

const Wrapper = styled.div`
  animation: ${moveInDown} 1.6s ease-in 1.1s both;
`;

export default ReactA;
