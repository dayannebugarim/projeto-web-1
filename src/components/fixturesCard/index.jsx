import { useState } from "react";
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
import FixturesList from "../fixturesList";
import CalendarIcon from "../../assets/icons/calendar.svg";

export default function FixturesCard({ leagueId }) {
  const today = new Date().toISOString().substring(0, 10);
  const [date, setDate] = useState(today);

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
          <FixturesList leagueId={leagueId} date={date} />
        </CardBody>
      </CardContainer>
    </>
  );
}
