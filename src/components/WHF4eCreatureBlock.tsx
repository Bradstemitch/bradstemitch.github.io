import React from 'react';
import logo from './logo.svg';
import AttributeTable from './WHF4eAttributeTable';
import SkillList from './WHF4eSkillList';
import WeaponList from './WHF4eWeaponList';
import ArmourList from './WHF4eArmourList';

function WHF4eCreatureBlock(props: any) {
    const creature = props.creature
    return (
        <div>
            {creature.name}
            <AttributeTable
                move={creature.system.details.move.value}
                characteristics={creature.system.characteristics}
                wounds={creature.system.status.wounds.max}
            />
            <SkillList
                skills={creature.items.filter((item: any) => item.type === "skill")}
                characteristics={creature.system.characteristics}
            />
            <WeaponList
                weapons={creature.items.filter((item: any) => item.type === "weapon")}
            />
            <ArmourList
                armour={creature.items.filter((item: any) => item.type === "armour")}
            />
        </div>
    );
}

export default WHF4eCreatureBlock;
