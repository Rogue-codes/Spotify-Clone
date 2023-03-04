import axios from "axios";
import React, { useEffect } from "react";
import styled from "styled-components";
import { useAppContext } from "../../utils/AppProvider";
import { reducerCases } from "../../utils/Constants";

export default function CurrentTrack() {
  const [{ token, currentlyPlaying }, dispatch] = useAppContext();
  useEffect(() => {
    const currentTrackFetch = async () => {
      const res = await axios.get(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res);
      if (res.data !== "") {
        const currentlyPlaying = {
          id: res.data.item.id,
          name: res.data.item.name,
          artists: res.data.item.artists.map((artist) => artist.name),
          image: res.data.item.album.images[2].url,
        };
        dispatch({ type: reducerCases.CURRENTLY_PLAYING, currentlyPlaying });
      } else {
        dispatch({
          type: reducerCases.CURRENTLY_PLAYING,
          currentlyPlaying: null,
        });
      }
    };
    currentTrackFetch();
  }, [token, dispatch]);
  return (
    <Container>
      {currentlyPlaying && (
        <div className="track">
          <div className="track__image">
            <img src={currentlyPlaying.image} alt="currentPlaying" />
          </div>
          <div className="track__info">
            <h4 className="track__info__track__name">{currentlyPlaying.name}</h4>
            <h6 className="track__info__track__artists">
              {currentlyPlaying.artists.join(", ")}
            </h6>
          </div>
        </div>
      )}
    </Container>
  );
}

const Container = styled.div`
  .track {
    display: flex;
    align-items: center;
    gap: 1rem;
    &__image {
    }
    &__info {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      &__track__name {
        color: white;
      }
      &__track__artists {
        color: #b3b3b3;
      }
    }
  }
`;
