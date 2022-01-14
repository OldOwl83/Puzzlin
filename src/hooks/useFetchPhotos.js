import { useState, useEffect } from 'react';

import { fetchPhotos } from '../functions/fetchPhotos';

export const useFetchPhotos = ( keywords = '' ) => {
    console.log("Aquí useFetchPhotos!!");
    const [searchState, setSearchState] = useState( 
        {
            photos: [],
            loading: true,
        } );
    
    useEffect(() => {

        setSearchState( {photos: [], loading: true} );
        
        fetchPhotos( keywords )
            .then( phs => 
                { 
                    setSearchState( { photos: phs, loading: false} )
                })
            .catch( () => 
                {
                    console.log("No photos could be retrieved from the server.");
                    setSearchState( { photos: false, loading: false})
                });
    }, [ setSearchState, keywords ]);
    
    return searchState;
}
