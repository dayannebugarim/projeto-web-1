import { useEffect, useState } from "react";
import getData from "../../services/api";
import {
  Container,
  TeamDetailsContainer,
  TeamHeader,
  CloseButton,
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

export default function TeamDetails({ open, setOpen, data }) {
  const [playersData, setPlayersData] = useState([]);
  const [playerId, setPlayerId] = useState("");
  const [openDetails, setOpenDetails] = useState(false);

  useEffect(() => {
    getData("players", {
      team: data.team.id,
      league: "71",
      season: "2023",
    })
      .then((response) => setPlayersData(response.data.response))
      .catch((error) => console.log(error));
  }, [data.team.id]);
  console.log(data);

  return (
    <>
      <Container open={open} openDetails={openDetails}>
        <TeamDetailsContainer>
          <TeamHeader>
            <CloseButton onClick={() => setOpen(false)}>X</CloseButton>
            <TeamLogo src={data.team.logo} />
            <TeamName>{data.team.name}</TeamName>
            <TeamFoundation>{data.team.founded}</TeamFoundation>
          </TeamHeader>
          <LeagueContainer>
            <LeagueLogo src="https://picsum.photos/20" />
            <LeagueName>Série A</LeagueName>
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

          <TeamStats teamId={data.team.id} />
        </TeamDetailsContainer>

        {openDetails && (
          <PlayerDetails
            open={openDetails}
            setOpen={setOpenDetails}
            playerId={playerId}
            teamId={data.team.id}
          />
        )}
      </Container>
    </>
  );
}
