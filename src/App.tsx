import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import WHF4eCreatureBlock from './components/WHF4eCreatureBlock';
import CreaturePage from './components/CreaturePage';
import CharacterPage from './components/CharacterPage';

const CreatureList = [
  {
    "name": "Select-Fyrd",
    "fileName": "MessanSelectFyrd"
  },
  {
    "name": "Huscarl",
    "fileName": "MessanHuscarl"
  }
]

const context = require.context('./creatures', true, /.json$/);
let all: any[] = [];
context.keys().forEach((key: any) => {
  console.log("test")
  const fileName = key.replace('./', '');
  const resource = require(`./creatures/${fileName}`);
  //all.push(JSON.parse(JSON.stringify(resource)));
});
// console.log(all[0].name)


function App() {

  return (
    <BrowserRouter>
      <Link to={'/'}>Home</Link>
      <CharacterPage />

      <Routes>
        <Route
          path={'/'}
          element={
            <div>
              {CreatureList.map(creature => (
                <Link to={`/${creature.fileName}`}>{creature.name}</Link>
              ))}
            </div>
          }>
        </Route>
      </Routes>

      {CreatureList.map(creature => (
        <CreaturePage creature={creature} />
      ))}
    </BrowserRouter>
  );
}

export default App;

