import styled from "styled-components";

export const PlayerContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem;
  cursor: pointer;
  background-color: #2b383e;
  border-radius: 6px;

  &:hover {
    background-color: rgba(48, 195, 162, 0.3);
    transition: 0.3s ease-out;
  }
`;

export const PlayerImg = styled.img`
  max-width: 40px;
  border-radius: 50%;
  background-color: #fff;
`;

export const PlayerName = styled.span`
  text-align: center;
  color: #d4d4d4;
`;
