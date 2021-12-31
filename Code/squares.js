import '../App.css';
import React, { Component } from 'react';

class Squares extends Component {

  constructor(props) {
    super(props)
    this.state = {
        
        value:this.props.val

    };
    
  }

  change_state = (val) =>{
    this.setState({value: val})
  }





render(){

    
    return (
       
        <div onClick={() => this.props.onClick()}>{this.props.val}</div>
 
    )

}

}
export default Squares;