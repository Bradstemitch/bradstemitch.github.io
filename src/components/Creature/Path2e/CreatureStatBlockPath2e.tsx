import React from 'react';
import DnD5eAttributeTable from './DnD5eAttributeTable';
import DnD5eArmourList from './DnD5eArmourList';
import DnD5eSkillList from './DnD5eSkillList';
import DnD5eWeaponList from './DnD5eWeaponList';
import DnD5eCreatureArmourClass from './DnD5eCreatureArmourClass';

function CreatureStatBlockPath2e(props: any) {
    const creature = props.creature
    var first = true

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
    function capitalise(s: string) {
        return s[0].toUpperCase() + s.slice(1);
    }

    function cleanFoundryVariables(s: string) {
        s = s.replace('@UUID[Compendium.pf2e.actionspf2e.Item.2u915NdUyQan6uKF]{Demoralize}', 'Demoralize')
        s = s.replace('@UUID[Compendium.pf2e.conditionitems.Item.TBSHQspnbcqxsmjL]{Frightened}', 'Frightened')
        s = s.replace('@UUID[Compendium.pf2e.conditionitems.Item.AJh5ex99aV6VTggg]{Off-Guard}', 'Off-Guard')
        return s;
    }

    return (
        <div style={{ "color": "black", "padding": "5px" }}>
            <div style={{ "background": "#522e2c", "color": "#cbc18f", "padding": "5px" }}>
                <strong>
                    {creature.name}
                </strong>
                <strong style={{ "float": "right" }}>
                    {`Creature ${creature.system.details.level.value! || 0}`}
                </strong>
            </div>

            <div>
                <div style={{ "color": "white", "padding": "2px 0px 2px 0px", "margin": "4px 0px 4px 0px" }}>
                    <strong style={{ "background": "blue", "padding": "2px 10px 2px 10px", "marginRight": "4px" }}>
                        {creature.system.traits.value.includes('lawful') && `LN`}
                        {creature.system.traits.value.includes('evil') && `NE`}
                    </strong>

                    <strong style={{ "background": "green", "padding": "2px 10px 2px 10px", "marginRight": "4px" }}>
                        {creature.system.traits.size.value === 'med' && `Medium`}
                    </strong>

                    {creature.system.traits.value.filter((trait: string) =>
                        trait !== 'good' &&
                        trait !== 'lawful' &&
                        trait !== 'chaotic' &&
                        trait !== 'evil').map((trait: string) => {
                            return (
                                <strong style={{ "background": "brown", "padding": "2px 10px 2px 10px", "marginRight": "4px" }}>
                                    {capitalise(trait)}
                                </strong>
                            )
                        })}
                </div>
                <div>
                    <strong>Perception </strong>
                    +{creature.system.perception.mod}
                </div>
                <div>
                    <strong>Languages </strong>
                    {Object.values(creature.system.details.languages).filter((language: any) => language.length !== 0).map((language: any) => {
                        const firstEntry = first
                        console.log(language)
                        first = false
                        return (
                            <span style={{ "textTransform": "capitalize" }}>
                                {firstEntry ? `${language}` : `, ${language}`}
                            </span>
                        )
                    })}
                    {first = true}
                </div>
                <div>
                    <strong>Skills </strong>
                    {Object.entries(creature.system.skills).map((skill: any) => {
                        const firstEntry = first
                        first = false
                        return (
                            <span style={{ "textTransform": "capitalize" }}>
                                {firstEntry ? `${skill[0]} +${skill[1].base}` : `, ${skill[0]} +${skill[1].base}`}
                            </span>
                        )
                    })}
                    {first = true}
                </div>
                <div>
                    <strong>Str </strong>
                    {`+${creature.system.abilities.str.mod}, `}
                    <strong>Dex </strong>
                    {`+${creature.system.abilities.dex.mod}, `}
                    <strong>Con </strong>
                    {`+${creature.system.abilities.con.mod}, `}
                    <strong>Int </strong>
                    {`+${creature.system.abilities.int.mod}, `}
                    <strong>Wis </strong>
                    {`+${creature.system.abilities.wis.mod}, `}
                    <strong>Cha </strong>
                    {`+${creature.system.abilities.cha.mod}`}
                </div>
                <div>
                    <strong>Items </strong>
                    {creature.items.filter((item: any) => item.type === 'weapon').map((item: any) => {
                        const firstEntry = first
                        first = false
                        return (
                            <>
                                {firstEntry ? item.name : `, ${item.name}`}
                            </>
                        )
                    })}
                    {creature.items.filter((item: any) => item.type === 'armor').map((item: any) => {
                        const firstEntry = first
                        first = false
                        return (
                            <>
                                {firstEntry ? item.name : `, ${item.name}`}
                            </>
                        )
                    })}
                    {creature.items.filter((item: any) => item.type === 'shield').map((item: any) => {
                        const firstEntry = first
                        first = false
                        return (
                            <>
                                {firstEntry ? item.name : `, ${item.name}`}
                            </>
                        )
                    })}
                </div>
            </div>

            <hr />

            <div>
                <div>
                    <strong>AC </strong>
                    {`${creature.system.attributes.ac.value}; `}
                    <strong>Fort </strong>
                    {`+${creature.system.saves.fortitude.value}, `}
                    <strong>Ref </strong>
                    {`+${creature.system.saves.reflex.value}, `}
                    <strong>Will </strong>
                    {`+${creature.system.saves.will.value}`}
                </div>
                <div>
                    <strong>HP </strong>
                    {creature.system.attributes.hp.value}
                </div>

                {creature.items.filter((item: any) => item.system.category === 'defensive' && item.system.actionType.value === 'passive').map((item: any) => {
                    return (
                        <div>
                            <strong>
                                {`${item.name} `}
                            </strong>
                            {cleanFoundryVariables(item.system.description.value.slice(3, item.system.description.value.length - 4))}
                        </div>
                    )
                })}
            </div>
            <hr />
            <div>
                <div>
                    <strong>Speed </strong>
                    {creature.system.attributes.speed.value}ft.
                </div>
                <div>
                    Melee
                </div>
                {creature.items.filter((item: any) => item.system.category === 'offensive' && item.system.actionType.value === 'passive').map((item: any) => {
                    return (
                        <div>
                            <strong>
                                {`${item.name} `}
                            </strong>
                            {cleanFoundryVariables(item.system.description.value.slice(3, item.system.description.value.length - 4))}
                        </div>
                    )
                })}
            </div>
        </div >
    );
}

export default CreatureStatBlockPath2e;
