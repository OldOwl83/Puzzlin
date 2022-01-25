import { useContext, useState, useEffect } from "react";

import { MainPhotoContext } from "../Puzzlin";

import '../styles/PhotoShowcase.css';

export const PhotoShowcase = ( { photos = [] } ) => {
    
    // console.log(photos);

    const { setPhotoPuzzle } = useContext( MainPhotoContext );

    const [ photosContDisplacement, setPhotosContDisplacement ] = useState( 0 );
    const [ photosContHeight, setPhotosContHeight ] = useState( 0 );

    useEffect( () => {
        setPhotosContHeight( photos.length * 110 );
        setPhotosContDisplacement( 0 );

    }, [ photos ]);

    return (
        <div id="sampler">

        {/* Scroll up button */}
            <div
                className="material-icons arrows"
                onClick={ () => {
                    ( photosContDisplacement + 330 <= 0 ) ? setPhotosContDisplacement( photosContDisplacement + 330 ) : setPhotosContDisplacement( 0 );
                } }    
            >keyboard_double_arrow_up</div>

        {/* Photos Showcase */}
            <div id="photosHidder">
                <div id="photosContainer" style={ { top: photosContDisplacement, height: photosContHeight } }>
                    
                    { photos.map( ( { id, description, urlSmall } ) => {
                    
                            return (

                                <div key={ id } className="photos">

                                    <img className="animate__animated animate__zoomIn" 
                                        src={ urlSmall } 
                                        alt={ description } 
                                        onClick={ (e) => {
                                            setPhotoPuzzle( e.target.src );
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
                    ( photosContDisplacement - 330 >= 440 - photosContHeight ) ? setPhotosContDisplacement( photosContDisplacement - 330 ) : setPhotosContDisplacement( 440 - photosContHeight );
                }}    
            >keyboard_double_arrow_down</div>
        </div>
    )
}
