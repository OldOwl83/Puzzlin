import { useState, useEffect, useContext } from "react";

import { MainPhotoContext } from "../Puzzlin";
import { useFetchPhotos } from "../hooks/useFetchPhotos";
import { InputSubject } from "./InputSubject";
import { PhotoShowcase } from "./PhotoShowcase";
import { GridInput } from "./GridInput";
import { Preview } from './Preview';

import '../styles/PhotoSelector.css';
import 'animate.css';

export const PhotoSelector = () => {

    // console.log('PhotoSelector');

    const [ search, setSearch ] = useState( '' );

    const { setPhotoPuzzle } = useContext( MainPhotoContext );

    const { photos, loading } = useFetchPhotos( search );

    useEffect(() => {
        if(photos.length > 0)
        {
            setPhotoPuzzle( photos[0].urlRegular );
            sessionStorage.setItem( 'previousPhotos', JSON.stringify( photos ));
        }
    }, [ photos, setPhotoPuzzle ])

    return (
        <>
            <InputSubject 
                setSearch={ setSearch } 
             />

            <div id="selectorContainer">
                
                <PhotoShowcase photos={ photos } />

                { loading && <p className="message" id="loading">Loading...</p> }
                    
                { !photos && <p className="message">Connection to images provider failed.</p> }

                { search !== '' && !loading && photos.length < 1 && <p className="message">There were no matches with the search words.</p> }

                { (search === '' || photos.length > 0) && !loading && 
                
                <div id="previewContainer">
                    
                    <GridInput />
                    <Preview /> 

                </div>}
                    
            </div>
        </>
    )
}