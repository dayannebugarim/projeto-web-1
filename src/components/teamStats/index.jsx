import { useEffect, useState } from "react";
import { getTeamStatsByLeague } from "../../services/api";
import {
  StatsContainer,
  BarContainer,
  WinsBar,
  DrawsBar,
  LossesBar,
  StatsInfoContainer,
  InfoContainerWithBorder,
  InfoContainer,
  InfoTitle,
  InfoValue,
} from "./styles";

export default function TeamStats({ teamId, leagueId }) {
  const [data, setData] = useState([]);
  const [wins, setWins] = useState("0");
  const [draws, setDraws] = useState("0");
  const [loses, setLoses] = useState("0");

  useEffect(() => {
    getTeamStatsByLeague(leagueId, teamId)
      .then((response) => setAllData(response.data.response))
      .catch((error) => console.log(error));

    const setAllData = (d) => {
      setData(d);
      setWins(percentage(d.fixtures.wins.total, d));
      setDraws(percentage(d.fixtures.draws.total, d));
      setLoses(percentage(d.fixtures.loses.total, d));
    };
  }, [teamId, leagueId]);

  const percentage = (value, d) => {
    const total = d.fixtures.played.total;

    return `${(value / total) * 100}%`;
  };

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

      {/* <StatsContainer>
        <BarContainer>
          <WinsBar style={{ width: "30%" }}></WinsBar>
          <DrawsBar style={{ width: "10%" }}></DrawsBar>
          <LossesBar style={{ width: "60%" }}></LossesBar>
        </BarContainer>
        <StatsInfoContainer>
          <InfoContainerWithBorder>
            <InfoTitle>Partidas</InfoTitle>
            <InfoValue>5</InfoValue>
          </InfoContainerWithBorder>
          <InfoContainer>
            <InfoTitle>Vitórias</InfoTitle>
            <InfoValue>2</InfoValue>
          </InfoContainer>
          <InfoContainer>
            <InfoTitle>Empates</InfoTitle>
            <InfoValue>1</InfoValue>
          </InfoContainer>
          <InfoContainer>
            <InfoTitle>Derrotas</InfoTitle>
            <InfoValue>3</InfoValue>
          </InfoContainer>
        </StatsInfoContainer>
      </StatsContainer> */}
    </>
  );
}
