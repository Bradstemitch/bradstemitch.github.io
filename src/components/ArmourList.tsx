import React from 'react';
import logo from './logo.svg';

function ArmourList(props: any) {
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

export default ArmourList;
