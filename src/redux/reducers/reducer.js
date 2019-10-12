export default function reducer(state={
	dates:[],
	selected:[]
},action){
	switch(action.type){
		case "SETDATES":{
			let aux=state.dates.find(i=>i.month===action.payload.month);
			if(aux){
				return {...state,selected:aux.dates}
			}else{
				let dates=[...state.dates,{month:action.payload.month,dates:action.payload.dates.map(i=>{return {...i,events:[]}})}]
				let select=action.payload.dates.map(i=>{return {...i,events:[]}});
				return {...state,dates:dates,selected:select}
			}
		}
		case "CREATEEVENT":{
			let dates=state.dates;
			let pos=state.dates.findIndex(i=>i.iso===action.payload.iso)
			dates[pos].events.push(action.payload.event);
			for (let i = 1; i <action.payload.days ; i++) {
				dates[pos+i].events.push(action.payload.event);
			}
			return {...state,dates:dates}
		}
	}
	return state
}
