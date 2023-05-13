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
import TeamsList from "../teamsList";
import SoccerBallIcon from "../../assets/icons/soccer-ball.svg";

export default function TeamsCard({ leagueId }) {
  let teste = [];

  for (let i = 0; i < 20; i++) {
    teste.push(i);
  }
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   getData("teams", {
  //     league: leagueId, //variavel
  //     season: "2023",
  //     country: "Brazil",
  //   })
  //     .then((response) => setData(response.data.response))
  //     .catch((error) => console.log(error));
  // }, [leagueId]);
  // console.log(data);

  return (
    <>
      {/* <CardContainer>
        <CardHeader>
          <CardTitleContainer>
            <CardIcon />
            <CardTitle>Times</CardTitle>
          </CardTitleContainer>
          <CardOptions>
            <CardViewAll href="*">Ver Todos</CardViewAll>
          </CardOptions>
        </CardHeader>
        <CardBody>
            {data.map((d) => (
              <TeamsList key={d.team.id} data={d} />
            ))}
        </CardBody>
      </CardContainer> */}

      <CardContainer>
        <CardHeader>
          <CardTitleContainer>
            <CardIcon src={SoccerBallIcon} />
            <CardTitle>Times</CardTitle>
          </CardTitleContainer>
        </CardHeader>
        <CardBody>
          {teste.map((i) => (
            <TeamsList key={i} leagueId={leagueId} />
          ))}
        </CardBody>
      </CardContainer>
    </>
  );
}
