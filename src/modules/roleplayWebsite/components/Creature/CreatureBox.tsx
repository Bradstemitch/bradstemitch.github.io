import React from 'react';
import WHF4eCreatureBlock from './WFRP4e/WFRP4eCreatureBlock';
import DnD5eCreatureBlock from './DnD5e/DnD5eCreatureBlock';


interface CreatureBoxProps {
    width: string,
    height: string,
    roleplaySystem: string,
    creature: { name: string, fileName: string, tags: string[] }

}

function CreatureBox(props: CreatureBoxProps) {
    return (
        <div style={{ 'width': props.width, 'height': props.height }}>
            <h2>{props.creature.name}</h2>
            {props.roleplaySystem === 'DnD5e' ?
                <DnD5eCreatureBlock
                    creature={props.creature}
                /> : null
            }
            {props.roleplaySystem === 'WFRP4e' ?
                <WHF4eCreatureBlock
                    creature={props.creature}
                /> : null
            }
            <br />
            Tags: {props.creature.tags}
        </div>
    );
}

export default CreatureBox;
