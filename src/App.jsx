import Banner from "./components/banner";
import MatchesCard from "./components/matchesCard";
import TeamStats from "./components/teamStats";
import TeamsCard from "./components/teamsCard";
import Dashboard from "./pages/dashboard";
import PlayerDetails from "./components/playerDetails";
import TeamDetails from "./components/teamDetails";
import GlobalStyles from "./styles/global";
import { useState } from "react";

function App() {
  const [leagueId, setLeagueId] = useState('71');
  console.log(leagueId);

  return (
    <>
      <h1>Brasileirão</h1>
      <Banner leagueId={leagueId} setLeagueId={setLeagueId} />
      <div className="body-container">
        <MatchesCard leagueId={leagueId} />
        <TeamsCard leagueId={leagueId} />
      </div>
      <GlobalStyles />
    </>
  );
}

export default App;
