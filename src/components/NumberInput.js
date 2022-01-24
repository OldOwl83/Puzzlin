/*
* General purpose number input. It receives a function which changes an external value or state, and the minimum and maximum numbers allowed. IT RETURN A STRING THAT REPRESENT THE NUMERIC VALUE.
*/

import { useState, useEffect } from "react";

export const NumberInput = ( { setValue, min, max }) => {
  
    const [ input, setInput ] = useState( min );
    
    useEffect(() => {
        
        if( ( input >= min && input <= max ) || input === '' )
        {
            if( input >= min && input <= max )
                setValue( input );
            else 
                setValue( min );
        }else if( input > max )
        {
            setValue( max );
            setInput( max );
        }else
        {
            setValue( min )
            setInput( min );
        }
    }, [ input ]);

    return (
    
        <input 
            type="number" 
            value={ input }
            min={ min }
            max={ max }
            onChange={ ( e ) => setInput( e.target.value) } 
        />
    );
};
