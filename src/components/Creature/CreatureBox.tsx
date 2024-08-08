import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import WHF4eCreatureBlock from '../WFRP4eCreatureBlock';


interface CreatureBoxProps {
    width: string,
    height: string,
    roleplaySystem: string,
    creature: { name: string, fileName: string, tags: string[] }

}

function CreatureBox(props: CreatureBoxProps) {
    return (
        <div style={{ 'width': props.width, 'height': props.height }}>
            {props.roleplaySystem === 'WFRP4e' ?
                <WHF4eCreatureBlock
                    creature={props.creature}
                /> : null
            }
            Tags: {props.creature.tags}
        </div>
    );
}

export default CreatureBox;
