import React from 'react';

function Path2eAttackActions(props: any) {
    const item = props.item
    const traits = item.system.traits.value.length > 0
    let first = true
    const ranged = item.system.traits.value.includes('thrown') ||
        item.system.traits.value.includes('range-increment-50')

    const map1 = item.system.bonus.value - (item.system.traits.value.includes('agile') ? 4 : 5)
    const map2 = map1 - (item.system.traits.value.includes('agile') ? 4 : 5)
    const damage: any = Object.values(item.system.damageRolls)

    return (
        <div>
            <strong>{ranged ? `Ranged` : `Melee`} </strong>
            {`${item.name} `}
            {`+${item.system.bonus.value}`}
            {` [${map1 >= 0 ? `+` : ''}${map1}/${map2 >= 0 ? `+` : ''}${map2}]`}
            {traits && ` (`}
            {item.system.traits.value.map((trait: any) => {
                const firstEntry = first
                first = false
                return (
                    <>{firstEntry ? `${trait.replaceAll('-', ' ')}` : `, ${trait.replaceAll('-', ' ')}`}</>
                )
            })}
            {traits && `)`}
            {`, `}
            <strong>Damage </strong>
            {damage[0].damage} {damage[0].damageType}
        </div>
    );
}

export default Path2eAttackActions;
