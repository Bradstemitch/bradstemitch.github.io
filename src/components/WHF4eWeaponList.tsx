import React from 'react';
import logo from './logo.svg';

function WeaponList(props: any) {
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

export default WeaponList;
