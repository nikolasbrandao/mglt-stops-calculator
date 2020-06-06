import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.5em 0;
  background-color: ${({ theme }) => theme.secondaryFontColor};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.secondaryColor};
  font-size: 2em;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Title>SWAPP</Title>
    </HeaderWrapper>
  );
};

export default Header;
