import styled from "styled-components";

export const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const BarContainer = styled.div`
    display: flex;
    width: 100%;
    height: 6px;
    border-radius: 50px;
    background-color: gray;
`;

export const WinsBar = styled.div`
    background-color: darkblue;
    width: 60%;
`;

export const DrawsBar = styled.div`
    background-color: antiquewhite;
    width: 20%;
`;

export const LossesBar = styled.div`
    background-color: darkmagenta;
    width: 20%;
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
