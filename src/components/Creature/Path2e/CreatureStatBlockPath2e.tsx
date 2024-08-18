import React from 'react';
import DnD5eAttributeTable from './DnD5eAttributeTable';
import DnD5eArmourList from './DnD5eArmourList';
import DnD5eSkillList from './DnD5eSkillList';
import DnD5eWeaponList from './DnD5eWeaponList';
import DnD5eCreatureArmourClass from './DnD5eCreatureArmourClass';

function CreatureStatBlockPath2e(props: any) {
    let creature = require(`../../../data/creatures/Path2e/fvtt-zzzErrorDefault.json`);
    let error = false
    try {
        creature = require(`../../../data/creatures/Path2e/fvtt-${props.creature.fileName}.json`);
    } catch (e) {
        creature = require(`../../../data/creatures/Path2e/fvtt-zzzErrorDefault.json`);
        error = true
    }

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

    return (
        <div style={{ "color": "black", "padding": "5px" }}>
            {!error ?
                <>
                    <div style={{ "background": "#522e2c", "color": "#cbc18f", "padding": "5px" }}>
                        <strong>
                            {creature.name}
                        </strong>
                        <strong style={{ "float": "right" }}>
                            Creature 2
                        </strong>
                    </div>
                    <div style={{ "padding": "5px" }}>
                        <div>
                            Ne Medium Human Humanoid
                        </div>
                        <div>
                            Perception
                        </div>
                        <div>
                            Languages
                        </div>
                        <div>
                            Skills
                        </div>
                        <div>
                            Str
                        </div>
                        <div>
                            Items
                        </div>
                    </div>
                    <hr />
                    <div>
                        <div>
                            AC
                        </div>
                        <div>
                            HP
                        </div>
                        <div>
                            Bandit's Ambush
                        </div>
                    </div>
                    <hr />
                    <div>
                        <div>
                            Speed
                        </div>
                        <div>
                            Melee
                        </div>
                    </div>
                </>
                : <>File Does Not Exist</>
            }
        </div>
    );
}

export default CreatureStatBlockPath2e;
