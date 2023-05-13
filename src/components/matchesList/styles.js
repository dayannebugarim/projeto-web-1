import styled from "styled-components";

export const MatchesContainer = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const MatchContainer = styled.li`
    display:  flex;
    gap: 1.5rem;
    background-color: white;
    padding: 1rem;
    border-bottom: 2px solid aliceblue;
`;

export const DateContainer = styled.div`
    border-left: 3px solid aquamarine;
    border-radius: 2px;
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
`;

export const MatchTime = styled.span``;

export const MatchDate = styled.span``;

export const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;
    border-radius: 6px;
    background-color: #E8E8E8;
    padding: 0.5rem;
    width: 100%;
`;

export const LeagueContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
`;

export const LeagueLogo = styled.img`
    max-width: 18px;
`;

export const LeagueName = styled.span`
    font-size: 0.8rem;
`;

export const TeamsContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    border-top: 1px solid white;
    padding: 1rem 0;
`;

export const TeamContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
`;

export const TeamName = styled.h3``;

export const TeamLogoContainer = styled.div`
  background-color: white;
  border-radius: 50%;
  padding: 0.5rem;
  display: flex;
  height: 48px;
`;

export const TeamLogo = styled.img`
    max-width: 32px;
`;