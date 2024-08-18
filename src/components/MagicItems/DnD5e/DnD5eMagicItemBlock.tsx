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
                <div dangerouslySetInnerHTML={{__html: item.system.description.value}} />
            </div>
            <br/>
            {/* <em>{props.item.description}</em> */}
        </div>
        
    );
}

export default DnD5eMagicItemBlock;
