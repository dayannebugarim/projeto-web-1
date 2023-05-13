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
  background: white;
  border-radius: 6px 6px 0px 0px;
  box-shadow: 0px -2px 25px #b6b6b6;
`;

export const TeamHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border: 1px solid red;
`;

export const CloseButton = styled.button`
  cursor: pointer;
  padding: 0.8rem;
  border: none;
  background: none;
`;

export const TeamLogoContainer = styled.div`
  background-color: #e8e8e8;
  display: flex;
  align-items: center;
  padding: 0.8rem;
  border-radius: 50px;
`;

export const TeamLogo = styled.img`
  max-width: 64px;
`;

export const TeamName = styled.h2``;

export const TeamFoundation = styled.span``;

export const LeagueContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 1px solid red;
`;

export const LeagueLogo = styled.img`
  max-width: 18px;
`;

export const LeagueName = styled.span``;

export const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
`;

export const Divider = styled.span`
  border: 1px solid red;
`;

export const PlayersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  border: 1px solid red;
  margin-bottom: 2rem;
`;
