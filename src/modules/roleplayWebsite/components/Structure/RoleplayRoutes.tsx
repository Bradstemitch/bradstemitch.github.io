import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import RoleplayLayout from './RoleplayLayout';
import CreaturesRouting from '../Creature/CreaturesRouting';
import MagicItem from '../MagicItems/MagicItem';
import NationsRouting from '../Nations/NationsRouting';
import CharacterPage from '../Characters/CharacterPage';
import CharacterRouting from '../Characters/CharacterRouting';
import MagicItemsRouting from '../MagicItems/MagicItemsRouting';

function RoleplayRoutes() {
    const [roleplaySystem, setRoleplaySystem] = useState<string>('DnD5e')

    return (
        <Routes>
            <Route path={'/*'} element={
                <>
                    <RoleplayLayout setRoleplaySystem={setRoleplaySystem} />
                </>
            }>
                <Route index element={
                    <div>
                        Hello, Welcome to the Grund Wiki
                    </div>
                } />

                <Route path='creatures/*' element={
                    <CreaturesRouting roleplaySystem={roleplaySystem} />
                } />

                <Route path='armoury/*' element={
                    <div></div>
                }/>

                <Route path='magicItems/*' element={
                    <MagicItemsRouting roleplaySystem={roleplaySystem} />
                }/>

                <Route path='characters/*' element={
                    <CharacterRouting />
                }/>

                <Route path='nations/*' element={
                    <NationsRouting />
                }/>
            </Route>
        </Routes>
    );
}

export default RoleplayRoutes;

