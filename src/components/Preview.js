import { Link } from "react-router-dom";
import { useContext } from "react";
// import { CSSTransition } from 'react-transition-group';

import '../styles/Preview.css';

import { MainPhotoContext } from '../RompeCocosApp';
import { ColsInput } from "./ColsInput";
import { RowsInput } from "./RowsInput";

export const Preview = () => {

    // console.log( 'Preview' );

    const { photoPuzzle } = useContext( MainPhotoContext );

    return (

        <div id="previewContainer">

            <div id='previewInputs'>

                <p>Columns: <ColsInput /></p>

                <p>Rows: <RowsInput /></p>
                
            </div>

            <div id="photoPreviewContainer">
            <Link to='/puzzle'>

                <img src={ photoPuzzle } alt="Selected photo preview" className="imagePreview" />
        
            </Link>
            </div>

        </div>

    )
}