export default function reducer(state={
	user:undefined
},action){
	switch(action.type){
		case "LOGOUT":{
			return {
				list:[],
				genders:[],
				user:{},
				type:"",
				race:[],
				error:null,
				feched:false,
			}
		}
		case "FETTCH":{
			return {...state,error:null,saved:action.payload}
		}
	}
	return state
}
