import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Score extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="score">
          Score: {this.props.score}
      </div>
    );
  }
}

Score.propTypes={
    score: PropTypes.number.isRequired
}

export default Score;
