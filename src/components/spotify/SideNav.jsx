import React from "react";
import styled from "styled-components";
import { MdHomeFilled } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoLibrary } from "react-icons/io5";
import { spotify } from "../../assets";
import Playlist from "./Playlist";
export default function SideNav() {
  return (
    <Container>
      <img src={spotify} alt="" />
      <ul>
        <li>
          <MdHomeFilled size="1.5rem"/> <p>Home</p>
        </li>
        <li>
          <CiSearch size="1.5rem" /> <p>Search</p>
        </li>
        <li>
          <IoLibrary size="1.5rem"/> <p>Library</p>
        </li>
      </ul>

      <Playlist/>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  color: #b3b3b3;
  padding: 5%;
  img {
    max-inline-size: 50%;
    block-size: auto;
  }
  ul {
    margin-top: 4.4rem;
    border-bottom: 1px solid #282828;
    li {
      display: flex;
      align-items: center;
      font-weight: 700;
      font-size: 1.3rem;
      margin-bottom: 1.4rem;
      cursor: pointer;
      &:hover {
        color: #fff;
        transition: all 0.5s ease-in-out;
      }
      p{
        margin-left: 20px;
      }
    }
  }
`;
