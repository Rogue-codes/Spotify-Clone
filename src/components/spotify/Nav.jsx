import React from "react";
import styled from "styled-components";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { useAppContext } from "../../utils/AppProvider";
export default function Nav({navbackground}) {
  const [{ user }] = useAppContext();
  return (
    <Container bg={navbackground ? "rgba(0,0,0,0.7)" : "none"}>
      <div className="direction">
        <CiCircleChevLeft color="white" size="2.5rem" cursor="pointer" />
        <CiCircleChevRight color="white" size="2.5rem" cursor="pointer" />
      </div>
      <div className="profile">
        <FaUserCircle color="white" size="1.5rem" cursor="pointer" />{" "}
        {/* {user.display_name} */}
      </div>
    </Container>
  );
}

const Container = styled.nav`
  position: fixed;
  left: 20%;
  top: 0;
  background-color: ${props=>props.bg};
  transition: all .5s ease-in-out;
  z-index: 90;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  padding: 1.25rem 2.6rem;
  .direction {
    display: flex;
    gap: 1.4rem;
  }
  .profile {
    padding: 0.6rem 2rem;
    border-radius: 40px;
    width: 13.4rem;
    color: white;
    background: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2%;
  }
`;
