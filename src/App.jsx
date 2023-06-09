import Banner from "./components/banner";
import FixturesCard from "./components/fixturesCard";
import TeamsCard from "./components/teamsCard";
import GlobalStyles from "./styles/global";
import { useState } from "react";

function App() {
  const [leagueId, setLeagueId] = useState("71");
  console.log(leagueId);

  return (
    <>
      <h1>Brasileirão</h1>
      <Banner leagueId={leagueId} setLeagueId={setLeagueId} />
      <div className="body-container">
        <FixturesCard leagueId={leagueId} />
        <TeamsCard leagueId={leagueId} />
      </div>
      <GlobalStyles />
    </>
  );
}

export default App;
