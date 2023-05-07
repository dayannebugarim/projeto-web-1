import { useEffect, useState } from "react";
import getData from "../../services/api";
import {
  CardContainer,
  CardHeader,
  CardIcon,
  CardTitle,
  CardOptions,
  CardDateInput,
  CardViewAll,
  CardBody,
  CardTitleContainer,
} from "./styles";
import MatchesList from "../matchesList";

export default function MatchesCard() {
  const today = new Date().toISOString().substring(0, 10);
  const [date, setDate] = useState(today);
  console.log(date);

  return (
    <>
      <CardContainer>
        <CardHeader>
          <CardTitleContainer>
            <CardIcon />
            <CardTitle>Partidas</CardTitle>
          </CardTitleContainer>
          <CardOptions>
            <CardDateInput
              onChange={(e) => setDate(e.target.value)}
              type="date"
              value={date}
            />
            <CardViewAll href="*">Ver Todas</CardViewAll>
          </CardOptions>
        </CardHeader>
        <CardBody>
            <MatchesList date={date} />
        </CardBody>
      </CardContainer>
    </>
  );
}
