import React from 'react';
import logo from './logo.svg';

function WFRP4eSkillList(props: any) {
    return (
        <div>
            {props.skills.map((skill: any) => {
                if (skill.system.advances?.value && skill.system.advances.value > 0) {
                    return (
                        <>
                            {skill.name} {
                                skill.system.characteristic.value === "ws" ? skill.system.advances.value + props.characteristics.ws.initial :
                                    skill.system.characteristic.value === "bs" ? skill.system.advances.value + props.characteristics.bs.initial :
                                        skill.system.characteristic.value === "s" ? skill.system.advances.value + props.characteristics.s.initial :
                                            skill.system.characteristic.value === "t" ? skill.system.advances.value + props.characteristics.t.initial :
                                                skill.system.characteristic.value === "i" ? skill.system.advances.value + props.characteristics.i.initial :
                                                    skill.system.characteristic.value === "ag" ? skill.system.advances.value + props.characteristics.ag.initial :
                                                        skill.system.characteristic.value === "dex" ? skill.system.advances.value + props.characteristics.dex.initial :
                                                            skill.system.characteristic.value === "int" ? skill.system.advances.value + props.characteristics.int.initial :
                                                                skill.system.characteristic.value === "wp" ? skill.system.advances.value + props.characteristics.wp.initial :
                                                                    skill.system.characteristic.value === "fel" ? skill.system.advances.value + props.characteristics.fel.initial : ""
                            }
                            {', '}
                        </>
                    )
                }
            })}
        </div>
    );
}

export default WFRP4eSkillList;
