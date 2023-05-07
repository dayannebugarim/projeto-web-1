import { useEffect, useState, useRef } from "react";
import getData from "../../services/api";
import {
  PlayerContainer,
  PlayerImg,
  PlayerName,
} from "./styles";

export default function PlayerCard({ data }) {
  return (
    <>
      <PlayerContainer>
        <PlayerImg src={data.player.photo} />
        <PlayerName>{data.player.name}</PlayerName>
      </PlayerContainer>
    </>
  );
}
