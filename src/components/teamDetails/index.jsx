import { useEffect, useState } from "react";
import { getPlayersByTeam } from "../../services/api";
import {
  Background,
  Container,
  TeamDetailsContainer,
  TeamHeader,
  CloseButton,
  TeamLogoContainer,
  TeamLogo,
  TeamName,
  TeamFoundation,
  LeagueContainer,
  LeagueLogo,
  LeagueName,
  TeamContainer,
  Divider,
  PlayersContainer,
} from "./styles";
import PlayerCard from "../playerCard";
import TeamStats from "../teamStats";
import PlayerDetails from "../playerDetails";
import ArrowLeftIcon from "../../assets/icons/arrow-left.svg";
import { leagueName } from "../../utils/dataTypes";

export default function TeamDetails({ open, setOpen, data, leagueId }) {
  const [playersData, setPlayersData] = useState([]);
  const [playerId, setPlayerId] = useState("");
  const [openDetails, setOpenDetails] = useState(false);

  useEffect(() => {
    getPlayersByTeam(data.team.id, leagueId)
      .then((response) => setPlayersData(response.data.response))
      .catch((error) => console.log(error));
  }, [data.team.id, leagueId]);
  console.log(data);

  return (
    <>
      <Background open={open}>
        <Container open={open} openDetails={openDetails}>
          <TeamDetailsContainer>
            <TeamHeader>
              <CloseButton onClick={() => setOpen(false)}>
                <img src={ArrowLeftIcon} />
              </CloseButton>
              <TeamLogoContainer>
                <TeamLogo src={data.team.logo} />
              </TeamLogoContainer>
              <TeamName>{data.team.name}</TeamName>
              <TeamFoundation>{data.team.founded}</TeamFoundation>
            </TeamHeader>
            <LeagueContainer>
              <LeagueLogo
                src={`https://media-3.api-sports.io/football/leagues/${leagueId}.png`}
              />
              <LeagueName>{leagueName[leagueId]}</LeagueName>
            </LeagueContainer>
            <TeamContainer key={data.team.id}>
              <Divider>Time</Divider>
              <PlayersContainer>
                {playersData.map((p, index) => (
                  <PlayerCard
                    key={p.player.id}
                    setPlayerId={setPlayerId}
                    setOpenDetails={setOpenDetails}
                    data={playersData[index]}
                  />
                ))}
              </PlayersContainer>
            </TeamContainer>

            <TeamStats teamId={data.team.id} leagueId={leagueId} />
          </TeamDetailsContainer>

          {openDetails && (
            <PlayerDetails
              open={openDetails}
              setOpen={setOpenDetails}
              playerId={playerId}
              teamId={data.team.id}
              leagueId={leagueId}
            />
          )}
        </Container>
      </Background>

      {/* <Background open={open}>
        <Container open={open} openDetails={openDetails}>
          <TeamDetailsContainer>
            <TeamHeader>
              <CloseButton onClick={() => setOpen(false)}>
                <img src={ArrowLeftIcon} />
              </CloseButton>
              <TeamLogoContainer>
                <TeamLogo src="https://media-2.api-sports.io/football/teams/118.png" />
              </TeamLogoContainer>
              <TeamName>Bahia</TeamName>
              <TeamFoundation>1931</TeamFoundation>
            </TeamHeader>
            <LeagueContainer>
              <LeagueLogo
                src={`https://media-3.api-sports.io/football/leagues/${leagueId}.png`}
              />
              <LeagueName>{leagueName[leagueId]}</LeagueName>
            </LeagueContainer>
            <TeamContainer>
              <Divider>Time</Divider>
              <PlayersContainer>
                <PlayerCard
                  setPlayerId={setPlayerId}
                  setOpenDetails={setOpenDetails}
                />
                <PlayerCard
                  setPlayerId={setPlayerId}
                  setOpenDetails={setOpenDetails}
                />
                <PlayerCard
                  setPlayerId={setPlayerId}
                  setOpenDetails={setOpenDetails}
                />
                <PlayerCard
                  setPlayerId={setPlayerId}
                  setOpenDetails={setOpenDetails}
                />
                <PlayerCard
                  setPlayerId={setPlayerId}
                  setOpenDetails={setOpenDetails}
                />
                <PlayerCard
                  setPlayerId={setPlayerId}
                  setOpenDetails={setOpenDetails}
                />
                <PlayerCard
                  setPlayerId={setPlayerId}
                  setOpenDetails={setOpenDetails}
                />
                <PlayerCard
                  setPlayerId={setPlayerId}
                  setOpenDetails={setOpenDetails}
                />
                <PlayerCard
                  setPlayerId={setPlayerId}
                  setOpenDetails={setOpenDetails}
                />
                <PlayerCard
                  setPlayerId={setPlayerId}
                  setOpenDetails={setOpenDetails}
                />
                <PlayerCard
                  setPlayerId={setPlayerId}
                  setOpenDetails={setOpenDetails}
                />
              </PlayersContainer>
            </TeamContainer>

            <TeamStats teamId="1" />
          </TeamDetailsContainer>
          {openDetails && (
            <PlayerDetails
              open={openDetails}
              setOpen={setOpenDetails}
              playerId="1"
              teamId="1"
            />
          )}
        </Container>
      </Background> */}
    </>
  );
}
