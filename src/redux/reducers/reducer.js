import uuid from 'react-uuid'

export default function reducer(state={
	dates:[],
	selected:[],
	events:[]
},action){
	switch(action.type){
		case "SETDATES":{
			let aux=state.dates.find(i=>i.month===action.payload.month);
			if(aux){
				return {...state,selected:aux.dates}
			}else{
				let dates=[...state.dates,{month:action.payload.month,dates:action.payload.dates.map(i=>{return {...i,events:[]}})}];
				let select=action.payload.dates.map(i=>{return {...i,events:[]}});
				return {...state,dates:dates,selected:select}
			}
		}
		case "CREATEEVENT":{
			let dates=state.selected;
			let pos=state.selected.findIndex(i=>i.iso===action.payload.iso)
			dates[pos].events.push(action.payload.event);
			for (let i = 1; i <action.payload.days ; i++) {
				dates[pos+i].events.push(action.payload.event);
			}

			return {...state,selected:dates}
		}
		case 'EVENTSINMONTH':{
			let aux=state.selected.map(i=>i.events).flat().reduce((unique,item)=>unique.find(i=>i._id===item._id)?unique:[...unique,item],[])

			return {...state,events:aux}
		}
		case 'DELETEEVENT':{
			let after=[];
			action.payload.map(k=>{
				after=state.selected.map(i=>{
				return {...i,events:i.events.filter(j=>j._id!==k)};
				});
				console.log(after);

				}
			)
			console.log(after);
			return {...state,selected:after}
		}
	}
	return state
}
