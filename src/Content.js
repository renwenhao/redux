import React from 'react';
import PropTypes from 'prop-types'
import SwitchButton from './SwitchButon';
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
        var {store } = this.context;
        var state = store.getState();
        this.setState({
            themeColor:state.themeColor
        });
    }
    render(){
        return <div>
            <p style={{color:this.state.themeColor}}>this is content</p>
            <SwitchButton/>
        </div>
    }
}