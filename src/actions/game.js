import * as Colors from "../config/colors";
import * as firebase from 'firebase'

export function startGame() {
    return {
        type: "START_GAME"
    }
}

export function addPlayerColor(color) {
    return {
        type: "ADD_PLAYER_COLOR",
        value: color
    }
}

export function addCpuColor(color) {
    return {
        type: "ADD_CPU_COLOR",
        value: color
    }
}

export function setCurrentColor(color) {
    return {
        type: "SET_CURRENT_COLOR",
        value: color
    }
}

export function changeGameState(status) {
    return {
        type: "CHANGE_GAME_STATE",
        value: status
    }
}

export function resetPlayerArray() {
    return {
        type: "RESET_PLAYER_ARRAY",
    }
}

export function changePlayerName(playerName) {
    return {
        type: "CHANGE_PLAYER_NAME",
        value: playerName
    }
}

/**
 *
 * @returns {Function}
 */
export function playCPU() {
    return function (dispatch, getState) {

        dispatch(changeGameState("playing_cpu"));

        dispatch(resetPlayerArray());
        let color = Colors.getRandomColor();
        dispatch(addCpuColor(color));
        let {game} = getState();

        let cloneColors = JSON.parse(JSON.stringify(game.cpu));

        cpuLights(dispatch, cloneColors);

    }
}

/**
 *
 * @param color
 * @returns {Function}
 */
export function playPlayer(color) {
    return function (dispatch, getState) {
        let {game} = getState();
        if (game.state === "playing_player") {

            let myAudio = new Audio('audio/'+color+'.wav');
            myAudio.play();

            dispatch(setCurrentColor(color));

            setTimeout(function () {
                dispatch(setCurrentColor(null));
            }, 200);

            dispatch(addPlayerColor(color));

            checkPlayer(dispatch, game, game.cpu, game.player)
        }
    }
}

/**
 *
 * @param dispatch
 * @param game
 * @param cpu
 * @param player
 */
function checkPlayer(dispatch, game, cpu, player) {

    let lastPosition = player.length - 1;
    let playerColor = player[lastPosition];

    if (cpu[lastPosition] !== playerColor) {

        const score = firebase.database().ref("/score/");
        score.push({'nombre':game.playerName, 'score': cpu.length});

        dispatch(changeGameState("game_over"))
    } else {

        if (cpu.length === player.length) {

            setTimeout(function () {
                dispatch(changeGameState("playing_cpu"));
                dispatch(playCPU());
            }, 1000)

        }
    }

}

/**
 *
 * @param dispatch
 * @param colors
 */
function cpuLights(dispatch, colors) {

    if (colors.length > 0) {
        let color = colors.shift();

        dispatch(setCurrentColor(color));
        let myAudio = new Audio('audio/'+color+'.wav');
        myAudio.play();

        setTimeout(function () {
            dispatch(setCurrentColor(null));

            setTimeout(function () {
                cpuLights(dispatch, colors)
            }, 250)
        }, 500)

    } else {
        dispatch(changeGameState("playing_player"))
    }
}