import { useContext, useState, useEffect } from "react";
import { PuzzleGrid } from "../RompeCocosApp";

export const ColsInput = () => {

    const { puzzleGrid, setPuzzleGrid } = useContext( PuzzleGrid );
    
    const [ input, setInput ] = useState( puzzleGrid[0] );
    
    useEffect(() => {
        
        if( input >= 3 || input == '' )
        {
            if( input >= 3 )
                setPuzzleGrid( [ Number( input ), puzzleGrid[1] ] );
            else
                setPuzzleGrid( [ Number( 3 ), puzzleGrid[1] ] );
        }else
        {
            setPuzzleGrid( [ Number( 3 ), puzzleGrid[1] ] );
            setInput( 3 );
        }
    }, [ input, setPuzzleGrid ]);

    return <input 
                type="number" 
                value={ input }
                min="3"
                onChange={ ( e ) => setInput( e.target.value) } 
            />
}
