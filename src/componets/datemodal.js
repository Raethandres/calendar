import React, {Component} from 'react';
import {createEvent, setDates} from "../redux/actions/actions";
import {connect} from "react-redux";

class ModalDate extends Component{
    state={
        create:false,

    }

    handledInput=(event)=>{
        let name=event.target.name;
        let value=event.target.value;
        this.setState({[name]:value})
    }

    render(){
        return (

            <div className={'modal'} onClick={()=>console.log('close')}>
                <div >
                    <div className={'modal-content'}>
                        {this.props.date.date}
                        {this.state.create?
                            <div>
                                crate a new event
                                <input type={'text'} maxLength={30} value={this.state.description} name={'description'} onChange={this.handledInput}/>
                                <input type={'number'} value={this.state.number} name={'days'} onChange={this.handledInput}/>
                                <button onClick={()=>{
                                    this.props.dispatch(createEvent({iso:this.props.date.iso,days:this.state.days,event:{description:this.state.description,color:''}}))
                                    this.setState({create:false})
                                }}>
                                    create
                                </button>
                                <button>
                                    cancel
                                </button>
                            </div>
                            :
                            <div>
                                events:
                                {this.props.date.events.map(i=><div>{i.description}</div>)}
                                <button onClick={()=>this.setState({create:true})}>
                                    create event
                                </button>
                            </div>
                        }
                    </div>
                </div>
            </div>

        );

    }

}

export default connect()(ModalDate)