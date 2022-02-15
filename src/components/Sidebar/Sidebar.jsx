import React, { useContext } from 'react';
import { SideBar } from './style';
import { MovieContext } from '../../context/movie';
import './sidebar.css';

import { NavLink } from 'react-router-dom';
import { sidebar } from '../../mock/sidebar';
import { ReactComponent as ShowMoreSvg } from '../../assets/icons/downarrow.svg';

const Sidebar = () => {
  const [state] = useContext(MovieContext);
  return (
    <SideBar>
      {sidebar.map(({ id, title, path, svg: Svg, icons: Icon }) => (
        <NavLink
          className='Link'
          key={id}
          style={({ isActive }) => ({
            background: isActive ? 'rgba(255, 255, 255, 0.2)' : '#212121',
          })}
          to={path}
          children={({ isActive }) => ({
            fill: isActive ? 'red' : 'white',
          })}
        >
          <Svg />

          {title}
        </NavLink>
      ))}

      <SideBar.Line />

      <SideBar.Title>Subscriptions</SideBar.Title>
      {state.slice(0, 7).map((value) => {
        return (
          <SideBar.Chanels key={value.id}>
            <SideBar.User>
              <img src={value.user} alt='' />
              <SideBar.ChanelName>{value.title}</SideBar.ChanelName>
            </SideBar.User>
            <img src={value.status} alt='' />
          </SideBar.Chanels>
        );
      })}
      <SideBar.ShowMore>
        <ShowMoreSvg />
        <SideBar.Heading>Show more</SideBar.Heading>
      </SideBar.ShowMore>

      <SideBar.Line />

      <SideBar.ShowMore>
        TermsPrivacyPolicy & SafetyHow YouTube worksTest new features © 2021
        Google LLC
      </SideBar.ShowMore>
    </SideBar>
  );
};

export default Sidebar;
