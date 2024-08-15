import React from 'react';
import './DnD5eAttributeTable.css'

function DnD5eAttributeTable(props: any) {
    return (
        <table style={{'width':'auto'}}>
            <tbody>
                <tr>
                    <th>STR</th>
                    <th>DEX</th>
                    <th>CON</th>
                    <th>INT</th>
                    <th>WIS</th>
                    <th>CHA</th>
                </tr>
                <tr style={{'textAlign':'center'}}>
                    <td>{props.characteristics.str.value}</td>
                    <td>{props.characteristics.dex.value}</td>
                    <td>{props.characteristics.con.value}</td>
                    <td>{props.characteristics.int.value}</td>
                    <td>{props.characteristics.wis.value}</td>
                    <td>{props.characteristics.cha.value}</td>
                </tr>
            </tbody>
        </table>
    );
}

export default DnD5eAttributeTable;
