import React from 'react';

export default function Quote(props) {
    return (
        <div style={{ backgroundColor: 'black', textAlign: 'center', fontStyle: 'italic' }}>
            <h2 style={{ fontSize: '2.2rem', padding: '0.83rem', margin: 0, color: '#e9bd39' }}>{props.quote}</h2>
        </div>
    );
}