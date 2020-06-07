import React, { useState, useEffect } from "react";
import * as S from "./styles";
import StarshipCard from "../../components/StarshipCard";
import { StarshipsService, MgltCalcService } from "../../services";

const MainPage = () => {
  const [distance, setDistance] = useState("");
  const [starships, setStarships] = useState([]);

  // useEffect(() => {}, []);

  const handleButton = () => {
    const dataStarShips = StarshipsService.findAll();
    const calculateData = dataStarShips.results.map((starship) => {
      const stops = MgltCalcService.calculateStopsByDistance(
        distance,
        starship.MGLT,
        starship.consumables
      );
      return { ...starship, stops };
    });
    setStarships(calculateData);
  };

  const handleMgltInput = (event) => {
    setDistance(event.target.value);
  };

  return (
    <S.PageWrapper>
      <S.FormWrapper>
        <S.FormTitle>MGLT Stops Calculator</S.FormTitle>
        <S.InputWrapper>
          <S.InputLabel>Enter your distance</S.InputLabel>
          <S.InputRow>
            <S.Input
              type="text"
              placeholder="Distance in mega lights"
              onChange={handleMgltInput}
              value={distance}
            />
            <S.Button onClick={handleButton}>Search</S.Button>
          </S.InputRow>
        </S.InputWrapper>
      </S.FormWrapper>
      <S.ResultWrapper>
        <S.ResultHeaderWrapper>
          <S.ResultInput type="text" placeholder="Search by name" />
          <div>
            <S.ResultTitle>{starships.length}</S.ResultTitle>
            <S.ResultTitle>Results</S.ResultTitle>
          </div>
        </S.ResultHeaderWrapper>
        {starships.map((starship) => (
          <StarshipCard key={starship.url} infos={starship} />
        ))}
      </S.ResultWrapper>
    </S.PageWrapper>
  );
};

export default MainPage;
