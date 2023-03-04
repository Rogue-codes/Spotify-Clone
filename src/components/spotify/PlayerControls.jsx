import React from "react";
import styled from "styled-components";
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsShuffle,
} from "react-icons/bs";
import { CgPlayTrackNext, CgPlayTrackPrev } from "react-icons/cg";
import { FiRepeat } from "react-icons/fi";
import { useAppContext } from "../../utils/AppProvider";
import axios from "axios";
import { reducerCases } from "../../utils/Constants";

export default function PlayerControls() {
  const [{ token, playerState }, dispatch] = useAppContext();

  const NextPrev = async (type) => {
    await axios.post(
      `https://api.spotify.com/v1/me/player/${type}`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    dispatch({ type: reducerCases.SET_PLAYER_STATE, playerState: true });
    const response1 = await axios.get(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    if (response1.data !== "") {
      const currentlyPlaying = {
        id: response1.data.item.id,
        name: response1.data.item.name,
        artists: response1.data.item.artists.map((artist) => artist.name),
        image: response1.data.item.album.images[2].url,
      };
      dispatch({ type: reducerCases.CURRENTLY_PLAYING, currentlyPlaying });
    } else {
      dispatch({ type: reducerCases.CURRENTLY_PLAYING, currentlyPlaying: null });
    }
  };

  const pausePlay = async() => {
    const state = playerState ? "pause" : "play";
    await axios.put(
        `https://api.spotify.com/v1/me/player/${state}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      dispatch({ type: reducerCases.SET_PLAYER_STATE, playerState: !playerState})
  }
  return (
    <Container>
      <div className="shuffle">
        <BsShuffle />
      </div>
      <div className="previous">
        <CgPlayTrackPrev onClick={() => NextPrev("previous")} />
      </div>
      <div className="state">
        {playerState ? <BsFillPauseCircleFill onClick={pausePlay}/> : <BsFillPlayCircleFill onClick={pausePlay}/>}
      </div>
      <div className="next">
        <CgPlayTrackNext onClick={() => NextPrev("next")} />
      </div>
      <div className="repeat">
        <FiRepeat />
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  svg {
    color: #b3b3b3;
    transition: 0.2s ease-in-out;
    &:hover {
      color: white;
    }
  }
  .state {
    svg {
      color: white;
    }
  }
  .previous,
  .next,
  .state {
    font-size: 2rem;
  }
`;
