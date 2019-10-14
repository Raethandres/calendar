import React from 'react';

export const Day= ({date,switchModal}) => (
    <div className={date.type!=='previous' && date.type!=='next'?'date':'date dateNot'} onClick={()=>date.type!=='previous' && date.type!=='next'?switchModal(date):alert('not available')}>
        <div className={'inner-grid'}>
        <div style={{fontSize:50}}>
            {date.date}
        </div>
        <div>
            {date.events.map(i=>
                <div style={{display:'flex',fontSize:10}}>
                    <div className={'span'} style={{ backgroundColor:i.color,width: '10px', height: '10px'}}/>
            </div>)}
        </div>
        </div>
    </div>
);