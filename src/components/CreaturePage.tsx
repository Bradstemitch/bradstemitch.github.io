import React from 'react';
import logo from './logo.svg';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import WHF4eCreatureBlock from './WHF4eCreatureBlock';

function CreaturePage(props: any) {
    return (
        <Routes>
            <Route
                path={`/${props.creature.fileName}`}
                element={
                    <div>
                        <h2>
                            {props.creature.name}
                        </h2>
                        <Link to={`/${props.creature.fileName}/DnD5e`}>D&D 5e</Link>
                        <Link to={`/${props.creature.fileName}/Path2e`}>Pathfinder 2e</Link>
                        <Link to={`/${props.creature.fileName}/WHF4e`}>WHF4e</Link>
                        <Outlet />
                    </div>
                }>
                <Route
                    index
                    element={<></>}
                />
                {/* <Route
                    path={"DnD5e"}
                    element={
                        <WHF4eCreatureBlock
                            creature={require(`../creatures/Dnd5e/fvtt-${props.creature.fileName}.json`)}
                        />}
                /> */}
                {/* <Route
                    path={"Path2e"}
                    element={
                        <WHF4eCreatureBlock
                            creature={require(`../creatures/Path2e/fvtt-${props.creature.fileName}.json`)}
                        />}
                /> */}
                <Route
                    path={"WHF4e"}
                    element={
                        <WHF4eCreatureBlock
                            creature={require(`../creatures/WHF4e/fvtt-${props.creature.fileName}.json`)}
                        />}
                />
                <Route path="contact" element={<></>} />
                <Route path="*" element={<></>} />
            </Route>
        </Routes>
    );
}

export default CreaturePage;
