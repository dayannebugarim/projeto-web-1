import Banner from "./components/banner";
import MatchesCard from "./components/matchesCard";
import TeamStats from "./components/teamStats";
import TeamsCard from "./components/teamsCard";
import Dashboard from "./pages/dashboard";
import PlayerDetails from "./components/playerDetails";
import TeamDetails from "./components/teamDetails";
import GlobalStyles from "./styles/global";

function App() {
  return (
    <>
      <h1>Brasileirão</h1>
      {/* <Dashboard /> */}
      {/* <Banner /> */}
      <div style={{display: 'flex', justifyContent: 'space-between', gap: '1.5rem'}}>
        {/* <MatchesCard /> */}
        <TeamsCard />
        {/* <PlayerDetails /> */}
      </div>
      <GlobalStyles />
    </>
  );
}

export default App;
