import React from 'react';

export const Day= ({date,switchModal}) => (
    <div className={'date'} onClick={()=>switchModal(date)}>
        <div className={'wrappe2'}>
        <div>
            {date.date}
        </div>
        <div>
            {date.events.map(i=><p>test</p>)}
        </div>
        </div>
    </div>
);