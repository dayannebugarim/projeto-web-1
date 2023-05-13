import styled from "styled-components";

export const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
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
  background-color: aquamarine;
`;

export const DrawsBar = styled.div`
  background-color: antiquewhite;
`;

export const LossesBar = styled.div`
  background-color: red;
`;

export const StatsInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InfoTitle = styled.span``;

export const InfoValue = styled.span``;
