import { useEffect, useState, useRef } from "react";
import getData from "../../services/api";
import { PlayerContainer, PlayerImg, PlayerName } from "./styles";

export default function PlayerCard({ data, setPlayerId, setOpenDetails }) {
  function setPlayerDetails() {
    setPlayerId("1");
    setOpenDetails(true);
    console.log("clicked");
  }

  return (
    <>
      <PlayerContainer onClick={() => setPlayerDetails()}>
        <PlayerImg src="https://media-2.api-sports.io/football/players/10351.png" />
        <PlayerName>David Duarte</PlayerName>
      </PlayerContainer>
    </>
  );
}
