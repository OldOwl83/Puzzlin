import { rows, columns } from "../components/Puzzle";

export const initPieces = ( places ) => {

    const auxPositions = [];

    for(let y = 0; y < rows; y++)
        for(let x = 0; x < columns; x++)
            auxPositions.push([x, y]);

    auxPositions.splice(-1, 1, 'black');
    
    for(let i = rows * columns; i > 0; i--)
    {
        let random = Math.trunc(Math.random() * i);

        places.push(auxPositions[random]);

        auxPositions.splice( random, 1);
    }

    return places;
}

export const piecesReducer = ( positions, action ) => {

    const auxPositions = positions.slice();
    let auxPlace;

    const blackIndex = positions.findIndex( pos => pos === 'black' );
    
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
