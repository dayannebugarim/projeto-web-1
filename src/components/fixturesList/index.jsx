import { useEffect, useState } from "react";
import { getFixturesByDate, getNextFixtures } from "../../services/api";
import {
  FixturesContainer,
  FixtureContainer,
  DateContainer,
  FixtureTime,
  FixtureDate,
  InfoContainer,
  LeagueContainer,
  LeagueLogo,
  LeagueName,
  TeamsContainer,
  TeamContainer,
  TeamName,
  TeamLogoContainer,
  TeamLogo,
} from "./styles";

export default function FixturesList({ leagueId, date }) {
  const [data, setData] = useState([]);
  const [shouldFetch, setShouldFetch] = useState(true);

  useEffect(() => {
    if (shouldFetch) {
      getNextFixtures("7", leagueId)
        .then((response) => {
          setData(response.data.response.slice(1));
          setShouldFetch(false);
        })
        .catch((error) => console.log(error));
    } else {
      getFixturesByDate(date, leagueId)
        .then((response) => setData(response.data.response))
        .catch((error) => console.log(error));
    }
  }, [leagueId, date, shouldFetch]);

  const formatDate = (fixtureDate) => {
    const today = new Date();
    if (new Date(fixtureDate) === today) {
      return "Hoje";
    }
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
      <FixturesContainer>
        {data.map((f) => (
          <FixtureContainer key={f.fixture.id}>
            <DateContainer>
              <FixtureDate>{formatDate(f.fixture.date)}</FixtureDate>
              <FixtureTime>{formatTime(f.fixture.date)}</FixtureTime>
            </DateContainer>
            <InfoContainer>
              <LeagueContainer>
                <LeagueLogo src={f.league.logo} />
                <LeagueName>{f.league.name}</LeagueName>
              </LeagueContainer>
              <TeamsContainer>
                <TeamContainer>
                  <TeamName>{f.teams.away.name}</TeamName>
                  <TeamLogoContainer>
                    <TeamLogo src={f.teams.away.logo} />
                  </TeamLogoContainer>
                </TeamContainer>
                <p>VS</p>
                <TeamContainer>
                  <TeamLogoContainer>
                    <TeamLogo src={f.teams.home.logo} />
                  </TeamLogoContainer>
                  <TeamName>{f.teams.home.name}</TeamName>
                </TeamContainer>
              </TeamsContainer>
            </InfoContainer>
          </FixtureContainer>
        ))}
      </FixturesContainer>

      {/* <FixturesContainer>
        <FixtureContainer>
          <DateContainer>
            <FixtureDate>13/05/2023</FixtureDate>
            <FixtureTime>18h30</FixtureTime>
          </DateContainer>
          <InfoContainer>
            <LeagueContainer>
              <LeagueLogo
                src={`https://media-3.api-sports.io/football/leagues/${leagueId}.png`}
              />
              <LeagueName>Série A - {leagueId}</LeagueName>
            </LeagueContainer>
            <TeamsContainer>
              <TeamContainer>
                <TeamName>Cuiaba</TeamName>
                <TeamLogoContainer>
                  <TeamLogo src="https://media-1.api-sports.io/football/teams/1193.png" />
                </TeamLogoContainer>
              </TeamContainer>
              <p>VS</p>
              <TeamContainer>
                <TeamLogoContainer>
                  <TeamLogo src="https://media-3.api-sports.io/football/teams/124.png" />
                </TeamLogoContainer>
                <TeamName>Fluminense</TeamName>
              </TeamContainer>
            </TeamsContainer>
          </InfoContainer>
        </FixtureContainer>

        <FixtureContainer>
          <DateContainer>
            <FixtureDate>13/05/2023</FixtureDate>
            <FixtureTime>18h30</FixtureTime>
          </DateContainer>
          <InfoContainer>
            <LeagueContainer>
              <LeagueLogo src="https://media-3.api-sports.io/football/leagues/71.png" />
              <LeagueName>Série A</LeagueName>
            </LeagueContainer>
            <TeamsContainer>
              <TeamContainer>
                <TeamName>RB Bragantino</TeamName>
                <TeamLogoContainer>
                  <TeamLogo src="https://media-3.api-sports.io/football/teams/794.png" />
                </TeamLogoContainer>
              </TeamContainer>
              <p>VS</p>
              <TeamContainer>
                <TeamLogoContainer>
                  <TeamLogo src="https://media-1.api-sports.io/football/teams/121.png" />
                </TeamLogoContainer>
                <TeamName>Palmeiras</TeamName>
              </TeamContainer>
            </TeamsContainer>
          </InfoContainer>
        </FixtureContainer>

        <FixtureContainer>
          <DateContainer>
            <FixtureDate>13/05/2023</FixtureDate>
            <FixtureTime>18h30</FixtureTime>
          </DateContainer>
          <InfoContainer>
            <LeagueContainer>
              <LeagueLogo src="https://media-3.api-sports.io/football/leagues/71.png" />
              <LeagueName>Série A</LeagueName>
            </LeagueContainer>
            <TeamsContainer>
              <TeamContainer>
                <TeamName>Cuiaba</TeamName>
                <TeamLogoContainer>
                  <TeamLogo src="https://media-1.api-sports.io/football/teams/1193.png" />
                </TeamLogoContainer>
              </TeamContainer>
              <p>VS</p>
              <TeamContainer>
                <TeamLogoContainer>
                  <TeamLogo src="https://media-3.api-sports.io/football/teams/124.png" />
                </TeamLogoContainer>
                <TeamName>Fluminense</TeamName>
              </TeamContainer>
            </TeamsContainer>
          </InfoContainer>
        </FixtureContainer>

        <FixtureContainer>
          <DateContainer>
            <FixtureDate>13/05/2023</FixtureDate>
            <FixtureTime>18h30</FixtureTime>
          </DateContainer>
          <InfoContainer>
            <LeagueContainer>
              <LeagueLogo src="https://media-3.api-sports.io/football/leagues/71.png" />
              <LeagueName>Série A</LeagueName>
            </LeagueContainer>
            <TeamsContainer>
              <TeamContainer>
                <TeamName>RB Bragantino</TeamName>
                <TeamLogoContainer>
                  <TeamLogo src="https://media-3.api-sports.io/football/teams/794.png" />
                </TeamLogoContainer>
              </TeamContainer>
              <p>VS</p>
              <TeamContainer>
                <TeamLogoContainer>
                  <TeamLogo src="https://media-1.api-sports.io/football/teams/121.png" />
                </TeamLogoContainer>
                <TeamName>Palmeiras</TeamName>
              </TeamContainer>
            </TeamsContainer>
          </InfoContainer>
        </FixtureContainer>

        <FixtureContainer>
          <DateContainer>
            <FixtureDate>13/05/2023</FixtureDate>
            <FixtureTime>18h30</FixtureTime>
          </DateContainer>
          <InfoContainer>
            <LeagueContainer>
              <LeagueLogo src="https://media-3.api-sports.io/football/leagues/71.png" />
              <LeagueName>Série A</LeagueName>
            </LeagueContainer>
            <TeamsContainer>
              <TeamContainer>
                <TeamName>Cuiaba</TeamName>
                <TeamLogoContainer>
                  <TeamLogo src="https://media-1.api-sports.io/football/teams/1193.png" />
                </TeamLogoContainer>
              </TeamContainer>
              <p>VS</p>
              <TeamContainer>
                <TeamLogoContainer>
                  <TeamLogo src="https://media-3.api-sports.io/football/teams/124.png" />
                </TeamLogoContainer>
                <TeamName>Fluminense</TeamName>
              </TeamContainer>
            </TeamsContainer>
          </InfoContainer>
        </FixtureContainer>

        <FixtureContainer>
          <DateContainer>
            <FixtureDate>13/05/2023</FixtureDate>
            <FixtureTime>18h30</FixtureTime>
          </DateContainer>
          <InfoContainer>
            <LeagueContainer>
              <LeagueLogo src="https://media-3.api-sports.io/football/leagues/71.png" />
              <LeagueName>Série A</LeagueName>
            </LeagueContainer>
            <TeamsContainer>
              <TeamContainer>
                <TeamName>RB Bragantino</TeamName>
                <TeamLogoContainer>
                  <TeamLogo src="https://media-3.api-sports.io/football/teams/794.png" />
                </TeamLogoContainer>
              </TeamContainer>
              <p>VS</p>
              <TeamContainer>
                <TeamLogoContainer>
                  <TeamLogo src="https://media-1.api-sports.io/football/teams/121.png" />
                </TeamLogoContainer>
                <TeamName>Palmeiras</TeamName>
              </TeamContainer>
            </TeamsContainer>
          </InfoContainer>
        </FixtureContainer> 
      </FixturesContainer> */}
    </>
  );
}
