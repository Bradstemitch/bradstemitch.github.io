import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import RoleplayWebsite from './modules/roleplayWebsite/components/Structure/RoleplayRoutes';

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;

