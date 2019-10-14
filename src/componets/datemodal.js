import React, {Component} from 'react';
import {createEvent, eventsInMonth, setDates} from "../redux/actions/actions";
import {connect} from "react-redux";
import OutsideAlerter from "./outside"
import uuid from 'react-uuid'
import {TwitterPicker} from 'react-color';

class ModalDate extends Component {
    state = {
        create: false,

    }

    handledInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value})
    }

    render() {
        return (
            <div className={'modal'}>

                <div>
                    <div className={'modal-content'}>
                        <div onClick={this.props.close} style={{'display': 'flex','justifyContent': 'flex-end','color': 'red'}}>close</div>
                        <div className={'modal-title'}>
                            <div style={{fontSize: 50, marginButtom: 30}}>
                                {this.props.date.date}

                            </div>
                            <div style={{marginTop: 30}}>
                                {this.state.create ? 'Create a new event' : 'Events:'}
                            </div>
                        </div>

                        {this.state.create ?
                            <div>
                                <div className={'modal-grid-1'} style={{margin: 10}}>
                                    <label>Description</label>
                                    <input type={'text'} maxLength={30} value={this.state.description}
                                           name={'description'} onChange={this.handledInput} required/>
                                </div>
                                <div style={{margin: 10}}>
                                    <label style={{marginRight: 20}}>Place</label>
                                    <input type={'text'} style={{width: 110}} maxLength={15} value={this.state.place} name={'place'}
                                           onChange={this.handledInput} required/>
                                </div>
                                <div style={{margin: 10}}>
                                    <label style={{marginRight: 20}}>Hour</label>
                                    <input type={'time'} style={{width: 110}} value={this.state.hour} name={'hour'}
                                           onChange={this.handledInput} required/>
                                </div>
                                <div style={{margin: 10}}>
                                    <label style={{marginRight: 20}}>Number of days</label>
                                    <input type={'number'} style={{width: 20}} max={31-this.props.date.date} min={1} value={parseInt(this.state.days)} name={'days'}
                                           onChange={this.handledInput} required/>
                                </div>
                                <div style={{margin: 10}}>
                                    <label style={{marginRight: 20}}>Picke a color</label>
                                    <TwitterPicker triangle={'hide'} color={ this.state.color }
                                                   onChange={(color) => this.setState({color: color.hex})}/>
                                </div>
                                <button style={{marginRight: 20}} className={'button'} onClick={async () => {
                                    this.props.dispatch(createEvent({
                                        iso: this.props.date.iso,
                                        days: this.state.days,
                                        event: {description: this.state.description, color: this.state.color,_id:uuid(),hour:this.state.hour,place:this.state.place}
                                    }))
                                    this.setState({create: false});
                                    this.props.close();
                                    await this.props.dispatch(eventsInMonth());
                                }}>
                                    create event
                                </button>
                                <button className={'button'} onClick={() => this.setState({create: false})}>
                                    cancel
                                </button>
                            </div>
                            :
                            <div>
                                <div style={{margin: 20}}>
                                    {this.props.date.events.map(i => <div style={{fontSize: 20}}>
                                        <div className={'span'}
                                             style={{backgroundColor: i.color, width: '1em', height: '1em'}}/>
                                        {i.description}
                                    </div>)}
                                </div>
                                <div className={'button'} onClick={() => this.setState({create: true})}>
                                    create event
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>

        );

    }

}

export default connect()(ModalDate)