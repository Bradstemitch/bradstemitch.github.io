import React from 'react';
import logo from './logo.svg';

function AttributeTable(props: any) {
    return (
        <table>
            <tbody>
                <tr>
                    <th>M</th>
                    <th>WS</th>
                    <th>BS</th>
                    <th>S</th>
                    <th>T</th>
                    <th>I</th>
                    <th>Ag</th>
                    <th>Dex</th>
                    <th>Int</th>
                    <th>Wp</th>
                    <th>Fel</th>
                    <th>W</th>
                </tr>
                <tr>
                    <td>{props.move}</td>
                    <td>{props.characteristics.ws.initial}</td>
                    <td>{props.characteristics.bs.initial}</td>
                    <td>{props.characteristics.s.initial}</td>
                    <td>{props.characteristics.t.initial}</td>
                    <td>{props.characteristics.i.initial}</td>
                    <td>{props.characteristics.ag.initial}</td>
                    <td>{props.characteristics.dex.initial}</td>
                    <td>{props.characteristics.int.initial}</td>
                    <td>{props.characteristics.wp.initial}</td>
                    <td>{props.characteristics.fel.initial}</td>
                    <td>{props.wounds}</td>
                </tr>
            </tbody>
        </table>
    );
}

export default AttributeTable;
