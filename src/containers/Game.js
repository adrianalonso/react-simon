import React, { Component } from 'react';
import PushButton from "../components/PushButton"
import Score from "../components/Score"
import * as Colors from "../config/colors"
import {connect} from 'react-redux';
import * as GameActions from "../actions/game"

class Game extends Component {

  startGame(){
    this.props.startGame();
  }

  chooseColor(color){
    this.props.guessColor(color);
  }

  render() {
    return (
      <div className="game">
        <h1>Simon Say</h1>

        {this.props.game.state == "initial" ? <button onClick={this.startGame.bind(this)}> Empezar Juego</button> : ""}

        <div className="pusher">
            <PushButton color={Colors.COLOR_RED} chooseColor={this.chooseColor.bind(this)}/>
            <PushButton color={Colors.COLOR_ORANGE} chooseColor={this.chooseColor.bind(this)}/>
            <PushButton color={Colors.COLOR_YELLOW} chooseColor={this.chooseColor.bind(this)}/>
            <PushButton color={Colors.COLOR_GREEN} chooseColor={this.chooseColor.bind(this)}/>
            <PushButton color={Colors.COLOR_BLUE} chooseColor={this.chooseColor.bind(this)}/>
            <PushButton color={Colors.COLOR_DARK_BLUE} chooseColor={this.chooseColor.bind(this)}/>
            <PushButton color={Colors.COLOR_VIOLET} chooseColor={this.chooseColor.bind(this)}/>
        </div>
            <Score score={this.props.game.scoring}/>
            {JSON.stringify(this.props.game)}
      </div>
    );
  }
}


let mapStateToProps=function(state) {
  return {game: state.game};
}

let mapDispatchToProps=function(dispatch) {
  return {
      startGame: () => {
        dispatch(GameActions.startGame())
        dispatch(GameActions.playCPU())
      },
      guessColor: (color) => {
        dispatch(GameActions.playPlayer(color))
      }
  }
}


export default connect(mapStateToProps, mapDispatchToProps, null)(Game)
