import { useEffect, useState } from "react";
import getData from "../../services/api";
import {
  CardContainer,
  CardHeader,
  CardIcon,
  CardTitle,
  CardOptions,
  CardDateInput,
  CardBody,
  CardTitleContainer,
} from "./styles";
import MatchesList from "../matchesList";
import CalendarIcon from "../../assets/icons/calendar.svg"

export default function MatchesCard({ leagueId }) {
  const today = new Date().toISOString().substring(0, 10);
  const [date, setDate] = useState(today);
  console.log(date);

  return (
    <>
      <CardContainer>
        <CardHeader>
          <CardTitleContainer>
            <CardIcon src={CalendarIcon} />
            <CardTitle>Próximas partidas</CardTitle>
          </CardTitleContainer>
          <CardOptions>
            <CardDateInput
              onChange={(e) => setDate(e.target.value)}
              type="date"
              value={date}
            />
          </CardOptions>
        </CardHeader>
        <CardBody>
            <MatchesList leagueId={leagueId} date={date} />
        </CardBody>
      </CardContainer>
    </>
  );
}
