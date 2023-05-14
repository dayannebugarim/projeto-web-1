import styled from "styled-components";

export const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  background-color: #2B383E;
  padding: 1.2rem;
  border-radius: 6px;
`;

export const BarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 8px;
  background-color: gray;
  border-radius: 50px;
  overflow: hidden;
`;

export const WinsBar = styled.div`
  background-color: #30c3a2;
`;

export const DrawsBar = styled.div`
  background-color: antiquewhite;
`;

export const LossesBar = styled.div`
  background-color: #ee6280;
`;

export const StatsInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InfoContainerWithBorder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding-right: 1rem;

  border-right: 1px solid #384348;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const InfoTitle = styled.span`
  color: #d4d4d4;
`;

export const InfoValue = styled.span``;
