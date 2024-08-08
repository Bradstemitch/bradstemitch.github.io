import React from 'react';
import logo from './logo.svg';
import { Link, Outlet, Route, Routes } from 'react-router-dom';

interface LayoutProps {
    setRoleplaySystem: Function
}

function Layout(props: LayoutProps) {
    return (
        <div>
            <div>
                <button onClick={(event) => props.setRoleplaySystem('D&D5E')}>D&D 5e</button>
                <button onClick={(event) => props.setRoleplaySystem('Path2e')}>Pathfinder 2e</button>
                <button onClick={(event) => props.setRoleplaySystem('WFRP4e')}>Warhammer 4e</button>
            </div>

            <Link to={'/'}>Home</Link>
            <Outlet />
        </div>
    );
}

export default Layout;
