import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import { MagicItemList } from '../../data/MagicItem';
import MagicItem from './MagicItem';

const types = ['Wondrous Item']
const Rarity = ['Rare']

function MagicItemsRouting(props: any) {
    return (
        <Routes>
            <Route path='/' element={
                <div>
                    <Outlet />
                </div>
            }>

                <Route index element={
                    <div>
                        <h2>Magic Items</h2>
                        {/* {types.map(type => (
                            <>
                                <div>{type}s</div> */}
                                {MagicItemList.map(item => (
                                    // <li key={creature.fileName + '-creaturePage-li'}>
                                    <Link
                                        key={item.fileName + '-creaturePage-Link'}
                                        to={`/magicItems/${item.fileName}`}
                                    >
                                        <button>
                                            {item.name}
                                        </button>
                                    </Link>
                                    // </li>
                                ))}
                                <br />
                            {/* </>
                        ))} */}
                    </div>
                } />

                {MagicItemList.map(item => (
                    <Route
                        key={item.fileName + '-nationsPage-Route'}
                        path={item.fileName}
                        element={
                            <MagicItem
                                key={item.fileName + '-nationsPage-CreatureBox'}
                                width={'100%'} height={'auto'}
                                roleplaySystem={props.roleplaySystem}
                                item={item}
                            />}
                    />
                ))}
            </Route>
        </Routes>
    );
}

export default MagicItemsRouting;
