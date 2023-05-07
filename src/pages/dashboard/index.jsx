import { useEffect, useState } from "react";
import getData from "../../services/api";

export default function Dashboard() {
  //   const [teams, setTeams] = useState({});
  //   const [goals, setGoals] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    getData("fixtures", { live: "all" })
      .then((response) => setData([response.data.response[0]]))
      .catch((error) => console.log(error));
  }, []);
  console.log(data);

  return (
    <>
      {data.map((f) => (
        <div key={f.fixture.id}>
          <div>
            <img src={f.teams.away.logo} alt="" />
            <h2>{f.teams.away.name}</h2>
            <h1>{f.goals.away}</h1>
          </div>
          vs
          <div>
            <img src={f.teams.home.logo} alt="" />
            <h2>{f.teams.home.name}</h2>
            <h1>{f.goals.home}</h1>
          </div>
        </div>
      ))}
    </>
  );
}
