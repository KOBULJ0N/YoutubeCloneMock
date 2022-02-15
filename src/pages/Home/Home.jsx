import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
// import Body from "../../components/Body/Body";

// components
// import { Routes, Route } from "react-router-dom";

import { sidebar } from '../../mock/sidebar';

const Home = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <Routes>
        {sidebar.map(({ component: Comp, path, id }) => (
          <Route key={id} path={path} element={<Comp />} />
        ))}
        <Route path='/' element={<Navigate to={'/home'} />} />
        <Route path='*' element={<h1>Not found</h1>} />
      </Routes>
    </div>
  );
};

export default Home;
