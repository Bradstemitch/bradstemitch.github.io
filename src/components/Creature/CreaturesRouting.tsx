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
                        {CreatureList.map(creatureType => {
                            return (
                                <div key={Object.keys(creatureType).toString() + '-creaturesRouting-creatureType-div'}>
                                    <h4 key={Object.keys(creatureType).toString() + '-creaturesRouting-creatureType-header'}>
                                        {Object.keys(creatureType).toString()}
                                    </h4>
                                    {Object.values(creatureType)[0].map((creature: any) => (
                                        // <li key={creature.fileName + '-creaturePage-li'}>
                                        <Link
                                            key={creature.fileName + '-creaturesRouting-creature-Link'}
                                            to={`/creatures/${creature.fileName}`}
                                        >
                                            <button key={creature.fileName + '-creaturesRouting-creature-Button'}>
                                                {creature.name}
                                            </button>
                                        </Link>
                                        // </li>
                                    ))}
                                </div>
                            )
                        })}
                    </div>
                } />

                {CreatureList.map(creatureType => (
                    Object.values(creatureType)[0].map((creature: any) => (
                        <Route
                            key={creature.fileName + '-creaturesRouting-creature-Route'}
                            path={creature.fileName}
                            element={
                                <CreatureBox
                                    key={creature.fileName + '-creaturesRouting-creature-CreatureBox'}
                                    width={'100%'} height={'auto'}
                                    roleplaySystem={props.roleplaySystem}
                                    creature={creature}
                                />}
                        />
                    ))
                ))}
            </Route>
        </Routes>
    );
}

export default CreaturesRouting;
