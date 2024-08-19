import React from 'react';
import DnD5eAttributeTable from './DnD5eAttributeTable';
import DnD5eArmourList from './DnD5eArmourList';
import DnD5eSkillList from './DnD5eSkillList';
import DnD5eWeaponList from './DnD5eWeaponList';
import DnD5eCreatureArmourClass from './DnD5eCreatureArmourClass';

function CreatureStatBlockDnD5e(props: any) {
    const creature = props.creature

    const stats = {
        str: creature.system.abilities.str.value,
        strMod: Math.trunc((creature.system.abilities.str.value - 10) / 2),
        dex: creature.system.abilities.dex.value,
        dexMod: Math.trunc((creature.system.abilities.dex.value - 10) / 2),
        con: creature.system.abilities.con.value,
        conMod: Math.trunc((creature.system.abilities.con.value - 10) / 2),
        int: creature.system.abilities.int.value,
        intMod: Math.trunc((creature.system.abilities.int.value - 10) / 2),
        wis: creature.system.abilities.wis.value,
        wisMod: Math.trunc((creature.system.abilities.wis.value - 10) / 2),
        cha: creature.system.abilities.cha.value,
        chaMod: Math.trunc((creature.system.abilities.cha.value - 10) / 2)
    }
    const profBonus = creature.system.details.cr < 5 ? 2
        : creature.system.details.cr < 9 ? 3
            : creature.system.details.cr < 13 ? 4
                : creature.system.details.cr < 17 ? 5
                    : creature.system.details.cr < 21 ? 6
                        : creature.system.details.cr < 25 ? 7
                            : creature.system.details.cr < 29 ? 8
                                : 9

    function cleanFoundryVariables(s: string) {
        s = s.replace('[[lookup @name lowercase]]', creature.name)
        return s;
    }

    return (
        <div style={{ "background": "beige", "color": "darkRed", "padding": "5px" }}>
            <strong>
                {creature.name}
            </strong>
            <div>
                <em style={{ "color": "black" }}>
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
                {`Passive Perception ${10 + (creature.system.skills.prc.value === 1 ? profBonus : 0)}`}
            </div>
            <div>
                <strong>Languages </strong>
                {`${creature.system.traits.languages.custom}`}
            </div>
            <div>
                <strong>Challenge </strong>
                {`${creature.system.details.cr} (${creature.system.attributes.hp.formula})`}
                <strong>Proficiency Bonus </strong>
                +{profBonus}
            </div>
            <hr />
            <strong>Actions</strong>
            {creature.items.filter((item: any) => item.name === 'Multiattack').map((item: any) => {
                return (
                    <div key={item.name + '-creatureStatBlockDnD5e-' + creature.name + '-div'}>
                        <span key={item.name + '-creatureStatBlockDnD5e-' + creature.name + '-span'}>
                            <strong key={item.name + '-creatureStatBlockDnD5e-' + creature.name + '-strong'}>{item.name}. </strong>
                            {cleanFoundryVariables(item.system.description.value.slice(3, item.system.description.value.length - 4))}
                        </span>
                    </div>
                )
            })}

            {creature.items.filter((item: any) => item.type === 'weapon').map((item: any) => {
                return (
                    <div key={item.name + '-creatureStatBlockDnD5e-' + creature.name + '-div'}>
                        <strong key={item.name + '-creatureStatBlockDnD5e-' + creature.name + '-strong'}>
                            {`${item.name}. `}
                        </strong>
                        <em key={item.name + '-creatureStatBlockDnD5e-' + creature.name + '-em'}>
                            {item.system.actionType === 'mwak' && 'Melee Weapon Attack: '}
                        </em>
                        {`${profBonus + (!item.system.properties.includes('flex') || stats.strMod > stats.dexMod ? stats.strMod : stats.dexMod) >= 0 && '+'}`}
                        {`${profBonus + (!item.system.properties.includes('flex') || stats.strMod > stats.dexMod ? stats.strMod : stats.dexMod)} to hit`}
                        {`, reach 5ft., one target. `}
                        <em key={item.name + '-creatureStatBlockDnD5e-' + creature.name + '-em2'}>
                            Hit:
                        </em>
                        {`${item.system.damage.parts[0][0]} ${item.system.damage.parts[0][1]}`}
                        {item.system.properties.includes('ver') && item.system.damage.versatile}
                    </div>
                )
            })}

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

export default CreatureStatBlockDnD5e;
