import React from 'react';
import logo from './logo.svg';
import huscarl from '../creatures/fvtt-MessanHuscarl.json'
import AttributeTable from './AttributeTable';

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
            <div>
                {huscarl.items.map((skill) => {
                    if (skill.system.advances?.value && skill.system.advances.value > 0 && skill.type === "skill") {
                        return (
                            <>
                                {skill.name} {
                                    skill.system.characteristic.value === "ws" ? skill.system.advances.value + huscarl.system.characteristics.ws.initial :
                                        skill.system.characteristic.value === "bs" ? skill.system.advances.value + huscarl.system.characteristics.bs.initial :
                                            skill.system.characteristic.value === "s" ? skill.system.advances.value + huscarl.system.characteristics.s.initial :
                                                skill.system.characteristic.value === "t" ? skill.system.advances.value + huscarl.system.characteristics.t.initial :
                                                    skill.system.characteristic.value === "i" ? skill.system.advances.value + huscarl.system.characteristics.i.initial :
                                                        skill.system.characteristic.value === "ag" ? skill.system.advances.value + huscarl.system.characteristics.ag.initial :
                                                            skill.system.characteristic.value === "dex" ? skill.system.advances.value + huscarl.system.characteristics.dex.initial :
                                                                skill.system.characteristic.value === "int" ? skill.system.advances.value + huscarl.system.characteristics.int.initial :
                                                                    skill.system.characteristic.value === "wp" ? skill.system.advances.value + huscarl.system.characteristics.wp.initial :
                                                                        skill.system.characteristic.value === "fel" ? skill.system.advances.value + huscarl.system.characteristics.fel.initial : ""
                                }
                                {', '}
                            </>
                        )
                    }
                })}
            </div>
            <div>
                {huscarl.items.map((weapon) => {
                    if (weapon.type === "weapon") {
                        return (
                            <>
                                {weapon.name}
                                {', '}
                            </>
                        )
                    }
                })}
            </div>
            <div>
                {huscarl.items.map((armour) => {
                    if (armour.type === "armour") {
                        return (
                            <>
                                {armour.name}
                                {', '}
                            </>
                        )
                    }
                })}
            </div>
        </div>
    );
}

export default Huscarl;
