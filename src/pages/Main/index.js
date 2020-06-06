import React from "react";
import * as S from "./styles";

const MainPage = () => (
  <S.PageWrapper>
    <S.FormWrapper>
      <S.FormTitle>MGLT Stops Calculator</S.FormTitle>
      <S.InputWrapper>
        <S.InputLabel>Enter your distance</S.InputLabel>
        <S.InputRow>
          <S.Input type="text" placeholder="Distance in mega lights" />
          <S.Button>Search</S.Button>
        </S.InputRow>
      </S.InputWrapper>
    </S.FormWrapper>
    <S.ResultWrapper>
      <S.ResultHeaderWrapper>
        <S.ResultInput type="text" placeholder="Search by name" />
        <S.ResultTitle>Results</S.ResultTitle>
      </S.ResultHeaderWrapper>
      <div>
        <ul>
          <li>Name</li>
          <li>Model</li>
          <li>Class</li>
          <li>Stops</li>
        </ul>
      </div>
    </S.ResultWrapper>
  </S.PageWrapper>
);

export default MainPage;
