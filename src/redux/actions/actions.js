import axios from 'axios';
import CalendarDates from "calendar-dates";
const calendarDates = new CalendarDates();

axios.defaults.withCredentials=true;

function SetDates(json){
	console.log('setDates',json);
	return {
		type:"SETDATES",
		payload:json
	}
};

function CreateEvent(json){
	console.log('CreateEvent',json);
	return {
		type:"CREATEEVENT",
		payload:json
	}
};

export function setDates({month,year}){
 	return function(dispatch){
		let date=new Date(year+'-'+(parseInt(month)+1)+'-'+15);
		calendarDates.getDates(date).then(res=>dispatch(SetDates({month:parseInt(month),dates:res})));
	}
}
export function createEvent(event){
	return function(dispatch){
		dispatch(CreateEvent(event))
	}
}