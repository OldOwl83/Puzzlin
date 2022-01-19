import { useRef, useState, useEffect } from 'react'

import { columns, rows } from '../components/Puzzle';

export const useVictory = ( positions ) => {
    
    const victoryCondition = useRef();
    const [ win, setWin ] = useState( false );

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
