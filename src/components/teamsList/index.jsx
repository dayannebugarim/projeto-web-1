import { useEffect, useState, useRef } from "react";
import getData from "../../services/api";
import {
  TeamsContainer,
  TeamContainer,
  TeamInfoContainer,
  TeamLogo,
  TeamName,
  DetailsButton,
} from "./styles";
import TeamDetails from "../teamDetails";

export default function TeamsList({ data }) {
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

      {open && <TeamDetails open={open} setOpen={setOpen} data={data} />}
    </>
  );
}
