import React from 'react';

export const Day= ({date,events,switchModal}) => (
    <div className={'date'} onClick={()=>switchModal(date)}>
        <div>
            {date}
        </div>
        <div>
            {events}
        </div>
    </div>
);