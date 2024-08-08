import React from 'react';
import logo from './logo.svg';

function WFRP4eWeaponList(props: any) {
    return (
        <div>
            {props.weapons.map((weapon: any) => {
                return (
                    <>
                        {weapon.name}
                        {', '}
                    </>
                )
            })}
        </div>
    );
}

export default WFRP4eWeaponList;
