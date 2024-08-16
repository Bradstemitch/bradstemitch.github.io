import React from 'react';
import logo from './logo.svg';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import { CharacterList } from '../../data/CharacterList';
import CharacterPage from './CharacterPage';

function CharacterRouting(props: any) {
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
                        {CharacterList.map(character => (
                            // <li key={creature.fileName + '-creaturePage-li'}>
                                <Link
                                    key={character.fileName + '-creaturePage-Link'}
                                    to={`/characters/${character.fileName}`}
                                >
                                    <button>
                                        {character.name.fore} {character.name.sur}
                                    </button>
                                </Link>
                            // </li>
                        ))}
                    </div>
                } />

                {CharacterList.map(creature => (
                    <Route
                        key={creature.fileName + '-creaturePage-Route'}
                        path={creature.fileName}
                        element={
                            <CharacterPage
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

export default CharacterRouting;
