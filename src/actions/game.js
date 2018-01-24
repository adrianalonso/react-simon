
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

export function playCPU() {
    return function(dispatch) {
        dispatch(addCpuColor("aaa"));
    }
}

export function playPlayer(color) {
    return function(dispatch) {
        
        dispatch(addPlayerColor(color));
        
    }
}