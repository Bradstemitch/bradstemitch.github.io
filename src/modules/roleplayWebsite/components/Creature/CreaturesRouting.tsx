import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import { CreatureList } from '../../data/CreatureList';
import CreatureBox from './CreatureBox';

function CreaturesRouting(props: any) {
    return (
        <Routes>
            <Route path='/' element={
                <div>
                    <Outlet />
                </div>
            }>

                <Route index element={
                    <div>
                        <h2>Creatures</h2>
                        {CreatureList.map(creature => (
                            // <li key={creature.fileName + '-creaturePage-li'}>
                                <Link
                                    key={creature.fileName + '-creaturePage-Link'}
                                    to={`/creatures/${creature.fileName}`}
                                >
                                    <button>
                                        {creature.name}
                                    </button>
                                </Link>
                            // </li>
                        ))}
                    </div>
                } />

                {CreatureList.map(creature => (
                    <Route
                        key={creature.fileName + '-creaturePage-Route'}
                        path={creature.fileName}
                        element={
                            <CreatureBox
                                key={creature.fileName + '-creaturePage-CreatureBox'}
                                width={'100%'} height={'auto'}
                                roleplaySystem={props.roleplaySystem}
                                creature={creature}
                            />}
                    />
                ))}
            </Route>
        </Routes>
    );
}

export default CreaturesRouting;
