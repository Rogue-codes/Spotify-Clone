import axios from "axios";
import React, { useEffect } from "react";
import styled from "styled-components";
import { useAppContext } from "../../utils/AppProvider";
import { reducerCases } from "../../utils/Constants";

export default function Playlist() {
  const [{ token, playlists }, dispatch] = useAppContext();
  useEffect(() => {
    const getPlaylist = async () => {
      const res = await axios.get("https://api.spotify.com/v1/me/playlists", {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });
      const { items } = res.data;
      const playlists = items.map(({ name, id }) => {
        return { name, id };
      });
      dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
    };
    getPlaylist();
  }, [token, dispatch]);

  const changeCurrentPlaylist = (selectedPlaylistId) => {
    dispatch({ type: reducerCases.SET_PLAYLIST_Id, selectedPlaylistId });
  };
  return (
    <Container>
      <ul className="list">
        {playlists.map(({ name, id }) => {
          return <li key={id} onClick={()=>changeCurrentPlaylist(id)}>{name}</li>;
        })}
      </ul>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  .list {
    margin-top: 1.25rem;
    border-bottom: none;
    padding: 0;
    height: 50vh;
    max-height: 100%;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 0.7rem;
      &-thumb {
        background-color: rgba(255, 255, 255, 0.6);
      }
    }
    li {
      font-size: 1.1rem;
      font-weight: 400;
      color: white;
      margin-bottom: 1.13rem;
    }
  }
`;
