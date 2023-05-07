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

export default function TeamsCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData("teams", {
      league: "71", //variavel
      season: "2023",
      country: "Brazil",
    })
      .then((response) => setData(response.data.response))
      .catch((error) => console.log(error));
  }, []);
  console.log(data);

  return (
    <>
      <CardContainer>
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
      </CardContainer>
    </>
  );
}
