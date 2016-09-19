import React from 'react';  
import ReactDOM from 'react-dom'; 
import DataList from '../components/data-list/data-list.jsx'; 
import OurLeaderStore from '../stores/our-leaders-store.js';
import * as MainAction from '../actions/main-action.js';
import config from '../config/config.js';

export default class OurLeaders extends React.Component{
    constructor(){
        super();
        this.state={
          rajyaSabhaAttendence : OurLeaderStore.getState().rajyaSabhaAttendence
        };
    }

    updateState(){
        this.setState({
            rajyaSabhaAttendence : OurLeaderStore.getState().rajyaSabhaAttendence.data
        })
    }

    componentDidMount(){
        MainAction.makeAjaxRequest(config.rajyaSabhaAttendence);
    }

    componentWillMount(){
        OurLeaderStore.on('change',this.updateState.bind(this))
    }

    render(){
        return(
            <div className="col-12">
                <h1>Our Leaders</h1>
                <div className="col-6">
                    <DataList dataList = {this.state.rajyaSabhaAttendence} name="Rajya Sabha 15 - Attendence"/> 
                </div>
                <div className="col-6">
                    <DataList dataList = {this.state.rajyaSabhaAttendence} name="Lok Sabha 15 - Attendence"/>
                </div>
            </div>
            )
    }
}