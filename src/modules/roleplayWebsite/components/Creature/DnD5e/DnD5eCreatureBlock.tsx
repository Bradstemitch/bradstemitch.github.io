import React from 'react';
import DnD5eAttributeTable from './DnD5eAttributeTable';
import DnD5eArmourList from './DnD5eArmourList';
import DnD5eSkillList from './DnD5eSkillList';
import DnD5eWeaponList from './DnD5eWeaponList';

function DnD5eCreatureBlock(props: any) {
    const creature = require(`../../../data/creatures/DnD5e/fvtt-${props.creature.fileName}.json`)
    return (
        <div>
            <strong>
                {creature.name}
            </strong>
            <div>
                <em>
                    {creature.system.traits.size === 'med' && 'Medium'}
                    {` ${creature.system.details.type.value}, ${creature.system.details.alignment}`}
                    {creature.system.details.alignment.toLowerCase().includes('any') && ' Alignment'}
                </em>
            </div>
            <hr />
            <div>
                <strong>Armour Class </strong>
                {creature.system.attributes.movement.walk}
            </div>
            <div>
                <strong>Hit Points </strong>
                {`${creature.system.attributes.hp.value} (${creature.system.attributes.hp.formula})`}
            </div>
            <div>
                <strong>Speed </strong>
                {`${creature.system.attributes.movement.walk}ft.`}
                {creature.system.attributes.movement.burrow !== 0 && `,burrow ${creature.system.attributes.movement.burrow}ft.`}
                {creature.system.attributes.movement.climb !== 0 && `,climb ${creature.system.attributes.movement.climb}ft.`}
                {creature.system.attributes.movement.fly !== 0 && `,fly ${creature.system.attributes.movement.fly}ft.`}
                {creature.system.attributes.movement.hover && '(hover)'}
                {creature.system.attributes.movement.swim !== 0 && `,swim ${creature.system.attributes.movement.swim}ft.`}
            </div>
            <hr />
            <DnD5eAttributeTable
                characteristics={creature.system.abilities}
            />
            <hr />
            <div>
                <strong>Senses </strong>
                {`${creature.system.attributes.hp.value} (${creature.system.attributes.hp.formula})`}
            </div>
            <div>
                <strong>Languages </strong>
                {`${creature.system.attributes.hp.value} (${creature.system.attributes.hp.formula})`}
            </div>
            <div>
                <strong>Challenge </strong>
                {`${creature.system.attributes.hp.value} (${creature.system.attributes.hp.formula})`}
            </div>
            <hr />
            <h3>Actions</h3>
            <br />
            {/* <DnD5eSkillList
                skills={creature.items.filter((item: any) => item.type === "skill")}
                characteristics={creature.system.characteristics}
            />
            <DnD5eWeaponList
                weapons={creature.items.filter((item: any) => item.type === "weapon")}
            />
            <DnD5eArmourList
                armour={creature.items.filter((item: any) => item.type === "armour")}
            /> */}
        </div>
    );
}

export default DnD5eCreatureBlock;
