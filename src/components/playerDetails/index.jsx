import { useEffect, useState, useRef } from "react";
import getData from "../../services/api";
import ArrowBackIcon from "../../assets/icons/arrow-left.svg";
import {
  Container,
  PlayerDetailsContainer,
  HeaderContainer,
  CloseButton,
  PlayerImg,
  InfoContainer,
  PlayerName,
  DescriptionsContainer,
  DescriptionContainer,
  DescriptionTitle,
  DescriptionValue,
  PlayerStatsContainer,
  StatsCell,
  StatsTitle,
  StatsValue,
} from "./styles";

const positions = {
  Goalkeeper: "Goleiro",
  Defender: "Defesa",
  Attacker: "Ataque",
  Midfielder: "Meio-campo",
};

export default function PlayerDetails({ open, setOpen, playerId, teamId }) {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   getData("players", {
  //     id: playerId,
  //     team: teamId,
  //     league: "71",
  //     season: "2023",
  //   })
  //     .then((response) => setData(response.data.response[0]))
  //     .catch((error) => console.log(error));
  // }, [playerId, teamId]);
  // console.log(data);

  return (
    <>
      {/* {data?.player && (
        <Container open={open}>
          <PlayerDetailsContainer>
            <HeaderContainer>
              <CloseButton onClick={() => setOpen(false)}>
                <img src={ArrowBack} alt="" />
              </CloseButton>
              <PlayerImg src={data.player.photo} />
              <InfoContainer>
                <PlayerName>{data.player.name}</PlayerName>
                <DescriptionsContainer>
                  <DescriptionContainer>
                    <DescriptionTitle>Idade</DescriptionTitle>
                    <DescriptionValue>{data.player.age}</DescriptionValue>
                  </DescriptionContainer>
                  <DescriptionContainer>
                    <DescriptionTitle>Posição</DescriptionTitle>
                    <DescriptionValue>
                      {positions[data.statistics[0].games.position]}
                    </DescriptionValue>
                  </DescriptionContainer>
                </DescriptionsContainer>
              </InfoContainer>
            </HeaderContainer>
            <PlayerStatsContainer>
              <StatsCell>
                <StatsTitle>Aparições</StatsTitle>
                <StatsValue>
                  {data.statistics[0].games.appearences || "0"}
                </StatsValue>
              </StatsCell>
              <StatsCell>
                <StatsTitle>Gols</StatsTitle>
                <StatsValue>{data.statistics[0].goals.total || "0"}</StatsValue>
              </StatsCell>
              <StatsCell>
                <StatsTitle>Assistências</StatsTitle>
                <StatsValue>
                  {data.statistics[0].goals.assists || "0"}
                </StatsValue>
              </StatsCell>
              <StatsCell>
                <StatsTitle>Cartões Amarelos</StatsTitle>
                <StatsValue>
                  {data.statistics[0].cards.yellow || "0"}
                </StatsValue>
              </StatsCell>
            </PlayerStatsContainer>
          </PlayerDetailsContainer>
        </Container>
      )} */}

      <Container open={open}>
        <PlayerDetailsContainer>
          <HeaderContainer>
            <CloseButton onClick={() => setOpen(false)}>
              <img src={ArrowBackIcon} alt="" />
            </CloseButton>
            <PlayerImg src="https://media-2.api-sports.io/football/players/10351.png" />
            <InfoContainer>
              <PlayerName>David Duarte</PlayerName>
              <DescriptionsContainer>
                <DescriptionContainer>
                  <DescriptionTitle>Idade</DescriptionTitle>
                  <DescriptionValue>28</DescriptionValue>
                </DescriptionContainer>
                <DescriptionContainer>
                  <DescriptionTitle>Posição</DescriptionTitle>
                  <DescriptionValue>Defesa</DescriptionValue>
                </DescriptionContainer>
              </DescriptionsContainer>
            </InfoContainer>
          </HeaderContainer>
          <PlayerStatsContainer>
            <StatsCell>
              <StatsTitle>Aparições</StatsTitle>
              <StatsValue>3</StatsValue>
            </StatsCell>
            <StatsCell>
              <StatsTitle>Gols</StatsTitle>
              <StatsValue>1</StatsValue>
            </StatsCell>
            <StatsCell>
              <StatsTitle>Assistências</StatsTitle>
              <StatsValue>0</StatsValue>
            </StatsCell>
            <StatsCell>
              <StatsTitle>Cartões Amarelos</StatsTitle>
              <StatsValue>0</StatsValue>
            </StatsCell>
          </PlayerStatsContainer>
        </PlayerDetailsContainer>
      </Container>
    </>
  );
}
