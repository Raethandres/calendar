import React, {Component} from 'react';
import {Day} from "../componets/date";
import {connect} from "react-redux"
import {deleteEvent, eventsInMonth, setDates} from "../redux/actions/actions";
import ModalDate from "../componets/datemodal";

class Calendar extends Component{
state={
    dates:[],
    openDate:false,
    date:{},
    openEvent:false,
    year:2019,
    selected:[]
}

    componentDidMount() {
        let date = new Date();
        this.load(date);
        this.setState({month:date.getMonth(),year:date.getFullYear()})
    }

    load=async(date)=>{
        await this.props.dispatch(setDates({month:0,year:date.getFullYear()}));
        await this.props.dispatch(setDates({month:1,year:date.getFullYear()}));
        await this.props.dispatch(setDates({month:2,year:date.getFullYear()}));
        await this.props.dispatch(setDates({month:3,year:date.getFullYear()}));
        await this.props.dispatch(setDates({month:4,year:date.getFullYear()}));
        await this.props.dispatch(setDates({month:5,year:date.getFullYear()}));
        await this.props.dispatch(setDates({month:6,year:date.getFullYear()}));
        await this.props.dispatch(setDates({month:7,year:date.getFullYear()}));
        await this.props.dispatch(setDates({month:8,year:date.getFullYear()}));
        await this.props.dispatch(setDates({month:9,year:date.getFullYear()}));
        await this.props.dispatch(setDates({month:10,year:date.getFullYear()}));
        await this.props.dispatch(setDates({month:11,year:date.getFullYear()}));
        await this.props.dispatch(setDates({month:date.getMonth(),year:date.getFullYear()}));
        await this.props.dispatch(eventsInMonth());
    }
    handledInput=(event)=>{
        let name=event.target.name;
        let value=event.target.value;
        this.setState({[name]:value})
        this.props.dispatch(setDates({month:this.state.month,year:this.state.year,[name]:value}))
    }

    select=(value)=>{
     let aux=this.state.selected.find(i=>i===value);
     if(aux){
         this.setState({selected:this.state.selected.filter(i=>i!==value)})
     }else{
         this.setState({selected:[...this.state.selected,value]})
     }
    }


    render(){
        return (
            <div>
                <div>
                    <select value={this.state.month} name={"month"} onChange={this.handledInput}>
                        <option value={0}>ene</option>
                        <option value={1}>feb</option>
                        <option value={2}>mar</option>
                        <option value={3}>abr</option>
                        <option value={4}>may</option>
                        <option value={5}>jun</option>
                        <option value={6}>jul</option>
                        <option value={7}>ago</option>
                        <option value={8}>sep</option>
                        <option value={9}>oct</option>
                        <option value={10}>nov</option>
                        <option value={11}>dic</option>
                    </select>
                </div>
                <div className={'grid-2-col'}>
                    <div className={'outer-grid'}>
                        <div className={'box'}>Sun</div>
                        <div className={'box'}>Mon</div>
                        <div className={'box'}>Thu</div>
                        <div className={'box'}>Wen</div>
                        <div className={'box'}>Thr</div>
                        <div className={'box'}>Fri</div>
                        <div className={'box'}>Sat</div>
                        {this.props.dates.map((i,j)=><Day key={j} date={i} switchModal={(value)=>this.setState({date:value,openDate:true})} />)}


                    </div>

                    <div className={'events'}>
                        <div>Events in this month:</div>
                        <div style={{margin:10}}>
                            {
                                this.props.events.length>0?
                                    <button className={'button'} onClick={async () => {
                                        await this.props.dispatch(deleteEvent(this.props.events.map(i => i._id)))
                                        await this.props.dispatch(eventsInMonth());
                                    }
                                    }>
                                        Delete all
                                    </button>
                                    :undefined
                            }
                            {
                                this.state.selected.length>0?
                                    <button className={'button'} onClick={async () => {
                                        await this.props.dispatch(deleteEvent(this.state.selected))
                                        await this.props.dispatch(eventsInMonth());
                                    }
                                    }>
                                        Delete
                                    </button>
                                    :undefined
                            }
                            {
                                this.props.events.map(i=>
                                    <div style={{display:'flex'}} onClick={()=>this.select(i._id)}>
                                        <div className={'span'} style={{ backgroundColor:this.state.selected.find(j=>j===i._id)?'red': i.color }}/>
                                        {i.description}

                                    </div>
                                )
                            }
                        </div>


                    </div>
                </div>
                {this.state.openDate?
                    <ModalDate open={this.state.openDate} date={this.state.date} close={()=>this.setState({openDate:false})}/>
                    :undefined}
            </div>
        );

    }

}

export default connect((store)=>{
    return {dates:store.reducer.selected,events:store.reducer.events}
})(Calendar)