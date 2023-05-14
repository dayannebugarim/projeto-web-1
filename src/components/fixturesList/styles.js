import styled from "styled-components";

export const FixturesContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 800px;
  overflow-y: scroll;
`;

export const FixtureContainer = styled.li`
  display: flex;
  gap: 1.5rem;
  background-color: #2b383e;
  padding: 1rem;
  border-bottom: 2px solid #2b383e;
  border-radius: 6px;
`;

export const DateContainer = styled.div`
  border-left: 3px solid #30c3a2;
  border-radius: 2px;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  color: #d4d4d4;
`;

export const FixtureTime = styled.span``;

export const FixtureDate = styled.span``;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  border-radius: 6px;
  background-color: #384348;
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
  border-top: 1px solid #2b383e;
  padding: 1rem 0;
`;

export const TeamContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const TeamName = styled.h3`
  font-weight: 500;
`;

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
