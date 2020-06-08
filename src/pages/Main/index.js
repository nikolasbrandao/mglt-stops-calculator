import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as S from "./styles";
import StarshipCard from "../../components/StarshipCard";
import { StarshipsService, MgltCalcService } from "../../services";
import { addStarships } from "../../redux/Starships";

const MainPage = () => {
  const [inputDistance, setInputDistance] = useState("");
  const [mlgtSearch, setMlgtSearch] = useState("");
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMessage, setLoadingMessage] = useState("Load all Startships");
  const starShipList = useSelector((state) => state.starshipsReducer);
  const dispatch = useDispatch();

  const getStarships = async () => {
    const dataStarShips = await StarshipsService.findAll();
    dispatch(addStarships(dataStarShips));
  };

  useEffect(() => {
    if (starShipList.length === 0) {
      getStarships();
    }
    setLoading(false);
  }, [getStarships, starShipList.length]);

  const handleButton = () => {
    if (loading) {
      return;
    } else {
      setLoading(true);
      setLoadingMessage("Calculate stops");
      const calculateData = starShipList.map((starship) => {
        const stops = MgltCalcService.calculateStopsByDistance(
          inputDistance,
          starship.MGLT,
          starship.consumables
        );
        console.log({ ...starship, stops });
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
          <S.ResultBodyWrapper>
            {starships.map((starship) => (
              <StarshipCard key={starship.url} infos={starship} />
            ))}
          </S.ResultBodyWrapper>
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
