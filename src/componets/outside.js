
import React, { Component } from 'react';

export default class OutsideAlerter extends Component {

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside);
    }

    setWrapperRef=(node)=> {
        this.wrapperRef = node;
    }

    /**
     * Alert if clicked on outside of element
     */
    handleClickOutside=(event)=> {
        if (!this.wrapperRef.contains(event.target)) {
            this.props.action();
        }
    }

    render() {
        return <div ref={this.setWrapperRef}>{this.props.children}</div>;
    }
}