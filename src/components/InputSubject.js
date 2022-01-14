import { useState } from "react";
import { PropTypes } from 'prop-types';

import '../styles/InputSubject.css';

export const InputSubject = ( { setSearch } ) => {

    console.log( 'InputSubject' );

    const [ input, setInput ] = useState( '' );
    
    const submitInput = (e) => {
        e.preventDefault();
        
        setInput( '' );

        setSearch( input );
    }

    return (

        <h2>Input a subject and select a photo. Then, press on the preview to start.
            <form onSubmit={ submitInput }>
                <input 
                    id="inputSubject"
                    type="text"
                    value={ input }
                    onChange={ (e) => setInput( e.target.value ) }
                />
            </form>
        </h2>
    )
}

InputSubject.propTypes = {

    setSearch: PropTypes.func.isRequired,
}