export default function reducer(state={
	dates:[]
},action){
	switch(action.type){
		case "SETDATES":{
			return {...state,dates:action.payload}
		}
		case "CREATEEVENT":{
			return {...state,dates:action.payload}
		}
	}
	return state
}
