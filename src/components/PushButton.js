import React, { Component } from 'react';
import PropTypes from 'prop-types';
var classNames = require('classnames');

class PushButton extends Component {

  constructor(props){
    super(props);
  }


  render() {
    return (
      <div 
        onClick={()=> this.props.chooseColor(this.props.color)}
        className={
        classNames({
          'push-button': true, 
          'active': this.props.active 
        })+" "+this.props.color}
          >
        
    
      </div>
    );
  }
}

PushButton.propTypes={
    active: PropTypes.bool.isRequired,
    color: PropTypes.bool.isRequired,
    chooseColor: PropTypes.func.isRequired,
    
}

export default PushButton;
