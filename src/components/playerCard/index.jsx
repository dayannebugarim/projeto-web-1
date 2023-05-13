import { PlayerContainer, PlayerImg, PlayerName } from "./styles";

export default function PlayerCard({ data, setPlayerId, setOpenDetails }) {
  // function setPlayerDetails() {
  //   setPlayerId("1");
  //   setOpenDetails(true);
  //   console.log("clicked");
  // }

  const setPlayerDetails = () => {
    setPlayerId(data.player.id);
    setOpenDetails(true);
    console.log("clicked");
  };

  return (
    <>
      <PlayerContainer onClick={() => setPlayerDetails()}>
        <PlayerImg src={data.player.photo} />
        <PlayerName>{data.player.name}</PlayerName>
      </PlayerContainer>

      {/* <PlayerContainer onClick={() => setPlayerDetails()}>
        <PlayerImg src="https://media-2.api-sports.io/football/players/10351.png" />
        <PlayerName>David Duarte</PlayerName>
      </PlayerContainer> */}
    </>
  );
}
