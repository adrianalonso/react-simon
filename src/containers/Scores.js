import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as firebase from 'firebase'
import {Link} from 'react-router-dom'
class Scores extends Component {

    constructor() {
        super();
        this.state = {
            scores: []
        }
    }

    componentDidMount(){
        let scores= firebase.database().ref("score");
        let self=this;
        scores.on('value', (snapshot) => {

            let values=snapshot.val();
            let scores=[];
            for (let value in values) {
                scores.push(
                    values[value]
                );
            }

            self.setState({scores});
        });
    }

    render() {


        return (
            <div className="game">
                <h1>Últimas Partidas</h1>

                <ul className="last-games">
                    {this.state.scores.map((value)=>{
                        return <li> <strong>{value.nombre}</strong>: {value.score} puntos</li>
                    })}
                </ul>

                <Link to={"/"} className="link">Volver al juego</Link>
            </div>
        );
    }
}


let mapStateToProps = function (state) {
    return {game: state.game};
};

let mapDispatchToProps = function (dispatch) {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps, null)(Scores)
