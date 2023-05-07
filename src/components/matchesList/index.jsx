import { useEffect, useState, useRef } from "react";
import getData from "../../services/api";
import {
  MatchesContainer,
  MatchContainer,
  DateContainer,
  MatchTime,
  MatchDate,
  InfoContainer,
  LeagueContainer,
  LeagueLogo,
  LeagueName,
  TeamsContainer,
  TeamContainer,
  TeamName,
  TeamLogo,
} from "./styles";

export default function MatchesList({ date }) {
  const [data, setData] = useState([]);
  const shouldFetch = useRef(true);

  useEffect(() => {
    if (shouldFetch) {
      getData("fixtures", {
        next: "6",
        league: "71",
        timezone: "America/Fortaleza",
      })
        .then((response) => {
          setData(response.data.response.slice(1));
          shouldFetch.current = false;
        })
        .catch((error) => console.log(error));
    } else {
      getData("fixtures", {
        date: date,
        league: "71",
        season: '2023',
        timezone: "America/Fortaleza",
      })
        .then((response) => setData(response.data.response))
        .catch((error) => console.log(error));
    }

  }, [date]);
  console.log(data);

  function formatDate(matchDate) {
    const today = new Date();
    if (new Date(matchDate) === today) {
      return "Hoje";
    }
    return new Date(matchDate).toLocaleDateString("pt-BR");
  }

  function formatTime(matchDate) {
    return new Date(matchDate)
      .toLocaleTimeString("pt-BR")
      .slice(0, 5)
      .replace(":", "h");
  }

  // console.log(formatDate("2023-05-06T16:00:00-03:00"));
  // console.log(formatTime("2023-05-06T16:00:00-03:00"));

  return (
    <>
      <MatchesContainer>
        {data.map((f) => (
          <MatchContainer key={f.fixture.id}>
            <DateContainer>
              <MatchDate>{formatDate(f.fixture.date)}</MatchDate>
              <MatchTime>{formatTime(f.fixture.date)}</MatchTime>
            </DateContainer>
            <InfoContainer>
              <LeagueContainer>
                <LeagueLogo src={f.league.logo} />
                <LeagueName>{f.league.name}</LeagueName>
              </LeagueContainer>
              <TeamsContainer>
                <TeamContainer>
                  <TeamName>{f.teams.away.name}</TeamName>
                  <TeamLogo src={f.teams.away.logo} />
                </TeamContainer>
                <p>VS</p>
                <TeamContainer>
                  <TeamLogo src={f.teams.home.logo} />
                  <TeamName>{f.teams.home.name}</TeamName>
                </TeamContainer>
              </TeamsContainer>
            </InfoContainer>
          </MatchContainer>
        ))}
      </MatchesContainer>
    </>
  );
}
