import { useEffect, useRef, useState } from "react";
import getData from "../../services/api";
import {
  StatsContainer,
  BarContainer,
  WinsBar,
  DrawsBar,
  LossesBar,
  StatsInfoContainer,
  InfoContainer,
  InfoTitle,
  InfoValue,
} from "./styles";

export default function TeamStats({ teamId }) {
  const [data, setData] = useState([]);
  const [wins, setWins] = useState("0");
  const [draws, setDraws] = useState("0");
  const [loses, setLoses] = useState("0");

  useEffect(() => {
    getData("teams/statistics", {
      league: "71",
      season: "2023",
      team: teamId,
    })
      .then((response) => setAllData(response.data.response))
      .catch((error) => console.log(error));

    function setAllData(d) {
      setData(d);
      setWins(percentage(d.fixtures.wins.total, d));
      setDraws(percentage(d.fixtures.draws.total, d));
      setLoses(percentage(d.fixtures.loses.total, d));
    }
  }, [teamId]);

  console.log("stats");
  console.log(data);

  function percentage(value, d) {
    const total = d.fixtures.played.total;

    return `${(value / total) * 100}%`;
  }

  return (
    <>
      {data?.fixtures && (
        <StatsContainer>
          <BarContainer>
            <WinsBar style={{ width: wins }}></WinsBar>
            <DrawsBar style={{ width: draws }}></DrawsBar>
            <LossesBar style={{ width: loses }}></LossesBar>
          </BarContainer>
          <StatsInfoContainer>
            <InfoContainer>
              <InfoTitle>Jogos</InfoTitle>
              <InfoValue>{data.fixtures.played.total}</InfoValue>
            </InfoContainer>
            <InfoContainer>
              <InfoTitle>Vitórias</InfoTitle>
              <InfoValue>{data.fixtures.wins.total}</InfoValue>
            </InfoContainer>
            <InfoContainer>
              <InfoTitle>Empates</InfoTitle>
              <InfoValue>{data.fixtures.draws.total}</InfoValue>
            </InfoContainer>
            <InfoContainer>
              <InfoTitle>Derrotas</InfoTitle>
              <InfoValue>{data.fixtures.loses.total}</InfoValue>
            </InfoContainer>
          </StatsInfoContainer>
        </StatsContainer>
      )}
    </>
  );
}
