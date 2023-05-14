import styled from "styled-components";

export const Container = styled.div`
  display: ${(props) => (props.open ? "block" : "none")};
  opacity: ${(props) => (props.open ? 1 : 0)};
  z-index: 99;
  position: relative;
  left: 0;
  background: #17232c;
  max-width: 800px;
  padding: 3rem;
  border-radius: 6px 6px 0px 0px;
  border: 1px solid #263540;
  border-bottom: none;
  box-shadow: 0px -2px 25px rgba(0, 0, 0, 0.3);

  animation: 0.4s ease-out 0s 1 slideToRight !important;

  @keyframes slideToRight {
    0% {
      transform: translateX(-10%);
      opacity: 0.3;
    }

    100% {
      transform: translateX(0%);
      opacity: 1;
    }
  }
`;

export const PlayerDetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 3rem;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const CloseButton = styled.button`
  cursor: pointer;
  padding: 0.8rem;
  border: none;
  background: none;
`;

export const PlayerImg = styled.img`
  border-radius: 50%;
  background-color: #fff;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const PlayerName = styled.h2`
  color: #30c3a2;
`;

export const DescriptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  max-width: 150px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 0.2rem;
  color: #818e95;
`;

export const DescriptionTitle = styled.span`
  font-weight: 500;
`;

export const DescriptionValue = styled.span``;

export const PlayerStatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  background-color: #2b383e;
  padding: 1rem;
  border-radius: 6px;
`;

export const StatsCell = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.3rem;
  border-bottom: 1px solid #384348;
`;

export const StatsTitle = styled.span`
  color: #d4d4d4;
  font-weight: 400;
`;

export const StatsValue = styled.span``;
