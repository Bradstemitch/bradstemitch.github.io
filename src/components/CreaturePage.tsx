import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import { CreatureList } from '../data/CreatureList';
import CreatureBox from './Creature/CreatureBox';

function CreaturePage(props: any) {
    return (
        <Routes>
            <Route path='/' element={
                <div>
                    <Link to={'/creatures'}>Creatures</Link>
                    <Outlet />
                </div>
            }>

                <Route index element={
                    <div>
                        {CreatureList.map(creature => (
                            <li>
                                <Link to={`/creatures/${creature.fileName}`}>{creature.name}</Link>
                            </li>
                        ))}
                    </div>
                } />

                {CreatureList.map(creature => (
                    <Route path={creature.fileName} element={<CreatureBox width={'100%'} height={'auto'} roleplaySystem={props.roleplaySystem} creature={creature} />} />
                ))}
            </Route>
        </Routes>
    );
}

export default CreaturePage;
