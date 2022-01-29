/*
* It handles the contextual values of the puzzle grid. These values represent the columns and rows to cut out the puzzle photo and are in an array with two indices, which is a state belonging to the <Puzzlin /> component.
*/

import { useContext, useState, useEffect } from "react";

import { PuzzleGrid } from "../Puzzlin";
import { NumberInput } from "./NumberInput";

import "../styles/GridInput.css";

export const GridInput = () => {

    const { puzzleGrid, setPuzzleGrid } = useContext( PuzzleGrid );
    
    const [ cols, setCols ] = useState( puzzleGrid[0] );
    const [ rows, setRows ] = useState( puzzleGrid[1] );
    
    useEffect(() => {
        
        setPuzzleGrid( [ cols, rows ] );
        
    }, [ setPuzzleGrid, cols, rows ]);

    return (
    
        <div id="GridInput">
            <p>Columns
                <NumberInput setValue={ setCols } min={ 4 } max={ 8 } initialValue={ puzzleGrid[0] } />
                {/* It send de previous context values to initial value of this component, to maintain them across all routes. */}
            </p>
            <p>Rows
                <NumberInput setValue={ setRows } min={ 3 } max={ 8 } initialValue={ puzzleGrid[1] } />
            </p>
        </div>
    );
}
