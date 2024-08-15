import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from './RoleplayLayout';
import CreaturePage from '../Creature/CreaturePage';
import MagicItem from '../MagicItems/MagicItem';

function RoleplayWebsite() {
    const [roleplaySystem, setRoleplaySystem] = useState<string>('DnD5e')

    return (
        <Routes>
            <Route path={'/'} element={
                <>
                    <Layout setRoleplaySystem={setRoleplaySystem} />
                    {roleplaySystem}
                </>
            }>
                <Route index element={
                    <div>
                        Hello, Welcome to the Grund Wiki
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
    );
}

export default RoleplayWebsite;

