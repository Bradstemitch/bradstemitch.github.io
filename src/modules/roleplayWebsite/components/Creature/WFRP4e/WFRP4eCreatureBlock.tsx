import React from 'react';
import WFRP4eAttributeTable from './WFRP4eAttributeTable';
import WFRP4eSkillList from './WFRP4eSkillList';
import WFRP4eWeaponList from './WFRP4eWeaponList';
import WFRP4eArmourList from './WFRP4eArmourList';

function WHF4eCreatureBlock(props: any) {
    const creature = require(`../../../data/creatures/WFRP4e/fvtt-${props.creature.fileName}.json`)
    return (
        <div>
            <strong>
                {creature.name}
            </strong>
            <WFRP4eAttributeTable
                move={creature.system.details.move.value}
                characteristics={creature.system.characteristics}
                wounds={creature.system.status.wounds.max}
            />
            <br />
            <WFRP4eSkillList
                skills={creature.items.filter((item: any) => item.type === "skill")}
                characteristics={creature.system.characteristics}
            />
            <WFRP4eWeaponList
                weapons={creature.items.filter((item: any) => item.type === "weapon")}
            />
            <WFRP4eArmourList
                armour={creature.items.filter((item: any) => item.type === "armour")}
            />
            <br />
        </div>
    );
}

export default WHF4eCreatureBlock;
