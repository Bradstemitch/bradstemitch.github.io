import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import WHF4eCreatureBlock from './components/WFRP4eCreatureBlock';
import CreaturePage from './components/CreaturePage';
import CharacterPage from './components/CharacterPage';
import MagicItem from './components/MagicItems/MagicItem';
import { CreatureList } from './data/CreatureList';
import Layout from './components/Layout/Layout';
import CreatureBox from './components/Creature/CreatureBox';


const context = require.context('./creatures', true, /.json$/);
let all: any[] = [];
context.keys().forEach((key: any) => {
  console.log("test")
  const fileName = key.replace('./', '');
  const resource = require(`./creatures/${fileName}`);
  //all.push(JSON.parse(JSON.stringify(resource)));
});


function App() {
  const [roleplaySystem, setRoleplaySystem] = useState<string>('D&D5E')
  const [selectedCreature, setSelectedCreature] = useState<string>('')

  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Layout setRoleplaySystem={setRoleplaySystem} />}>
          <Route index element={
            <div>
              <Link to={`/creatures`}>creatures</Link>
              <Link to={`/magic`}>magic</Link>
            </div>
          } />

          <Route path='creatures/*' element={
            <CreaturePage roleplaySystem={roleplaySystem} />
          } />

          <Route path='Magic' element={
            <MagicItem
              width={'30%'}
              height={'100%'}
              roleplaySystem={roleplaySystem}
            />
          }>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

