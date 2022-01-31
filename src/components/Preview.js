/*
* This component displays the selected photo stored in the location state. The displayed image has a link to the puzzle board and sets the main photo in context when the user clicks on it.
*/

import { Link, useLocation } from "react-router-dom";
import React, { useState, memo, useContext } from "react";

import '../styles/Preview.css';
import 'animate.css';

import { MainPhotoContext } from '../Puzzlin';

export const Preview = memo(() => {

    // console.log( 'Preview' );

    const { setPuzzlePhoto } = useContext( MainPhotoContext );
    const location = useLocation();
    const [fade, setFade] = useState();

    return (
        <>
        <Link to='/puzzle' id="photoPreviewContainer">

            <img 
                src={ location.state?.selectedPhoto } 
                alt="Preview" 
                draggable='false' 
                id={ fade ? "imagePreview1" : 'imagePreview2'}
                onClick={ ( e ) => setPuzzlePhoto( e.target.src ) }
                onLoad={ () => { setFade( !fade )} }
            />

        </Link>

        <footer id="author">Photo by { location.state?.author || 'Mauro Donnantuoni' }</footer>
        </>
    )
})