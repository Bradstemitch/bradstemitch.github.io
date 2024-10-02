import React from 'react';
import logo from './logo.svg';
import { Link, Outlet, Route, Routes } from 'react-router-dom';

function CharacterPage(props: any) {
    let character
    let error = false
    try {
        character = require(`../../data/characters/${props.creature.fileName}`);
    } catch (e) {
        error = true
    }
    return (
        <div>
            <h1 style={{ marginLeft: "5%" }}>Lyra Vitae</h1>
            <table style={{ backgroundColor: "darkred", width: "100%", height: "50px", tableLayout: "fixed", textAlign: "center" }}>
                <tr style={{ color: "white" }}>
                    <td />
                    <td />
                    <th>
                        Overview
                    </th>
                    <th>
                        Abilities
                    </th>
                    <td />
                    <td />
                </tr>
            </table>
        </div>
    );
}

export default CharacterPage;
