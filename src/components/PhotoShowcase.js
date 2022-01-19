import { useContext, useState, useEffect, useRef } from "react";
import { MainPhotoContext } from "../RompeCocosApp";

import '../styles/PhotoShowcase.css';

export const PhotoShowcase = ( { photos } ) => {
    
    // console.log(photos);

    const { setPhotoPuzzle } = useContext( MainPhotoContext );

    const [ sampler, setSampler ] = useState( photos );

    const [ photosContDisplacement, setPhotosContDisplacement ] = useState( 0 );
    const [ photosContHeight, setPhotosContHeight ] = useState( 0 );

    const photosCont = useRef();

    useEffect(() => {
        
        if( photos.length > 0)
            setSampler( photos );
        else if( sessionStorage.getItem( 'photosPuzzle5598' ))
            setSampler( JSON.parse( sessionStorage.getItem( 'photosPuzzle5598' ) ) );
        else
            setSampler( [] );

        setPhotosContHeight( photosCont.current.offsetHeight );
        setPhotosContDisplacement( 0 );

        console.log( photosContHeight);
    }, [ setSampler, photos ]);

    return (
        <div id="sampler">
            <div 
                className="material-icons arrows"
                onClick={ () => {
                    ( photosContDisplacement + 260 <= 0 ) ? setPhotosContDisplacement( photosContDisplacement + 260 ) : setPhotosContDisplacement( 0 );
                } }    
            >keyboard_double_arrow_up</div>

            <div id="photosHidder">
                <div id="photosContainer" ref={ photosCont } style={ { top: photosContDisplacement } }>
                    
                    { sampler.map( ( { id, description, urlSmall } ) => {
                    
                            return (
                            <img className="animate__animated animate__zoomIn"
                                key={ id } 
                                src={ urlSmall } 
                                alt={ description } 
                                onClick={ (e) => {
                                    setPhotoPuzzle( e.target.src );
                                }} //url de la foto
                            />)
                    })}
                    
                </div>
            </div>

            <div 
                className="material-icons arrows"
                onClick={ () => {
                    ( photosContDisplacement - 260 >= 450 - photosContHeight ) ? setPhotosContDisplacement( photosContDisplacement - 260 ) : setPhotosContDisplacement( 450 - photosContHeight );
                }}    
            >keyboard_double_arrow_down</div>
        </div>
    )
}
