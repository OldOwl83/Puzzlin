import { Link } from "react-router-dom";
import { memo, useContext } from "react";
// import { CSSTransition } from 'react-transition-group';

import '../styles/Preview.css';

import { MainPhotoContext } from '../Puzzlin';

export const Preview = memo(() => {

    console.log( 'Preview' );

    const { photoPuzzle } = useContext( MainPhotoContext );

    return (

        <Link to='/puzzle' id="photoPreviewContainer">

            <img src={ photoPuzzle } alt="" id="imagePreview" />
    
        </Link>
    )
})