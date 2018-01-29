import React, {Component} from 'react';
import PushButton from "../components/PushButton"
import Score from "../components/Score"
import * as Colors from "../config/colors"
import {connect} from 'react-redux';
import * as GameActions from "../actions/game"

class Game extends Component {

    startGame() {
        this.props.startGame();
    }

    chooseColor(color) {
        this.props.guessColor(color);
    }

    render() {

        let colors = Colors.getColors();
        let currentColor = this.props.game.current;
        let scoring = this.props.game.cpu.length - 1;
        if (scoring < 0) {
            scoring = 0;
        }

        let state = this.props.game.state;
        return (
            <div className="game">
                <h1>Simon Says</h1>


                <div className="pusher">
                    {colors.map((value) => {
                        return <PushButton color={value} active={value === currentColor}
                                           chooseColor={this.chooseColor.bind(this)}/>
                    })}

                    {state === "initial" ?
                        <a className="start-game hvr-pulse-grow" onClick={this.startGame.bind(this)}> Empezar <br/>
                            Juego</a> : ""}
                    {state === "playing_cpu" || state === "playing_player" ? <Score score={scoring}/> : ""}
                    {state === "game_over" ?
                        <p className="restart-game hvr-pulse-grow" onClick={this.startGame.bind(this)}>
                            Reintentar </p> : ""}


                </div>
                {state === "game_over" ? <a className="reset-game">HAS PERDIDO</a> : ""}

            </div>
        );
    }
}


let mapStateToProps = function (state) {
    return {game: state.game};
};

let mapDispatchToProps = function (dispatch) {
    return {
        startGame: () => {
            dispatch(GameActions.startGame())
            dispatch(GameActions.playCPU())
        },
        guessColor: (color) => {
            dispatch(GameActions.playPlayer(color))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps, null)(Game)
