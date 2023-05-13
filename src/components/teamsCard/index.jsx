import { useEffect, useState } from "react";
import { getTeamsByLeague } from "../../services/api";
import {
  CardContainer,
  CardHeader,
  CardIcon,
  CardTitle,
  CardBody,
  CardTitleContainer,
} from "./styles";
import TeamsList from "../teamsList";
import SoccerBallIcon from "../../assets/icons/soccer-ball.svg";

export default function TeamsCard({ leagueId }) {
  // let teste = [];

  // for (let i = 0; i < 20; i++) {
  //   teste.push(i);
  // }
  const [data, setData] = useState([]);

  useEffect(() => {
    getTeamsByLeague(leagueId)
      .then((response) => setData(response.data.response))
      .catch((error) => console.log(error));
  }, [leagueId]);

  return (
    <>
      <CardContainer>
        <CardHeader>
          <CardTitleContainer>
            <CardIcon src={SoccerBallIcon} />
            <CardTitle>Times</CardTitle>
          </CardTitleContainer>
        </CardHeader>
        <CardBody>
          {data.map((d) => (
            <TeamsList key={d.team.id} leagueId={leagueId} data={d} />
          ))}
        </CardBody>
      </CardContainer>

      {/* <CardContainer>
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
      </CardContainer> */}
    </>
  );
}
