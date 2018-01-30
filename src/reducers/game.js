const initialState = {
    'cpu': [],
    'player': [],
    'currentScore': 0,
    'state': "initial",
    'current': false,
    'playerName': "JUGADOR 1"
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case "START_GAME":
            return {
                ...state,
                state: "playing_cpu",
                scoring: 0,
                player:[],
                cpu:[],
                current:false
            };

        case "ADD_CPU_COLOR":
            let cpu = state.cpu;
            cpu.push(action.value);
            return {
                ...state,
                 cpu:cpu,
           };

        case "SET_CURRENT_COLOR":
            return {
                ...state,
                 current:action.value,
            };

        case "RESET_PLAYER_ARRAY":
            return {
                ...state,
                 player:[],
            };

        case "ADD_PLAYER_COLOR":
            let player = state.player;
            player.push(action.value);

            return {
                ...state,
                 player,
            };

        case "CHANGE_GAME_STATE":

            return {
                ...state,
                 state: action.value,
            };

        case "CHANGE_PLAYER_NAME":

            return {
                ...state,
                playerName: action.value,
            };
            
        default: {
            return state;
        }
    }
};

export default reducer;
