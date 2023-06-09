import { useState } from "react";
import {
  TeamsContainer,
  TeamContainer,
  TeamInfoContainer,
  TeamLogoContainer,
  TeamLogo,
  TeamName,
  DetailsButton,
} from "./styles";
import TeamDetails from "../teamDetails";

export default function TeamsList({ data, leagueId }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TeamsContainer>
        <TeamContainer key={data.team.id}>
          <TeamInfoContainer>
            <TeamLogo src={data.team.logo} />
            <TeamName>{data.team.name}</TeamName>
          </TeamInfoContainer>
          <DetailsButton onClick={() => setOpen(true)}>Ver mais</DetailsButton>
        </TeamContainer>
      </TeamsContainer>

      {open && (
        <TeamDetails
          open={open}
          setOpen={setOpen}
          leagueId={leagueId}
          data={data}
        />
      )}

      {/* <TeamsContainer>
        <TeamContainer>
          <TeamInfoContainer>
            <TeamLogoContainer>
              <TeamLogo src="https://media-2.api-sports.io/football/teams/118.png" />
            </TeamLogoContainer>
            <TeamName>Bahia</TeamName>
          </TeamInfoContainer>
          <DetailsButton onClick={() => setOpen(true)}>Ver mais</DetailsButton>
        </TeamContainer>
      </TeamsContainer>

      {open && <TeamDetails open={open} setOpen={setOpen} leagueId={leagueId} />} */}
    </>
  );
}
