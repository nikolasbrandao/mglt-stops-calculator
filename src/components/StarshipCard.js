import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.secondaryColor};
  border: 1px solid ${({ theme }) => theme.bgColor};
  border-radius: 0.4em;
  margin: 1em;
  padding: 1em 0.2em;
  box-shadow: 1px 1px 8px 0px rgba(50, 50, 50, 0.75);
  -webkit-box-shadow: 1px 1px 8px 0px rgba(50, 50, 50, 0.75);
  -moz-box-shadow: 1px 1px 8px 0px rgba(50, 50, 50, 0.75);
`;

const StopsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  align-items: center;
  justify-content: flex-end;
`;

const InfosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  align-items: flex-end;
  justify-content: flex-start;
`;

const DetailsWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.p`
  text-align: right;
  font-size: 1.2em;
  color: ${({ theme }) => theme.bgColor};
  font-weight: 500;
  margin-bottom: 0.5em;
`;

const ModelDetail = styled.p`
  text-align: right;
  font-size: 1em;
  color: ${({ theme }) => theme.bgColor};
  font-weight: 300;
  margin-bottom: 0.4em;
`;

const LabelDetail = styled.label`
  display: block;
  font-size: 0.5em;
  color: ${({ theme }) => theme.bgColor};
  font-weight: 500;
  margin-bottom: 0.2em;
`;

const StopsTitle = styled.label`
  text-align: center;
  display: block;
  font-size: 2.5em;
  color: ${({ theme }) => theme.bgColor};
  font-weight: 500;
  margin-bottom: 0.1em;
`;

const StopsSubTitle = styled.p`
  text-align: center;
  display: block;
  color: ${({ theme }) => theme.bgColor};
  font-weight: 500;
`;

const Card = ({ infos: starship }) => (
  <CardWrapper>
    <InfosWrapper>
      <Title>
        <LabelDetail>Name</LabelDetail>
        {starship.name}
      </Title>
      <ModelDetail>
        <LabelDetail>Model</LabelDetail>
        {starship.model}
      </ModelDetail>

      <DetailsWrapper>
        <StopsWrapper>
          <StopsTitle>{starship.stops || 0}</StopsTitle>
          <StopsSubTitle>Stops</StopsSubTitle>
        </StopsWrapper>
        <div>
          <ModelDetail>
            <LabelDetail>Class</LabelDetail>
            {starship.starship_class}
          </ModelDetail>
          <ModelDetail>
            <LabelDetail>MGLT/Hour</LabelDetail>
            {starship.MGLT}
          </ModelDetail>
          <ModelDetail>
            <LabelDetail>Consumables capacity</LabelDetail>
            {starship.consumables}
          </ModelDetail>
        </div>
      </DetailsWrapper>
    </InfosWrapper>
  </CardWrapper>
);

export default Card;
