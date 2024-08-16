import React from 'react';
import { magicWeapon } from '../../data/MagicItem';
import DnD5eMagicItemBlock from './DnD5e/DnD5eMagicItemBlock';
import DnD5eMagicItemVariantsBlock from './DnD5e/DnD5eMagicItemVariantsBlock';

interface MagicItemProps {
    width: string,
    height: string,
    roleplaySystem: string,
    item: any,
}

function MagicItem(props: MagicItemProps) {
    return (
        <div style={{
            'width': props.width,
            'height': props.width,
        }}>

            <div>
                <h2>{props.item.name}</h2>
                {props.roleplaySystem === 'DnD5e' ?
                    (props.item.variants.length > 1 ?
                        <DnD5eMagicItemVariantsBlock item={props.item}/>
                        : <DnD5eMagicItemBlock name={props.item.name} fileName={props.item.fileName} />)
                    : null
                }
            </div>
        </div>

    );
}

export default MagicItem;
