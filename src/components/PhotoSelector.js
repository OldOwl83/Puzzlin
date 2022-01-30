import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { usePhotosFetch } from "../hooks/usePhotosFetch";
import { InputSubject } from "./InputSubject";
import { PhotoShowcase } from "./PhotoShowcase";
import { GridInput } from "./GridInput";
import { Preview } from './Preview';

import '../styles/PhotoSelector.css';
import 'animate.css';

export const PhotoSelector = () => {

    // console.log('PhotoSelector');
    const location = useLocation();
    const navigate = useNavigate();

    const { photos, loading } = usePhotosFetch();

    useEffect(() => {
        
        if(photos.length > 0 && location.state === null )
        {
                navigate( location, {
                    replace: true,
                    state: {
                        selectedPhoto: photos[0].urlRegular,
                        contScroll: 0,
                    }
                });
        }
            
    }, [ photos ]);

    return (
        <>
            <InputSubject />

            <div id="selectorContainer">
                
                <PhotoShowcase photos={ photos } />

                { loading && <p className="message"><i id="loading" className="fas fa-spinner"></i></p> }
                    
                { !photos && <p className="message">Connection to images provider failed.</p> }

                { !loading && photos.length < 1 && <p className="message">There were no matches with the search keywords.</p> }

                { !loading && photos.length > 0 && 
                
                <div id="previewContainer">
                    
                    <GridInput />
                    <Preview /> 
                    
                </div>}
                    
            </div>
        </>
    )
}