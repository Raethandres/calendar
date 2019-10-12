import React, {Component} from 'react';
import CalendarDates from "calendar-dates";
import {Day} from "../componets/date";
const calendarDates = new CalendarDates();

class Calendar extends Component{
state={
    dates:[]
}

    componentDidMount() {
        calendarDates.getDates(new Date()).then(res=>this.setState({dates:res}))
    }


    render(){

        return (
            <div>
                {this.state.dates.map((i,j)=><Day key={j} date={i.date} events={i.events}/>)}
            </div>

        );

    }

}

export default Calendar