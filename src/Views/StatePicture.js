import React from 'react';

export default function StatePicture(props) {
    return (
        <div style={{backgroundImage: `url('${props.image}')`, height: '30rem', width: '100%', backgroundSize: 'cover', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} >
            <h2 style={{ backgroundColor: 'white', padding: '5px', border: '1px solid' }}>{props.stateName}</h2>
        </div>
    );
}
