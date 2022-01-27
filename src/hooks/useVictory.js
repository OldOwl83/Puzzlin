/*
* Custom Hook that evaluates the win conditions for the puzzle game. It fills an array with the ordered positions and compares it to the current positions of the puzzle pieces. If they match, it return true; or false in any other case.
*/

import { useRef, useState, useEffect, useContext } from 'react'

import { PuzzleGrid } from '../Puzzlin';

export const useVictory = ( positions ) => {
    
    const victoryCondition = useRef();
    const [ win, setWin ] = useState( false );
    const { puzzleGrid } = useContext( PuzzleGrid );
    const [ columns, rows ] = puzzleGrid;

    useEffect(() => {

        const auxPositions = [];

        for(let y = 0; y < rows; y++)
            for(let x = 0; x < columns; x++)
                auxPositions.push([x, y]);

        auxPositions.splice(-1, 1, 'black');
        
        victoryCondition.current = JSON.stringify( auxPositions );
    }, []);

    useEffect(() => {
        
        if(JSON.stringify(positions) === victoryCondition.current)
            setWin( true );
    }, [ positions ])
    
    return win;
}
