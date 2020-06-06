import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  width: 100%;
  height: 2em;
  background-color: #000;
`;

const Title = styled.h1`
  color: #fff;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Title>MGLT Stops calculator</Title>
    </HeaderWrapper>
  );
};

export default Header;
