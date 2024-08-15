import React from 'react';
import DnD5eAttributeTable from './DnD5eAttributeTable';
import DnD5eArmourList from './DnD5eArmourList';
import DnD5eSkillList from './DnD5eSkillList';
import DnD5eWeaponList from './DnD5eWeaponList';
import DnD5eCreatureArmourClass from './DnD5eCreatureArmourClass';

function DnD5eCreatureBlock(props: any) {
    const creature = require(`../../../data/creatures/DnD5e/fvtt-${props.creature.fileName}.json`)
    const stats ={
        str: creature.system.abilities.str.value,
        strMod: Math.trunc((creature.system.abilities.str.value - 10) / 2),
        dex:creature.system.abilities.dex.value,
        dexMod:Math.trunc((creature.system.abilities.dex.value - 10) / 2),    
        con:creature.system.abilities.con.value,
        conMod:Math.trunc((creature.system.abilities.con.value - 10) / 2),    
        int:creature.system.abilities.int.value,
        intMod:Math.trunc((creature.system.abilities.int.value - 10) / 2),    
        wis:creature.system.abilities.wis.value,
        wisMod:Math.trunc((creature.system.abilities.wis.value - 10) / 2),
        cha:creature.system.abilities.cha.value,
        chaMod:Math.trunc((creature.system.abilities.cha.value - 10) / 2)
    }

    return (
        <div style={{"background":"beige", "color":"darkRed", "padding":"5px"}}>
            <strong>
                {creature.name}
            </strong>
            <div>
                <em style={{"color":"black"}}>
                    {creature.system.traits.size === 'med' && 'Medium'}
                    {` ${creature.system.details.type.value}, ${creature.system.details.alignment}`}
                    {creature.system.details.alignment.toLowerCase().includes('any') && !creature.system.details.alignment.toLowerCase().includes('alignment') && ' Alignment'}
                </em>
            </div>
            <hr />
            <DnD5eCreatureArmourClass creature={creature} />
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
                characteristics={stats}
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
