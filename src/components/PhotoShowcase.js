/*
*
*/

import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import '../styles/PhotoShowcase.css';

export const PhotoShowcase = ( { photos = [] } ) => {
    
    // console.log(photos);

    const location = useLocation();
    const navigate = useNavigate();

    const [ photosContScroll, setPhotosContScroll ] = useState( 0 );
    const [ photosContHeight, setPhotosContHeight ] = useState( 0 );

    useEffect( () => {
        setPhotosContHeight( photos.length * 110 );
        setPhotosContScroll( location.state?.contSroll || 0 );

    }, [ photos, location ]);

    return (
        <div id="sampler">

        {/* Scroll up button */}
            <div
                className="material-icons arrows"
                onClick={ () => {
                    ( photosContScroll + 330 <= 0 ) ? setPhotosContScroll( photosContScroll + 330 ) : setPhotosContScroll( 0 );
                } }    
            >keyboard_double_arrow_up</div>

        {/* Photos Showcase */}
            <div id="photosHidder">
                <div 
                    id="photosContainer" 
                    style={ { top: photosContScroll, height: photosContHeight } }
                >
                    
                    { photos.map( ( { id, description, urlSmall, urlRegular, author } ) => {
                    
                            return (

                                <div key={ id } className="photos">

                                    <img 
                                        className="animate__animated animate__zoomIn" 
                                        src={ urlSmall } 
                                        alt={ description }
                                        draggable='false' 
                                        onClick={ () => {

                                            navigate( location, {
                                                replace: true,
                                                state: {
                                                    contSroll: photosContScroll,
                                                    selectedPhoto: urlRegular,
                                                    author: author,
                                                }
                                            })
                                        }}
                                    />

                                </div>)
                    })}
                    
                </div>
            </div>

        {/* Scroll down button */}
            <div 
                className="material-icons arrows"
                onClick={ () => {
                    ( photosContScroll - 330 >= 440 - photosContHeight ) ? setPhotosContScroll( photosContScroll - 330 ) : setPhotosContScroll( 440 - photosContHeight );
                }}    
            >keyboard_double_arrow_down</div>
        </div>
    )
}
