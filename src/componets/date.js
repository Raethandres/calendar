import React from 'react';

export const Day= ({date,switchModal}) => (
    <div className={'date'} onClick={()=>switchModal(date)}>
        <div>
            {date.date}
        </div>
        <div>
            {date.events.map(i=><p>º</p>)}
        </div>
    </div>
);