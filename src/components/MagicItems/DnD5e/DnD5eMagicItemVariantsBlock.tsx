import React from 'react';
import DnD5eMagicItemBlock from './DnD5eMagicItemBlock';

interface DnD5eMagicItemBlockProps {
    item: any
}

function DnD5eMagicItemVariantsBlock(props: DnD5eMagicItemBlockProps) {
    return (
        <div>
            {props.item.variants.map((variant:any) => (
                <DnD5eMagicItemBlock name={props.item.name + ' ' + variant.name} fileName={props.item.fileName + variant.fileName} />
            )
            )}
        </div>

    );
}

export default DnD5eMagicItemVariantsBlock;
