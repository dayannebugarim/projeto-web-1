import { useEffect, useState, useRef } from "react";
import { getLiveFixtures, getNextFixtures } from "../../services/api";
import {
  BannerContainer,
  BannerHeader,
  BannerBody,
  TeamsContainer,
  EventContainer,
  EventInfoContainer,
  PlayerName,
  EventIcon,
  TeamContainer,
  TeamName,
  TeamLogoContainer,
  TeamLogo,
  ScoreValuesContainer,
  ScoreValues,
  EventType,
  BannerFooter,
  FooterContainer,
  FooterIcon,
  FooterSpan,
} from "./styles";
import SoccerBallIcon from "../../assets/icons/soccer-ball.svg";
import ClockIcon from "../../assets/icons/clock.svg";
import StadiumIcon from "../../assets/icons/stadium.svg";
import WhistleIcon from "../../assets/icons/whistle.svg";
import { eventType } from "../../utils/enums";

export default function Banner({ leagueId, setLeagueId }) {
  const eventContainer1El = useRef();
  const [eventContainer1Width, setEventContainer1Width] = useState(0);

  const eventContainer2El = useRef();
  const [eventContainer2Width, setEventContainer2Width] = useState(0);

  const [data, setData] = useState([]);
  const [fixtureStatus, setFixtureStatus] = useState("");
  const [homeGoalsInfo, setHomeGoalsInfo] = useState([]);
  const [awayGoalsInfo, setAwayGoalsInfo] = useState([]);

  useEffect(() => {
    setEventContainer1Width(eventContainer1El.current?.offsetWidth);
    setEventContainer2Width(eventContainer2El.current?.offsetWidth);

    getLiveFixtures(leagueId)
      .then((response) => {
        if (response.data.response.length !== 0) {
          setAllData(response.data.response[0]);
        } else {
          getNextFixtures("1", leagueId)
            .then((response) => setAllData(response.data.response[0]))
            .catch((error) => console.log(error));
        }
      })
      .catch((error) => console.log(error));

    const setAllData = (data) => {
      setData([data]);
      setFixtureStatus(data.fixture.status.short);
      setHomeGoalsInfo(goalsInfo(data.teams.home.name, data));
      setAwayGoalsInfo(goalsInfo(data.teams.away.name, data));
    };
  }, [leagueId]);

  const goalsInfo = (team, data) => {
    return data.events?.filter(
      (e) => e.type === "Goal" && e.team.name === team
    );
  };

  const formatDate = (fixtureDate) => {
    return new Date(fixtureDate).toLocaleDateString("pt-BR");
  };

  const formatTime = (fixtureDate) => {
    return new Date(fixtureDate)
      .toLocaleTimeString("pt-BR")
      .slice(0, 5)
      .replace(":", "h");
  };

  return (
    <>
      {data.map((d, key) => (
        <BannerContainer key={key}>
          <BannerHeader>
            <select onChange={(e) => setLeagueId(e.currentTarget.value)}>
              <option value="71">Série A</option>
              <option value="72">Série B</option>
              <option value="75">Série C</option>
              <option value="76">Série D</option>
              <option value="73">Copa Do Brasil</option>
            </select>
          </BannerHeader>
          <BannerBody>
            <TeamsContainer>
              <EventContainer
                ref={eventContainer1El}
                width={
                  Math.max(eventContainer1Width, eventContainer2Width) + "px"
                }
              >
                {fixtureStatus !== "NS" &&
                  homeGoalsInfo.map((e, key) => (
                    <EventInfoContainer key={key}>
                      <PlayerName>{e.player.name}</PlayerName>
                      <EventIcon src={SoccerBallIcon} />
                    </EventInfoContainer>
                  ))}
              </EventContainer>
              <TeamContainer>
                <TeamName>{d.teams.home.name}</TeamName>
                <TeamLogoContainer>
                  <TeamLogo src={d.teams.home.logo} />
                </TeamLogoContainer>
              </TeamContainer>
              <ScoreValuesContainer>
                <ScoreValues>
                  {fixtureStatus !== "NS"
                    ? `${d.goals.home} - ${d.goals.away}`
                    : "VS"}
                </ScoreValues>
                {fixtureStatus !== "NS" && (
                  <EventType>{eventType[d.fixture.status.short]}</EventType>
                )}
              </ScoreValuesContainer>
              <TeamContainer>
                <TeamLogoContainer>
                  <TeamLogo src={d.teams.away.logo} />
                </TeamLogoContainer>
                <TeamName>{d.teams.away.name}</TeamName>
              </TeamContainer>
            </TeamsContainer>
            <EventContainer
              ref={eventContainer2El}
              width={
                Math.max(eventContainer1Width, eventContainer2Width) + "px"
              }
            >
              {fixtureStatus !== "NS" &&
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
              <FooterIcon src={ClockIcon} />
              <FooterSpan>
                {formatDate(d.fixture.date)} - {formatTime(d.fixture.date)}
              </FooterSpan>
            </FooterContainer>
            <FooterContainer>
              <FooterIcon src={StadiumIcon} />
              <FooterSpan>
                {d.fixture.venue.name || "-"},{" "}
                {d.fixture.venue.city.split(",")[0] || "-"}
              </FooterSpan>
            </FooterContainer>
            <FooterContainer>
              <FooterIcon src={WhistleIcon} />
              <FooterSpan>{d.fixture.referee || "-"}</FooterSpan>
            </FooterContainer>
          </BannerFooter>
        </BannerContainer>
      ))}

      {/* <BannerContainer>
        <BannerHeader>
          <select onChange={(e) => setLeagueId(e.currentTarget.value)}>
            <option value="71">Série A</option>
            <option value="72">Série B</option>
            <option value="73">Copa Do Brasil</option>
            <option value="75">Série C</option>
            <option value="76">Série D</option>
          </select>
          <LeagueContainer>
            <LeagueLogo src="https://media-1.api-sports.io/football/leagues/71.png" />
            <LeagueName>Série A</LeagueName>
          </LeagueContainer>
        </BannerHeader>
        <BannerBody>
          <TeamsContainer>
            <EventContainer
              ref={eventContainer1El}
              width={
                Math.max(eventContainer1Width, eventContainer2Width) + "px"
              }
            >
              <EventInfoContainer>
                <PlayerName>Tiquinho Soares</PlayerName>
                <EventIcon src={SoccerBallIcon} />
              </EventInfoContainer>
              <EventInfoContainer>
                <PlayerName>Tiquinho Soares</PlayerName>
                <EventIcon src={SoccerBallIcon} />
              </EventInfoContainer>
              <EventInfoContainer>
                <PlayerName>Carlos Eduardo</PlayerName>
                <EventIcon src={SoccerBallIcon} />
              </EventInfoContainer>
            </EventContainer>
            <TeamContainer>
              <TeamName>Botafogo</TeamName>
              <TeamLogoContainer>
                <TeamLogo src="https://media-1.api-sports.io/football/teams/120.png" />
              </TeamLogoContainer>
            </TeamContainer>
            <ScoreValuesContainer>
              <ScoreValues>3 - 0</ScoreValues>
              <EventType>Second Half</EventType>
            </ScoreValuesContainer>
            <TeamContainer>
              <TeamLogoContainer>
                <TeamLogo src="https://media-1.api-sports.io/football/teams/131.png" />
              </TeamLogoContainer>
              <TeamName>Corinthians</TeamName>
            </TeamContainer>
          </TeamsContainer>
          <EventContainer
            ref={eventContainer2El}
            width={Math.max(eventContainer1Width, eventContainer2Width) + "px"}
          ></EventContainer>
        </BannerBody>
        <BannerFooter>
          <FooterContainer>
            <FooterIcon src={ClockIcon} />
            <FooterSpan>11/05/2023 - 19h30</FooterSpan>
          </FooterContainer>
          <FooterContainer>
            <FooterIcon src={StadiumIcon} />
            <FooterSpan>Estádio Nilton Santos, Rio de Janeiro</FooterSpan>
          </FooterContainer>
          <FooterContainer>
            <FooterIcon src={WhistleIcon} />
            <FooterSpan>Anderson Daronco, Brazil</FooterSpan>
          </FooterContainer>
        </BannerFooter>
      </BannerContainer> */}
    </>
  );
}
