import React from 'react';
import logo from './logo.svg';
import huscarl from '../creatures/fvtt-MessanHuscarl.json'
import AttributeTable from './AttributeTable';
import SkillList from './SkillList';
import WeaponList from './WeaponList';
import ArmourList from './ArmourList';

function Huscarl() {
    console.log(huscarl.items)
    return (
        <div>
            {huscarl.name}
            <AttributeTable
                move={huscarl.system.details.move.value}
                characteristics={huscarl.system.characteristics}
                wounds={huscarl.system.status.wounds.max}
            />
            <SkillList
                skills={huscarl.items.filter(item => item.type === "skill")}
                characteristics={huscarl.system.characteristics}
            />
            <WeaponList
                weapons={huscarl.items.filter(item => item.type === "weapon")}
            />
            <ArmourList
                armour={huscarl.items.filter(item => item.type === "armour")}
            />
        </div>
    );
}

export default Huscarl;
