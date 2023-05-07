import styled from "styled-components";

export const MatchesContainer = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

export const MatchContainer = styled.li`
    display:  flex;
    gap: 1.5rem;
`;

export const DateContainer = styled.div`
    background-color: aquamarine;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const MatchTime = styled.span``;

export const MatchDate = styled.span``;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const LeagueContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
`;

export const LeagueLogo = styled.img`
    max-width: 24px;
`;

export const LeagueName = styled.span``;

export const TeamsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`;

export const TeamContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
`;

export const TeamName = styled.h3``;

export const TeamLogo = styled.img`
    max-width: 36px;
`;