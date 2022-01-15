import { Link } from "react-router-dom";
import { useContext } from "react";

import '../styles/Preview.css';

import { MainPhotoContext } from '../RompeCocosApp';

export const Preview = () => {

    console.log( 'Preview' );

    const { photoPuzzle } = useContext( MainPhotoContext );

    return (

        <div id="previewContainer">
        <Link to='/puzzle'>

            <img src={ photoPuzzle } alt="Selected photo preview" />

        </Link>
        </div>
    )
}