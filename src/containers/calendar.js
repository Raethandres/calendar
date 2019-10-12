import React, {Component} from 'react';
import {Day} from "../componets/date";
import {connect} from "react-redux"
import {setDates} from "../redux/actions/actions";
import Modal from "../componets/eventmodal";

class Calendar extends Component{
state={
    dates:[],
    open:false
}

    componentDidMount() {
        this.props.dispatch(setDates())
    }


    render(){

        return (
            <div className={'wrapper'}>
                        <div className={'box'}>Sun</div>
                        <div className={'box'}>Mon</div>
                        <div className={'box'}>Thu</div>
                        <div className={'box'}>Wen</div>
                        <div className={'box'}>Thr</div>
                        <div className={'box'}>Fri</div>
                        <div className={'box'}>Sat</div>
                    {this.props.dates.map((i,j)=><Day key={j} date={i.date} events={i.events} switchModal={(value)=>this.setState({date:value,open:true})} />)}
                    <Modal open={this.state.open}/>
            </div>

        );

    }

}

export default connect((store)=>{
    return {dates:store.reducer.dates}
})(Calendar)