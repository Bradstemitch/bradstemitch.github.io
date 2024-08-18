import React from 'react';
import WFRP4eAttributeTable from './WFRP4eAttributeTable';
import WFRP4eSkillList from './WFRP4eSkillList';

function WHF4eCreatureBlock(props: any) {
    let creature = require(`../../../data/creatures/WFRP4e/fvtt-zzzErrorDefault.json`);
    let error = false
    try {
        creature = require(`../../../data/creatures/WFRP4e/fvtt-${props.creature.fileName}.json`)
    } catch (e) {
        creature = require(`../../../data/creatures/WFRP4e/fvtt-zzzErrorDefault.json`);
        error = true
    }
    return (
        <div>
            {!error ?
                <>
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
                        creatureName={creature.name}
                        characteristics={creature.system.characteristics}
                    />

                    <div>
                        <strong>Weapons </strong>
                        {creature.items.filter((item: any) => item.type === "weapon").map((weapon: any) => {
                            return (
                                <span key={weapon.name + '-WFRP4eCreatureBlock-' + creature.name + '-span'}>
                                    {weapon.name}
                                    {', '}
                                </span>
                            )
                        })}
                    </div>

                    <div>
                        <strong>Armour </strong>
                        {creature.items.filter((item: any) => item.type === "armour").map((armourPiece: any) => {
                            return (
                                <span key={armourPiece.name + '-WFRP4eCreatureBlock-' + creature.name + '-span'}>
                                    {armourPiece.name}
                                    {', '}
                                </span>
                            )
                        })}
                    </div>
                    <br />
                </>
                : <>File Does Not Exist</>
            }
        </div>
    );
}

export default WHF4eCreatureBlock;
