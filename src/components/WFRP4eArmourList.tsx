import React from 'react';
import logo from './logo.svg';

function WFRP4eArmourList(props: any) {
    return (
        <div>
            {props.armour.map((armourPiece: any) => {
                return (
                    <>
                        {armourPiece.name}
                        {', '}
                    </>
                )
            })}
        </div>
    );
}

export default WFRP4eArmourList;
