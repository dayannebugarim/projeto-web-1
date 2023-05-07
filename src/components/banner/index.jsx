import { useEffect, useState } from "react";
import getData from "../../services/api";
import {
  BannerContainer,
  BannerHeader,
  LeagueContainer,
  LeagueLogo,
  LeagueName,
  BannerBody,
  TeamsContainer,
  EventContainer,
  EventInfoContainer,
  PlayerName,
  EventIcon,
  TeamContainer,
  TeamName,
  TeamLogo,
  ScoreValuesContainer,
  ScoreValues,
  EventType,
  BannerFooter,
  FooterContainer,
  FooterIcon,
  FooterSpan,
} from "./styles";

export default function Banner() {
  //   const [teams, setTeams] = useState({});
  //   const [goals, setGoals] = useState({});
  const [data, setData] = useState([]);
  const [matchStatus, setMatchStatus] = useState("");
  const [homeGoalsInfo, setHomeGoalsInfo] = useState([]);
  const [awayGoalsInfo, setAwayGoalsInfo] = useState([]);

  useEffect(() => {
    getData("fixtures", {
      live: "all",
      league: "71",
      timezone: "America/Fortaleza",
    })
      .then((response) => {
        if (response.data.response.length !== 0) {
          setAllData(response.data.response[0]);
        } else {
          getData("fixtures", {
            league: "71",
            next: "1",
            timezone: "America/Fortaleza",
          })
            .then((response) => setAllData(response.data.response[0]))
            .catch((error) => console.log(error));
        }
      })
      .catch((error) => console.log(error));

    function setAllData(data) {
      setData([data]);
      setMatchStatus(data.fixture.status.short);
      setHomeGoalsInfo(goalsInfo(data.teams.home.name, data));
      setAwayGoalsInfo(goalsInfo(data.teams.away.name, data));
    }
  }, []);
  console.log(data);

  function goalsInfo(team, data) {
    return data.events.filter((e) => e.type === "Goal" && e.team.name === team);
  }

  function formatDate(matchDate) {
    return new Date(matchDate).toLocaleDateString("pt-BR");
  }

  function formatTime(matchDate) {
    return new Date(matchDate)
      .toLocaleTimeString("pt-BR")
      .slice(0, 5)
      .replace(":", "h");
  }

  return (
    <>
      {data.map((d, key) => (
        <BannerContainer key={key}>
          <BannerHeader>
            <LeagueContainer>
              <LeagueLogo src={d.league.logo} />
              <LeagueName>{d.league.name}</LeagueName>
            </LeagueContainer>
          </BannerHeader>
          <BannerBody>
            <TeamsContainer>
              <EventContainer>
                {matchStatus !== "NS" &&
                  homeGoalsInfo.map((e, key) => (
                    <EventInfoContainer key={key}>
                      <PlayerName>{e.player.name}</PlayerName>
                      <EventIcon src="https://picsum.photos/16" />
                    </EventInfoContainer>
                  ))}
              </EventContainer>
              <TeamContainer>
                <TeamName>{d.teams.home.name}</TeamName>
                <TeamLogo src={d.teams.home.logo} />
              </TeamContainer>
              <ScoreValuesContainer>
                <ScoreValues>
                  {matchStatus !== "NS"
                    ? `${d.goals.home} - ${d.goals.away}`
                    : "VS"}
                </ScoreValues>
                {matchStatus !== "NS" && (
                  <EventType>{d.fixture.status.long}</EventType>
                )}
              </ScoreValuesContainer>
              <TeamContainer>
                <TeamLogo src={d.teams.away.logo} />
                <TeamName>{d.teams.away.name}</TeamName>
              </TeamContainer>
            </TeamsContainer>
            <EventContainer>
              {matchStatus !== "NS" &&
                awayGoalsInfo.map((e, key) => (
                  <EventInfoContainer key={key}>
                    <PlayerName>{e.player.name}</PlayerName>
                    <EventIcon src="https://picsum.photos/16" />
                  </EventInfoContainer>
                ))}
            </EventContainer>
          </BannerBody>
          <BannerFooter>
            <FooterContainer>
              <FooterIcon src="https://picsum.photos/16" />
              <FooterSpan>
                {formatDate(d.fixture.date)} - {formatTime(d.fixture.date)}
              </FooterSpan>
            </FooterContainer>
            <FooterContainer>
              <FooterIcon src="https://picsum.photos/16" />
              <FooterSpan>
                {d.fixture.venue.name}, {d.fixture.venue.city.split(",")[0]}
              </FooterSpan>
            </FooterContainer>
            <FooterContainer>
              <FooterIcon src="https://picsum.photos/16" />
              <FooterSpan>{d.fixture.referee}</FooterSpan>
            </FooterContainer>
          </BannerFooter>
        </BannerContainer>
      ))}
    </>
  );
}

function LiveMatchBanner() {
  return (
    <BannerContainer>
      <BannerHeader>
        <LeagueContainer>
          <LeagueLogo src="https://picsum.photos/20" />
          <LeagueName>Série A</LeagueName>
        </LeagueContainer>
      </BannerHeader>
      <BannerBody>
        <TeamsContainer>
          <EventContainer>
            <EventInfoContainer>
              <PlayerName>Gabigol</PlayerName>
              <EventIcon src="https://picsum.photos/16" />
            </EventInfoContainer>
          </EventContainer>
          <TeamContainer>
            <TeamName>Flamengo</TeamName>
            <TeamLogo src="https://picsum.photos/60" />
          </TeamContainer>
          <ScoreValuesContainer>
            <ScoreValues>3 - 1</ScoreValues>
            <EventType>Halftime</EventType>
          </ScoreValuesContainer>
          <TeamContainer>
            <TeamLogo src="https://picsum.photos/60" />
            <TeamName>Vasco</TeamName>
          </TeamContainer>
        </TeamsContainer>
        <EventContainer>
          <EventInfoContainer>
            <EventIcon src="https://picsum.photos/16" />
            <PlayerName>Fulano</PlayerName>
          </EventInfoContainer>
        </EventContainer>
      </BannerBody>
      <BannerFooter>
        <FooterContainer>
          <FooterIcon src="https://picsum.photos/16" />
          <FooterSpan>12/06/2023 - 21h30</FooterSpan>
        </FooterContainer>
        <FooterContainer>
          <FooterIcon src="https://picsum.photos/16" />
          <FooterSpan>Estádio Tal, São Paulo</FooterSpan>
        </FooterContainer>
        <FooterContainer>
          <FooterIcon src="https://picsum.photos/16" />
          <FooterSpan>José Silva</FooterSpan>
        </FooterContainer>
      </BannerFooter>
    </BannerContainer>
  );
}

function NextMatchBanner() {
  return (
    <BannerContainer>
      <BannerHeader>
        <LeagueContainer>
          <LeagueLogo src="https://picsum.photos/20" />
          <LeagueName>Série A</LeagueName>
        </LeagueContainer>
      </BannerHeader>
      <BannerBody>
        <TeamsContainer>
          <TeamContainer>
            <TeamName>Flamengo</TeamName>
            <TeamLogo src="https://picsum.photos/60" />
          </TeamContainer>
          <ScoreValuesContainer>
            <ScoreValues>3 - 1</ScoreValues>
            <EventType>Halftime</EventType>
          </ScoreValuesContainer>
          <TeamContainer>
            <TeamLogo src="https://picsum.photos/60" />
            <TeamName>Vasco</TeamName>
          </TeamContainer>
        </TeamsContainer>
      </BannerBody>
      <BannerFooter>
        <FooterContainer>
          <FooterIcon src="https://picsum.photos/16" />
          <FooterSpan>12/06/2023 - 21h30</FooterSpan>
        </FooterContainer>
        <FooterContainer>
          <FooterIcon src="https://picsum.photos/16" />
          <FooterSpan>Estádio Tal, São Paulo</FooterSpan>
        </FooterContainer>
        <FooterContainer>
          <FooterIcon src="https://picsum.photos/16" />
          <FooterSpan>José Silva</FooterSpan>
        </FooterContainer>
      </BannerFooter>
    </BannerContainer>
  );
}
