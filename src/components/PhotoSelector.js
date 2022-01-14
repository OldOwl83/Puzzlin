import { useState, useEffect } from "react";

import { InputSubject } from "./InputSubject";
import { Preview } from './Preview';
import { useFetchPhotos } from "../hooks/useFetchPhotos";
import { PhotoShowcase } from "./PhotoShowcase";

import '../styles/PhotoSelector.css';
import 'animate.css';

export const PhotoSelector = ( { setMainPhoto } ) => {

    console.log('PhotoSelector');

    const [search, setSearch] = useState( '' );

    const [ imgSelected, setImgSelected] = useState( "images/tapa.png" );

    const { photos, loading } = useFetchPhotos( search );

    useEffect(() => {
        if(photos.length > 0)
            setImgSelected( photos[0].urlRegular );
    }, [ photos ])

    return (
        <>
            <InputSubject 
                setSearch={ setSearch } 
             />

            <div id="selectorContainer">
                
                <PhotoShowcase photos={ photos } setImage={ setImgSelected } />

                { loading && <p className="message">Loading...</p> }
                    
                { !photos && <p className="message">Connection to images provider failed.</p> }

                { search !== '' && !loading && photos.length < 1 && <p className="message">There were no matches with the search words.</p> }

                { (search === '' || photos.length > 0) && !loading && <Preview photo={ imgSelected } start={ setMainPhoto } /> }
            </div>
        </>
    )
}