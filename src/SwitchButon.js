import React from 'react';
import PropTypes from 'prop-types'
export default class extends React.Component{
    static contextTypes  = {
        store:PropTypes.object
    }
    constructor(props){
        super(props);
        this.state = {
            themeColor:''
        }
    }

    componentWillMount(){
        var {store} = this.context;

        this.updateColor();
        // store.subscribe(()=>{
            
        // })
        store.subscribe(()=>{
            this.updateColor();
        });
    }

    updateColor(){
        var {store} = this.context;
        var state = store.getState();
        this.setState({
            themeColor:state.themeColor
        });
    }

    changeColor(color){
        var {store} = this.context;
        store.dispatch({
            type:'CHANGE_COLOR',
            color
        });
    }



    render(){
        return <div>
            <button style={{color:this.state.themeColor}} onClick={this.changeColor.bind(this,'red')}>变红</button>
            <button style={{color:this.state.themeColor}} onClick={this.changeColor.bind(this,'blue')}>变蓝</button>
        </div>
    }
}