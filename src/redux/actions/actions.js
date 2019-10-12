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

export function setDates(){
 	return function(dispatch){
		calendarDates.getDates(new Date()).then(res=>dispatch(SetDates(res)))
	}
}