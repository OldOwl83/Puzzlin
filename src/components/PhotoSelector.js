import { useState, useEffect, useContext } from "react";

import { InputSubject } from "./InputSubject";
import { Preview } from './Preview';
import { useFetchPhotos } from "../hooks/useFetchPhotos";
import { PhotoShowcase } from "./PhotoShowcase";

import { MainPhotoContext } from "../RompeCocosApp";

import '../styles/PhotoSelector.css';
import 'animate.css';

export const PhotoSelector = () => {

    console.log('PhotoSelector');

    const [search, setSearch] = useState( '' );

    const { setPhotoPuzzle } = useContext( MainPhotoContext );

    // const [ imgSelected, setImgSelected] = useState( "images/tapa.png" );

    const { photos, loading } = useFetchPhotos( search );

    useEffect(() => {
        if(photos.length > 0)
            setPhotoPuzzle( photos[0].urlRegular );
    }, [ photos ])

    return (
        <>
            <InputSubject 
                setSearch={ setSearch } 
             />

            <div id="selectorContainer">
                
                <PhotoShowcase photos={ photos } />

                { loading && <p className="message">Loading...</p> }
                    
                { !photos && <p className="message">Connection to images provider failed.</p> }

                { search !== '' && !loading && photos.length < 1 && <p className="message">There were no matches with the search words.</p> }

                { (search === '' || photos.length > 0) && !loading && <Preview /> }
            </div>
        </>
    )
}