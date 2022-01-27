import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import '../styles/InputSubject.css';

export const InputSubject = () => {

    // console.log( 'InputSubject' );

    const navigate = useNavigate();
    const location = useLocation();

    const [ input, setInput ] = useState( '' );
    
    const submitInput = (e) => {
        e.preventDefault();
        
        setInput( '' );

        navigate( `../?q=${ input }`, { 
            
            replace: location.search === `?q=${ input }` ? true : false,
     } );
    }

    return (

        <h2>Input a subject and select a photo. Then, press on the preview to start.
            <form onSubmit={ submitInput }>
                <input 
                    id="inputSubject"
                    type="text"
                    autoComplete="on"
                    value={ input }
                    onChange={ (e) => setInput( e.target.value ) }
                />
            </form>
        </h2>
    )
}