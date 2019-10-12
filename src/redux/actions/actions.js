import axios from 'axios';
import {url} from '../../tools/config'

axios.defaults.withCredentials=true;

function receiveUser(json){
	localStorage.setItem('user', JSON.stringify(json));
	console.log('receiveUser',json);
	return {
		type:"FETTCH_USER",
		payload:json
	}
};

export function getUser(){
 	return function(dispatch){
		axios.get(`${url}common/userdata`,{withCredentials:true})
		.then(result=>dispatch(receiveUser(result.data)))
		.catch(error=>{dispatch(receiveUserError(error))});
	}
}