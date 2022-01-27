/*
* "initPieces": creates an array with the pieces positions corresponding to the puzzle grid (imported columns and rows), and mixes them for an initial arrangement. It replaces the last position with a marck for the "black hole". Receives the state of reducer by parameter and returns it with the new positions.
*
* "piecesReducer": handles changes of positions in the state array according to four action types ('up', 'down', etc. correspond to keyboard key pressed). It always swaps the positions between the "black hole" and the corresponding piece, depending on the action required. It receives the current positions and the action required by parameters, and returns the new complete state of positions.
*/

import { rows, columns } from "../components/Puzzle";

export const initPieces = ( places ) => {

    const auxPositions = [];

    for(let y = 0; y < rows; y++)
        for(let x = 0; x < columns; x++)
            auxPositions.push( [ x, y ] );

    auxPositions.splice( -1, 1, 'black' );
    
    for(let i = rows * columns; i > 0; i--)
    {
        let random = Math.trunc(Math.random() * i);

        places.push( auxPositions[ random ] );

        auxPositions.splice( random, 1 );
    }

    return places;
}

export const piecesReducer = ( positions, action ) => {

    const auxPositions = positions.slice();
    let auxPlace;

    const blackIndex = positions.findIndex( pos => pos === 'black' ); // It takes the current position of the "black hole".
    
    switch ( action ) {
        case 'down':
            
            auxPlace = auxPositions[blackIndex];
            
            auxPositions[blackIndex] = auxPositions[blackIndex - columns];
            
            auxPositions[blackIndex - columns] = auxPlace;
            
            break;

        case 'up':
            
            auxPlace = auxPositions[blackIndex];
            
            auxPositions[blackIndex] = auxPositions[blackIndex + columns];
            
            auxPositions[blackIndex + columns] = auxPlace;
            
            break;

        case 'right':
            
            auxPlace = auxPositions[blackIndex];
            
            auxPositions[blackIndex] = auxPositions[blackIndex - 1];
            
            auxPositions[blackIndex - 1] = auxPlace;
            
            break;

        case 'left':
            
            auxPlace = auxPositions[blackIndex];
            
            auxPositions[blackIndex] = auxPositions[blackIndex + 1];
            
            auxPositions[blackIndex + 1] = auxPlace;
            
            break;
            
        default:
            break;               
    }

    return auxPositions;
}
