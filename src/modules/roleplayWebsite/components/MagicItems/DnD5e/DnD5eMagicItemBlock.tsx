import React from 'react';

interface DnD5eMagicItemBlockProps {
    name: string,
    fileName: string
}

function DnD5eMagicItemBlock(props: DnD5eMagicItemBlockProps) {
    const item = require(`../../../data/magicItems/DnD5e/fvtt-${props.fileName}.json`)
    return (
        <div>
            <div>
                <h2>{props.name}</h2>
                {/* <em>{props.item.type}, {props.item.rarity} {props.item.attunement}</em> */}
            </div>
            <br/>
            {/* <em>{props.item.description}</em> */}
        </div>
        
    );
}

export default DnD5eMagicItemBlock;
