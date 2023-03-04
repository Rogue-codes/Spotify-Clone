import React from "react";
import styled from "styled-components";
import { logo } from "../../assets";
function Login() {
  const handleClick = () => {
    const clientId = "cfdac85553ff40d38bde5e798f60e84c";
    const redirectURL = "http://127.0.0.1:5173/";
    const apiURL = "https://accounts.spotify.com/authorize";
    const scopes = [
      "user-read-email",
      "user-read-private",
      "user-read-playback-state",
      "user-modify-playback-state",
      "user-read-currently-playing",
    ];
    window.location.href = `${apiURL}?client_id=${clientId}&redirect_uri=${redirectURL}&scope=${scopes.join(
      " "
    )}&response_type=token&show_dialog=true`;
  };
  return (
    <Container>
      <img src={logo} alt="" />
      <button onClick={handleClick}>Connect Spotify</button>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #1db954;
  gap: 5rem;
  img {
    height: 20vh;
  }
  button {
    padding: 1rem 5rem;
    border-radius: 5rem;
    background: #000;
    color: #49f585;
    cursor: pointer;
    font-size: 1.4rem;
  }
`;
