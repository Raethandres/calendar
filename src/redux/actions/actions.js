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


function DeleteEvent(json){
	console.log('DeleteEvent',json);
	return {
		type:"DELETEEVENT",
		payload:json
	}
};

function EventsInMonth(json){
	console.log('CreateEvent',json);
	return {
		type:"EVENTSINMONTH",
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
		return calendarDates.getDates(date).then(res=>dispatch(SetDates({month:parseInt(month),dates:res})));
	}
}
export function createEvent(event){
	return function(dispatch){
		dispatch(CreateEvent(event))
	}
}

export function eventsInMonth(event){
	return function(dispatch){
		dispatch(EventsInMonth(event))
	}
}

export function deleteEvent(event){
	return function(dispatch){
		dispatch(DeleteEvent(event))
	}
}