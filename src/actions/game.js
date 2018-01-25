import * as Colors from "../config/colors";

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

export function playCPU() {
    return function(dispatch, getState) {

        dispatch(resetPlayerArray())
        let color =Colors.getRandomColor();
        dispatch(addCpuColor(color));
        let {game} = getState();

        var cloneColors = JSON.parse(JSON.stringify(game.cpu));
    
        cpuLights(dispatch, cloneColors);

    }
}



export function playPlayer(color) {
    return function(dispatch, getState) {
        
        dispatch(setCurrentColor(color));
        
        setTimeout(function(){
            dispatch(setCurrentColor(null));
       },200)

        dispatch(addPlayerColor(color));
        let {game} = getState();
        checkPlayer(dispatch, game.cpu, game.player)
    }
}

function checkPlayer(dispatch, cpu, player){

    let lastPosition=player.length-1;
    let playerColor=player[lastPosition];
    

    if(cpu[lastPosition]!== playerColor){
        alert("HAS PERDIDO");
        dispatch(startGame())
        setTimeout(function(){
            dispatch(playCPU());
       },1000)
    }
    
    if(cpu.length == player.length){
        setTimeout(function(){
            dispatch(playCPU());
       },1000)
        
    }


}

function cpuLights(dispatch, colors) {
    
     if(colors.length > 0){
         let color= colors.shift();
             
         dispatch(setCurrentColor(color));
 
         setTimeout(function(){
             dispatch(setCurrentColor(null));

                setTimeout(function(){
                     cpuLights(dispatch, colors)
                },500)
         },1000)
        
     }else{
         dispatch(changeGameState("playing_player"))
     }
 }

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }