import React, { useState } from 'react';
import './App.css';
import { Routes, Route, Outlet, Link, HashRouter, BrowserRouter } from "react-router-dom";
import RoleplayRoutes from './modules/roleplayWebsite/components/Structure/RoleplayRoutes';

function App() {
  return (
    <HashRouter basename='/'>

      {/* <BrowserRouter basename='/memoirs-of-grund-wiki'> */}
      <Routes>
        <Route path={'/*'} element={
          <>
            <RoleplayRoutes />
            {/* <Outlet /> */}
          </>
        }>
          {/* <Route path='rpg/*' element={
          } /> */}
        </Route>
      </Routes>
      {/* </BrowserRouter> */}
    </HashRouter>
  );
}

export default App;

