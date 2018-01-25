export const COLOR_RED="red";
export const COLOR_ORANGE="orange";
export const COLOR_YELLOW="yellow";
export const COLOR_GREEN="green";
export const COLOR_BLUE="blue";
export const COLOR_DARK_BLUE="dark-blue";
export const COLOR_VIOLET="violet";

export function getColors(){
    return [COLOR_RED, COLOR_ORANGE, COLOR_YELLOW, COLOR_GREEN, COLOR_BLUE, COLOR_DARK_BLUE, COLOR_VIOLET]
}

export function getRandomColor(){
   
    let colors = getColors();
    
    return colors[Math.floor(Math.random() * colors.length)];
}