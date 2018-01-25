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

    let colors= Colors.getColors();
    let currentColor= this.props.game.current;
    let scoring= this.props.game.cpu.length;
    return (
      <div className="game">
        <h1>Simon Says</h1>

        {this.props.game.state == "initial" ? <button onClick={this.startGame.bind(this)}> Empezar Juego</button> : ""}

        <div className="pusher">
          {colors.map((value)=>{
            return  <PushButton color={value} active={value == currentColor} chooseColor={this.chooseColor.bind(this)}/>
          })}
        </div>

          <Score score={scoring}/>
            <p className="DEBUG">{JSON.stringify(this.props.game)}</p>
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
