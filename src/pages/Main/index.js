import React, { useState, useEffect } from "react";
import * as S from "./styles";
import StarshipCard from "../../components/StarshipCard";
import { StarshipsService, MgltCalcService } from "../../services";

const MainPage = () => {
  const [inputDistance, setInputDistance] = useState("");
  const [mlgtSearch, setMlgtSearch] = useState("");
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMessage, setLoadingMessage] = useState("Load all Startships");

  const getAllData = async () => {
    const dataStarShips = await StarshipsService.findAll();
    setLoading(false);
    setStarships(dataStarShips);
  };

  useEffect(() => {
    getAllData();
  }, []);

  const handleButton = () => {
    if (loading) {
      return;
    } else {
      setLoading(true);
      setLoadingMessage("Calculate stops");
      const calculateData = starships.map((starship) => {
        const stops = MgltCalcService.calculateStopsByDistance(
          inputDistance,
          starship.MGLT,
          starship.consumables
        );
        return { ...starship, stops };
      });

      setStarships(calculateData);
      setMlgtSearch(inputDistance);
      setLoadingMessage("");
      setInputDistance("");
      setLoading(false);
    }
  };

  const handleMgltInput = (event) => {
    const mglt = event.target.value;
    setInputDistance(mglt);
  };

  const renderResult = () => {
    if (mlgtSearch) {
      return (
        <>
          <S.ResultHeaderWrapper>
            <S.ResultTitle>
              {Number.parseInt(mlgtSearch || 0).toLocaleString()}
            </S.ResultTitle>
            <S.ResultTitle>Distance search</S.ResultTitle>
          </S.ResultHeaderWrapper>
          {starships.map((starship) => (
            <StarshipCard key={starship.url} infos={starship} />
          ))}
        </>
      );
    }
    return <S.EmptyMessage>Define a distance to calculate</S.EmptyMessage>;
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
              value={inputDistance}
            />
            <S.Button onClick={handleButton}>Show</S.Button>
          </S.InputRow>
        </S.InputWrapper>
      </S.FormWrapper>
      <S.ResultWrapper>
        {loading ? (
          <S.LoadingWrapper>
            <S.LoadingIcon />
            <S.LoadingMessage>{loadingMessage}</S.LoadingMessage>
          </S.LoadingWrapper>
        ) : (
          renderResult()
        )}
      </S.ResultWrapper>
    </S.PageWrapper>
  );
};

export default MainPage;
