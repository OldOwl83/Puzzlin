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
            </p>
            <p>Rows
                <NumberInput setValue={ setRows } min={ 3 } max={ 8 } initialValue={ puzzleGrid[1] } />
            </p>
        </div>
    );
}
