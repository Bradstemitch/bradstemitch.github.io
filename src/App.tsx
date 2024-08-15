import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Outlet, Link, HashRouter } from "react-router-dom";
import RoleplayWebsite from './modules/roleplayWebsite/components/Structure/RoleplayRoutes';

function App() {
  return (
    <HashRouter basename='/'>
      <Routes>
        <Route path={'/'} element={
          <>
            <Outlet />
          </>
        }>
          <Route path='rpg/*' element={
            <RoleplayWebsite />
          } />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;

