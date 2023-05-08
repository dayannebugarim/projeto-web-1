import { useEffect, useState, useRef } from "react";
import getData from "../../services/api";
import { PlayerContainer, PlayerImg, PlayerName } from "./styles";

export default function PlayerCard({ data, setPlayerId, setOpenDetails }) {
  function setPlayerDetails() {
    setPlayerId(data.player.id);
    setOpenDetails(true);
    console.log("clicked");
  }

  return (
    <>
      <PlayerContainer onClick={() => setPlayerDetails()}>
        <PlayerImg src={data.player.photo} />
        <PlayerName>{data.player.name}</PlayerName>
      </PlayerContainer>
    </>
  );
}
