import styled from "styled-components";

export const Container = styled.div`
  display: ${(props) => (props.open ? "block" : "none")};
  opacity: ${(props) => (props.open ? 1 : 0)};
  z-index: 99;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  width: 50vw;
  min-height: 50vh;
  border-radius: 6px;
  box-shadow: 0px 2px 20px lightgray;
`;

export const PlayerDetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6%;
  gap: 3rem;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0.3rem;
  border-radius: 6px;
`;

export const PlayerImg = styled.img`
  border-radius: 50%;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const PlayerName = styled.h2``;

export const DescriptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  max-width: 150px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DescriptionTitle = styled.span``;

export const DescriptionValue = styled.span``;

export const PlayerStatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;

export const StatsCell = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #E3E3E3;
`;

export const StatsTitle = styled.span`
  font-weight: 500;
`;

export const StatsValue = styled.span``;
