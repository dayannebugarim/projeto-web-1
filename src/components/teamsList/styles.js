import styled from "styled-components";

export const TeamsContainer = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const TeamContainer = styled.li`
  display: flex;
  gap: 1.5rem;
  justify-content: space-between;
  align-items: center;
  background-color: #2B383E;
  padding: 1rem;
  border-radius: 6px;
`;

export const TeamInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
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
  max-height: 32px;
`;

export const TeamName = styled.h4``;

export const DetailsButton = styled.button`
  background-color: #30C3A2;
  color: #17232C;
  padding: 0.4rem 0.8rem;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;

  transition: all 0.2s;

  &:hover {
    background-color: #29A88B;
    box-shadow: inset 0 0 0 1px #30C3A2;
  }
`;
