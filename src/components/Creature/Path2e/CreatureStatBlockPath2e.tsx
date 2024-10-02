import React from 'react';
import Path2eAttackActions from './Path2eAttackActions';

function CreatureStatBlockPath2e(props: any) {
    const creature = props.creature
    var first = true

    function capitalise(s: string) {
        return s[0].toUpperCase() + s.slice(1);
    }

    function cleanFoundryVariables(s: string) {
        s = s.replaceAll('@UUID[Compendium.pf2e.actionspf2e.Item.2u915NdUyQan6uKF]{Demoralize}', 'Demoralize')
        s = s.replaceAll('@UUID[Compendium.pf2e.conditionitems.Item.TBSHQspnbcqxsmjL]{Frightened}', 'Frightened')
        s = s.replaceAll('@UUID[Compendium.pf2e.conditionitems.Item.AJh5ex99aV6VTggg]{Off-Guard}', 'Off-Guard')
        s = s.replaceAll('@UUID[Compendium.pf2e.bestiary-effects.Item.T9wQ1LvsvPWTefQR]{Effect: Under Command}', '')
        s = s.replaceAll('@UUID[Compendium.pf2e.bestiary-effects.Item.OxOMYmlPtjsEkRtY]{Effect: Aura of Command}', '')
        s = s.replaceAll('@UUID[Compendium.pf2e.bestiary-ability-glossary-srd.Item.v61oEQaDdcRpaZ9X]{Aura}', 'Aura')
        s = s.replaceAll('@Template[type:emanation|distance:30]{30 feet}', '30ft.')
        s = s.replaceAll('<p>', '')
        s = s.replaceAll('</p>', '')
        s = s.replaceAll('<hr />', ':')
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
                <div style={{ "background": "beige", "color": "white", "padding": "6px 2px 6px 6px", "margin": "2px 0px 0px 0px", "display": "inline-block" }}>

                    {creature.system.traits.rarity === 'uncommon' &&
                        <strong style={{ "background": "darkOrange", "padding": "2px 10px 2px 10px", "marginRight": "4px" }}>
                            Uncommon
                        </strong>
                    }
                    {/* <strong style={{ "background": "blue", "padding": "2px 10px 2px 10px", "marginRight": "4px" }}>
                        {creature.system.traits.value.includes('lawful') && `LN`}
                        {creature.system.traits.value.includes('evil') && `NE`}
                    </strong> */}

                    <strong style={{ "background": "green", "padding": "2px 10px 2px 10px", "marginRight": "4px" }}>
                        {creature.system.traits.size.value === 'huge' && `Huge`}
                        {creature.system.traits.size.value === 'lg' && `Large`}
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
                    {first = true}
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

                    {creature.system.attributes.resistances && creature.system.attributes.resistances.length > 0 &&
                        <>
                            <strong> Resistances </strong>
                            {creature.system.attributes.resistances.map((resistance: any) => {
                                const firstEntry = first
                                first = false
                                return (
                                    <span style={{ "textTransform": "capitalize" }}>
                                        {firstEntry ? `${resistance.type} ${resistance.value}` : `, ${resistance.type} ${resistance.value}`}
                                    </span>
                                )
                            })}
                            ;
                            {first = true}
                        </>
                    }

                    {creature.system.attributes.immunities && creature.system.attributes.immunities.length > 0 &&
                        <>
                            <strong> Immunities </strong>
                            {creature.system.attributes.immunities.map((immunity: any) => {
                                const firstEntry = first
                                first = false
                                return (
                                    <span style={{ "textTransform": "capitalize" }}>
                                        {firstEntry ? `${immunity.type}` : `, ${immunity.type}`}
                                    </span>
                                )
                            })}
                            ;
                            {first = true}
                        </>
                    }
                </div>

                {creature.items.filter((item: any) => item.system.category === 'defensive' && item.system.actionType.value === 'passive').map((item: any) => {
                    return (
                        <div>
                            <strong>
                                {`${item.name} `}
                            </strong>
                            {cleanFoundryVariables(item.system.description.value)}
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

                    {creature.items.filter((item: any) => item.type === 'melee').map((item: any) => {
                        return (
                            <Path2eAttackActions item={item} />
                        )
                    })}
                </div>
                {creature.items.filter((item: any) => item.system.category === 'offensive' && item.system.actionType.value === 'passive').map((item: any) => {
                    return (
                        <div>
                            <strong>
                                {`${item.name} `}
                            </strong>
                            {cleanFoundryVariables(item.system.description.value)}
                        </div>
                    )
                })}
            </div>
        </div >
    );
}

export default CreatureStatBlockPath2e;
