import styled from "styled-components";

export const Container = styled.div`
    display: ${props => props.open ? 'flex' : 'none'};
    opacity: ${props => props.open ? 1 : 0};
    z-index: 99;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: lightgray;
    width: 50vw;
    min-height: 50vh;
    border-radius: 6px;
    box-shadow: 0px 2px gray;
`;

export const TeamDetailsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const TeamHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`;

export const CloseButton = styled.button`
    width: fit-content;
`;

export const TeamLogo = styled.img`
    max-width: 36px;
`;

export const TeamName = styled.h2``;

export const TeamFoundation = styled.span``;

export const LeagueContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`;

export const LeagueLogo = styled.img``;

export const LeagueName = styled.span``;

export const TeamContainer = styled.li`
    display:  flex;
    flex-direction: column;
    gap: 1.5rem;
`;

export const Divider = styled.span``;

export const PlayersContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
`;
