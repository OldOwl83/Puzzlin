import { useContext, useState, useEffect } from "react";
import { MainPhotoContext } from "../Puzzlin";

import '../styles/PhotoShowcase.css';

export const PhotoShowcase = ( { photos = [] } ) => {
    
    // console.log(photos);

    const { setPhotoPuzzle } = useContext( MainPhotoContext );

    const [ sampler, setSampler ] = useState( photos );

    const [ photosContDisplacement, setPhotosContDisplacement ] = useState( 0 );
    const [ photosContHeight, setPhotosContHeight ] = useState( 0 );

    useEffect(() => {
        
        if( photos.length > 0)
            setSampler( photos );
        else if( sessionStorage.getItem( 'previousPhotos' ))
            setSampler( JSON.parse( sessionStorage.getItem( 'previousPhotos' ) ) );
        else
            setSampler( [] );

    }, [ setSampler, photos ]);

    useEffect( () => {
        setPhotosContHeight( sampler.length * 110 );
        setPhotosContDisplacement( 0 );

    }, [ sampler ]);

    return (
        <div id="sampler">
            <div 
                className="material-icons arrows"
                onClick={ () => {
                    ( photosContDisplacement + 330 <= 0 ) ? setPhotosContDisplacement( photosContDisplacement + 330 ) : setPhotosContDisplacement( 0 );
                } }    
            >keyboard_double_arrow_up</div>

            <div id="photosHidder">
                <div id="photosContainer" style={ { top: photosContDisplacement, height: photosContHeight } }>
                    
                    { sampler.map( ( { id, description, urlSmall } ) => {
                    
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

            <div 
                className="material-icons arrows"
                onClick={ () => {
                    ( photosContDisplacement - 330 >= 440 - photosContHeight ) ? setPhotosContDisplacement( photosContDisplacement - 330 ) : setPhotosContDisplacement( 440 - photosContHeight );
                }}    
            >keyboard_double_arrow_down</div>
        </div>
    )
}
