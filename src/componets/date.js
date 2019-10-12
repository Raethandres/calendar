import React from 'react';

export const Day= ({date,switchModal}) => (
    <div className={'date'} onClick={()=>switchModal(date)}>
        <div>
            {date.date}
        </div>
        <div>
            {date.events}
        </div>
    </div>
);