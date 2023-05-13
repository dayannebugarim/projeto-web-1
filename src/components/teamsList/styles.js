import styled from "styled-components";

export const TeamsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const TeamContainer = styled.li`
  display: flex;
  gap: 1.5rem;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 1rem;
  border-bottom: 2px solid aliceblue;
`;

export const TeamInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const TeamLogo = styled.img`
  max-width: 32px;
  max-height: 32px;
`;

export const TeamName = styled.h4``;

export const DetailsButton = styled.button`
  background-color: aquamarine;
  padding: 0.4rem 0.8rem;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;

  transition: all 0.2s;

  &:hover {
    background-color: transparent;
    box-shadow: inset 0 0 0 2px aquamarine;
    color: aquamarine;
    font-weight: 600;
  }
`;
