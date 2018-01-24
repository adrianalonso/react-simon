const initialState = {
    'cpu': [],
    'player': [],
    'scoring': 0,
    'currentScore': 0,
    'state': "initial",
    'current': false
};

const reducer = (state = initialState, action) => {

    console.log("ACTIOOONS", action);
    switch (action.type) {
        case "START_GAME":
            return {
                ...state,
                state: "playing_cpu",
                scoring: 0,
                player:[],
                cpu:[],
                current:false
            }

        case "ADD_CPU_COLOR":
            let cpu = state.cpu;
            cpu.push(action.value);

            return {
                ...state,
                 player,
            }

        case "ADD_PLAYER_COLOR":
            let player = state.player;
            player.push(action.value);

            return {
                ...state,
                 player,
            }

            
        default: {
            return state;
        }
    }
};

export default reducer;
