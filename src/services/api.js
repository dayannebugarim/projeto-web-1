import axios from "axios";

export const getLiveFixtures = (leagueId) => {
  return getData("fixtures", {
    live: "all",
    league: leagueId,
    timezone: "America/Fortaleza",
  });
};

export const getNextFixtures = (next, leagueId) => {
  return getData("fixtures", {
    next: next,
    league: leagueId,
    timezone: "America/Fortaleza",
  });
};

export const getFixturesByDate = (date, leagueId) => {
  return getData("fixtures", {
    date: date,
    league: leagueId,
    season: "2023",
    timezone: "America/Fortaleza",
  });
};

export const getPlayerByTeam = (playerId, teamId, leagueId) => {
  return getData("players", {
    id: playerId,
    team: teamId,
    league: leagueId,
    season: "2023",
  });
};

export const getPlayersByTeam = (teamId, leagueId) => {
  return getData("players", {
    team: teamId,
    league: leagueId,
    season: "2023",
  });
};

export const getTeamsByLeague = (leagueId) => {
  return getData("teams", {
    league: leagueId, //variavel
    season: "2023",
    country: "Brazil",
  });
};

export const getTeamStatsByLeague = (leagueId, teamId) => {
  return getData("teams/statistics", {
    league: leagueId,
    season: "2023",
    team: teamId,
  });
};

const getData = (endpoint, params) => {
  const options = {
    method: "GET",
    url: `${import.meta.env.VITE_API_URL}${endpoint}`,
    params: params,
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
      "X-RapidAPI-Host": import.meta.env.VITE_API_HOST,
    },
  };

  return axios.request(options);
};
