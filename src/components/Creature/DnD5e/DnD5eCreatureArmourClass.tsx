import React from 'react';
import DnD5eAttributeTable from './DnD5eAttributeTable';
import DnD5eArmourList from './DnD5eArmourList';
import DnD5eSkillList from './DnD5eSkillList';
import DnD5eWeaponList from './DnD5eWeaponList';
import { act } from 'react-dom/test-utils';

function DnD5eCreatureArmourClass(props: any) {

    const wornArmour = props.creature.items
        .filter((item: any) => item.type === 'equipment' && item.system.equipped === true)
        .filter((item: any) => item.system.type.value === "light" || item.system.type.value === "medium" || item.system.type.value === "heavy" || item.system.type.value === "natural")[0]

    const wornShield = props.creature.items
        .filter((item: any) => item.type === 'equipment' && item.system.equipped === true)
        .filter((item: any) => item.system.type.value === "shield")[0]

    const dexMod = Math.trunc((props.creature.system.abilities.dex.value - 10) / 2)
    const conMod = Math.trunc((props.creature.system.abilities.con.value - 10) / 2)
    const wisMod = Math.trunc((props.creature.system.abilities.wis.value - 10) / 2)
    const acType = props.creature.system.attributes.ac.calc
    const armouredAc = wornArmour && wornArmour.system.type.value === 'heavy' ? 0
        : wornArmour.system.type.value === 'light' ? dexMod
            : wornArmour.system.type.value === 'medium' && dexMod <= wornArmour.system.armor.value ? dexMod
                : wornArmour.system.armor.value

    const baseAc = ((acType === 'natural' || acType === 'flat') ? props.creature.system.attributes.ac.flat
        : (acType === 'mage' || acType === 'draconic') ? 13 + dexMod
            : acType === 'unarmoredBarbarian' ? 10 + conMod + dexMod
                : acType === 'unarmoredMonk' ? 10 + wisMod + dexMod
                    : acType === 'default' && wornArmour ? wornArmour.system.armor.value + armouredAc
                        : 10 + dexMod) || 10
                        
    const bonusAc = 0
    return (
        <div>
            <strong>Armour Class </strong>
            {baseAc + bonusAc}
            {wornShield && `/${wornShield.system.armor.value + baseAc + bonusAc}`}


            {((acType !== 'flat' && acType !== 'default') || wornArmour || wornShield) && ' ('}

            {(acType === 'default' && wornArmour) && wornArmour.name}
            {acType === 'natural' && 'Natural Armour'}
            {acType === 'mage' && 'Mage Armour'}
            {acType === 'draconic' && 'Draconic Resilience'}
            {(acType === 'unarmoredBarbarian' || acType === 'unarmoredMonk') && 'Unarmoured Defence'}

            {(((acType !== 'flat' && acType !== 'default') || wornArmour || wornShield) && wornShield) && ', '}
            {wornShield && wornShield.name}

            {((acType !== 'flat' && acType !== 'default') || wornArmour || wornShield) && ')'}
        </div>
    );
}

export default DnD5eCreatureArmourClass;
