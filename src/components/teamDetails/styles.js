import styled from "styled-components";

export const Background = styled.div`
  display: ${(props) => (props.open ? "block" : "none")};
  opacity: ${(props) => (props.open ? 1 : 0)};
  z-index: 98;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(1px);

  animation: 0.4s ease-out 0s 1 darkenBackground;

  @keyframes darkenBackground {
    0% {
      background: transparent;
    }

    100% {
      background: rgba(0, 0, 0, 0.15);
    }
  }
`;

export const Container = styled.div`
  gap: 1rem;
  display: ${(props) => (props.open ? "flex" : "none")};
  opacity: ${(props) => (props.open ? 1 : 0)};
  z-index: 99;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0%);
  width: max-content;

  animation: 0.4s ease-out 0s 1 slideToTop !important;

  @keyframes slideToTop {
    0% {
      transform: translate(-50%, 90%);
      opacity: 0;
    }

    100% {
      transform: translate(-50%, 0%);
      opacity: 1;
    }
  }
`;

export const TeamDetailsContainer = styled.div`
  width: 100%;
  max-width: 900px;
  padding: 3rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background: #17232c;
  border-radius: 6px 6px 0px 0px;
  border: 1px solid #263540;
  border-bottom: none;
  box-shadow: 0px -2px 25px rgba(0, 0, 0, 0.3);
`;

export const TeamHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const CloseButton = styled.button`
  cursor: pointer;
  padding: 0.8rem;
  border: none;
  background: none;
`;

export const TeamLogoContainer = styled.div`
  background-color: #2b383e;
  display: flex;
  align-items: center;
  padding: 0.8rem;
  border-radius: 50px;
`;

export const TeamLogo = styled.img`
  max-width: 64px;
`;

export const TeamInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;
`;

export const TeamName = styled.h2`
  color: #30c3a2;
`;

export const TeamFoundation = styled.span`
  color: #818e95;
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
  font-size: 0.85rem;
  color: #818e95;
`;

export const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #818e95;

  &::before,
  &::after {
    content: "";
    height: 1px;
    background-color: #2b383e;
    flex-grow: 1;
  }
`;

export const PlayersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.2rem;
  margin-bottom: 2rem;
`;

export const StatsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
