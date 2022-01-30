/*
* General purpose number input. It receives by parameters a function which changes an external value or state, the minimum and maximum numbers allowed and the initial value. If the user tries to exceed the set range, it automatically sets the minimum or maximum accordingly. It sets the value as an integer data type.
*/

import { useState, useEffect, memo } from "react";

export const NumberInput = memo(( { setValue, min, max, initialValue }) => {

    const [ input, setInput ] = useState( initialValue );
    
    useEffect(() => {
    
        if( ( input >= min && input <= max ) || input === '' ) //It must include '' to allow erase manually the text in the input box.
        {
            if( input >= min && input <= max )
                setValue( Number( input ) );
            else 
                setValue( Number( min ) ); // If the input box remain empty, the set value is the minimum.
        }else if( input > max )
        {
            setValue( Number( max ) );
            setInput( max );
        }else
        {
            setValue( Number( min ) )
            setInput( min );
        }
    }, [ input, min, max, setValue ]);

    return (
    
        <input 
            type="number" 
            value={ input }
            min={ min }
            max={ max }
            onChange={ ( e ) => setInput( e.target.value ) } 
        />
    );
});
