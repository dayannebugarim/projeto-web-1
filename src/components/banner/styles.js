import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #30C3A2;
  padding: 1.5rem;
  border-radius: 6px;
  /* border: 1px solid red; */
  flex-direction: column;
  gap: 1rem;
  color: #17232C;
`;

export const BannerHeader = styled.div`
  /* border: 1px solid red; */
`;

export const LeagueContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const LeagueLogo = styled.img`
  max-width: 16px;
`;

export const LeagueName = styled.span``;

export const BannerBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  /* border: 1px solid red; */
`;

export const TeamsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  /* border: 1px solid red; */
`;

export const EventContainer = styled.div`
  min-width: ${(props) => props.width};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 2rem;
  /* border: 1px solid red; */
`;

export const EventInfoContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 0.5rem;
  /* border: 1px solid red; */
`;

export const PlayerName = styled.span`
 color: #2B383E;
 font-size: 0.95rem;
`;

export const EventIcon = styled.img`
  max-width: 20px;
`;

export const TeamContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  /* border: 1px solid red; */
`;

export const TeamName = styled.h2`
  font-weight: 500;
`;

export const TeamLogoContainer = styled.div`
  background-color: white;
  border-radius: 50%;
  padding: 0.8rem;
  display: flex;
`;

export const TeamLogo = styled.img`
  max-width: 3rem;
`;

export const ScoreValuesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ScoreValues = styled.span`
  font-size: 2rem;
  font-weight: 600;
`;

export const EventType = styled.span`
  font-size: 0.8rem;
  padding: 0.3rem 0.5rem;
  border-radius: 50px;
  color: #fff;
  background-color: #17232C;
`;

export const BannerFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #2FAC90;
`;

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const FooterIcon = styled.img`
  max-width: 20px;
`;

export const FooterSpan = styled.span`
  color: #226254;
  font-size: 0.8rem;
`;
