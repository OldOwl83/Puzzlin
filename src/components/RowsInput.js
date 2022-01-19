import { useContext, useState, useEffect } from "react";
import { PuzzleGrid } from "../RompeCocosApp";

export const RowsInput = () => {

    const { puzzleGrid, setPuzzleGrid } = useContext( PuzzleGrid );
    
    const [ input, setInput ] = useState( puzzleGrid[1] );
    
    useEffect(() => {
        
        if( input >= 2 || input == '' )
        {
            if( input >= 2 )
            setPuzzleGrid( [ puzzleGrid[0], Number( input ) ] );
            else
            setPuzzleGrid( [ puzzleGrid[0], Number( 2 ) ] );
        }else
        {
            setPuzzleGrid( [ puzzleGrid[0], Number( 2 ) ] );
            setInput( 2 );
        }
    }, [ input, setPuzzleGrid ]);

    return <input 
                type="number" 
                value={ input } 
                min="2"
                onChange={ ( e ) => setInput( e.target.value) } 
            />
}
