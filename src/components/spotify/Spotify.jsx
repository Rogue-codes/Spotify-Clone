import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useAppContext } from "../../utils/AppProvider";
import { reducerCases } from "../../utils/Constants";
import Body from "./Body";
import Footer from "./Footer";
import Nav from "./Nav";
import SideNav from "./SideNav";

export default function Spotify() {
  const [{ token }, dispatch] = useAppContext();
  const [navbackground, setNavBackground] = useState(false);
  const [headerbackground, setHeaderBackground] = useState(false);
  const bodyRef = useRef();
  const bodyScrolled = () => {
    bodyRef.current.scrollTop >= 30
      ? setNavBackground(true)
      : setNavBackground(false);
    bodyRef.current.scrollTop >= 268
      ? setHeaderBackground(true)
      : setHeaderBackground(false);
  };
  console.log(navbackground);
  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });
      const { data } = res;
      const user = data;
      dispatch({ type: reducerCases.SET_USER, user });
    };

    getUser();
  }, [token, dispatch]);
  return (
    <Container>
      <div className="content">
        <div className="sidebar">
          <SideNav />
        </div>
        <div className="main">
          <div className="body" ref={bodyRef} onScroll={bodyScrolled}>
            <div className="nav">
              <Nav navbackground={navbackground} />
            </div>
            <Body headerbackground={headerbackground} />
          </div>
          <div className="footer">
            <Footer/>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.aside`
  width: 100%;
  height: 100vh;
  .content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .sidebar {
      width: 20%;
      height: 100%;
      background: #000;
      overflow: hidden;
    }
    .main {
      width: 80%;
      height: 100%;
      background: linear-gradient(transparent, rgba(0, 0, 0, 1));
      background-color: rgb(32, 81, 100);
      .body {
        .nav {
          width: 100%;
          height: 15%;
          position: relative;
        }
        width: 100%;
        height: 85%;
        overflow-y: scroll;
      }
      .footer {
        width: 100%;
        height: 15%;
        background: #000;
      }
    }
  }
`;
