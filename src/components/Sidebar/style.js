import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SideBar = styled.div`
  display: flex;
  width: 240px;
  background: #212121;
  flex-direction: column;
  position: fixed;
  overflow-y: auto;
  bottom: 0;
  overflow-x: hidden;
  top: 56px;

  &::-webkit-scrollbar {
    display: none;
    width: 10px;
    border-radius: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: none;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  &:hover::-webkit-scrollbar {
    display: block;
  }
`;

export const StyledLink = styled(NavLink)`
  color: #fff;
  display: flex;
  box-sizing: border-box;
  padding: 15px 40px 15px 24px;
  align-items: center;
  border: none;
  background: #212121;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  margin-left: 24px;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  /* &.${(props) => props.isActive} {
    svg {
      path {
        opacity: 1;
        fill: red;
        color: black;
      }
    }
    div {
      opacity: 1;
      color: red;
    }
  } */
`;

SideBar.Heading = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  margin-left: 24px;
`;

SideBar.Line = styled.div`
  width: 200px;
  height: 2px;
  background: #4d4d4d;
`;

SideBar.Title = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 16px;
  color: rgba(255, 255, 255, 0.6);
  padding: 15px 40px 15px 24px;
`;
SideBar.Chanels = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 15px 30px 15px 24px;
  justify-content: space-between;
`;
SideBar.User = styled.div`
  display: flex;
`;
SideBar.ChanelName = styled.div`
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  margin-left: 20px;
`;

SideBar.ShowMore = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  color: grey;
  padding: 15px 40px 15px 24px;
`;
