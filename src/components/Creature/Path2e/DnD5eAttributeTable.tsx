import React from 'react';
import './DnD5eAttributeTable.css'

function DnD5eAttributeTable(props: any) {

    return (
        <table style={{ 'width': 'auto' }}>
            <tbody>
                <tr>
                    <th>STR</th>
                    <th>DEX</th>
                    <th>CON</th>
                    <th>INT</th>
                    <th>WIS</th>
                    <th>CHA</th>
                </tr>
                <tr style={{ 'textAlign': 'center' }}>
                    <td>{props.characteristics.str} {props.characteristics.strMod >= 0 ? ' (+' : ' (-'}{props.characteristics.strMod}{')'} </td>
                    <td>{props.characteristics.dex} {props.characteristics.dexMod >= 0 ? ' (+' : ' (-'}{props.characteristics.dexMod}{')'} </td>
                    <td>{props.characteristics.con} {props.characteristics.conMod >= 0 ? ' (+' : ' (-'}{props.characteristics.conMod}{')'} </td>
                    <td>{props.characteristics.int} {props.characteristics.intMod >= 0 ? ' (+' : ' (-'}{props.characteristics.intMod}{')'} </td>
                    <td>{props.characteristics.wis} {props.characteristics.wisMod >= 0 ? ' (+' : ' (-'}{props.characteristics.wisMod}{')'} </td>
                    <td>{props.characteristics.cha} {props.characteristics.chaMod >= 0 ? ' (+' : ' (-'}{props.characteristics.chaMod}{')'} </td>
                </tr>
            </tbody>
        </table>
    );
}

export default DnD5eAttributeTable;
