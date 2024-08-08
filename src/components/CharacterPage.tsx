import React from 'react';
import logo from './logo.svg';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import WHF4eCreatureBlock from './WFRP4eCreatureBlock';

function CharacterPage(props: any) {
    return (
        <div>
            <h1 style={{ marginLeft: "5%" }}>Lyra Vitae</h1>
            <table style={{ backgroundColor: "darkred", width: "100%", height: "50px", tableLayout:"fixed", textAlign:"center"}}>
                <tr style={{color:"white"}}>
                    <td/>
                    <td/>
                    <th>
                        Overview
                    </th>
                    <th>
                        Abilities
                    </th>
                    <td/>
                    <td/>
                </tr>
            </table>
        </div>
    );
}

export default CharacterPage;
