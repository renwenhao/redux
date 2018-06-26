import React from 'react';
import PropTypes from 'prop-types'
export default class extends React.Component{
    

      static contextTypes = {
        store: PropTypes.object
      }
    constructor(props){
        super(props);
        console.log(111,this);
        this.state  = {
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
        
        const {store} = this.context;
        console.log('store',store);



        const state = store.getState();
        this.setState({
            themeColor:state.themeColor
        })
        
    }
    render (){
        return <h1 style={{color:this.state.themeColor}}>this is header</h1>
    }
}