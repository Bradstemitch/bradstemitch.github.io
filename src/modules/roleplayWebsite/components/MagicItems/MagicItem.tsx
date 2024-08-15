import React from 'react';
import { magicWeapon } from '../../data/MagicItem';

interface MagicItemProps {
    width: string,
    height: string,
    roleplaySystem: string,
}

function MagicItem(props: MagicItemProps) {
    return (
        <div style={{
            'width':props.width, 
            'height':props.width, 
            }}>
            <div>
                <h2>{magicWeapon.name}</h2>
                <em>{magicWeapon.type}, {magicWeapon.rarity} {magicWeapon.attunement}</em>
            </div>
            <em>{magicWeapon.description}</em>
        </div>
    );
}

export default MagicItem;
