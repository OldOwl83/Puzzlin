/*
* This component displays the selected photo stored in the location state. The displayed image has a link to the puzzle board and sets the main photo in context when the user clicks on it.
*/

import { Link, useLocation } from "react-router-dom";
import { memo, useContext } from "react";
// import { CSSTransition } from 'react-transition-group';

import '../styles/Preview.css';

import { MainPhotoContext } from '../Puzzlin';

export const Preview = memo(() => {

    console.log( 'Preview' );

    const { setPhotoPuzzle } = useContext( MainPhotoContext );
    const location = useLocation();

    return (
        <>
        <Link to='/puzzle' id="photoPreviewContainer">

            <img 
                src={ location.state?.selectedPhoto } 
                alt="" 
                draggable='false' 
                id="imagePreview"
                onClick={ ( e ) => setPhotoPuzzle( e.target.src ) }
            />
    
        </Link>

        <footer id="author">Photo by { location.state?.author || 'Mauro Donnantuoni' }</footer>
        </>
    )
})