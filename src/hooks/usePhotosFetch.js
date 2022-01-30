/*
* It watches the URL for query parameters and handles the fetching and storing of data for each search. If a search is repeated, it falls back to localStorage in order to save API requests. It returns a state object containing the array of fetched "photos" and the "loading" status (true or false). If there was an error in the fetch, the "photos" property becomes false.
*/

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { photosFetch } from '../functions/photosFetch';

export const usePhotosFetch = () => {
    // console.log("Aquí usephotosFetch!!");

    const query = useLocation().search.slice(3);
    
    const [ searchState, setSearchState ] = useState( 
        {
            photos: [],
            loading: true,
        } );
    
    useEffect(() => {

        if( !query )
    
            setSearchState( { photos: [ 
                { 
                    id: 'portada1', 
                    description: 'Imagen de portada 1.', 
                    urlSmall: 'images/portada1.png', 
                    urlRegular: 'images/portada1.png', 
                    author: 'Mauro Donnantuoni' 
                },
                { 
                    id: 'portada2', 
                    description: 'Imagen de portada 2.', 
                    urlSmall: 'images/portada2.png', 
                    urlRegular: 'images/portada2.png', 
                    author: 'Mauro Donnantuoni' 
                },
                { 
                    id: 'portada3', 
                    description: 'Imagen de portada 3.', 
                    urlSmall: 'images/portada3.png', 
                    urlRegular: 'images/portada3.png', 
                    author: 'Mauro Donnantuoni' 
                },
                { 
                    id: 'portada4', 
                    description: 'Imagen de portada 4.', 
                    urlSmall: 'images/portada4.png', 
                    urlRegular: 'images/portada4.png', 
                    author: 'Mauro Donnantuoni' 
                }, 
            
            ], loading: false} );
       
        else if( localStorage.getItem( `puzzlin-${query}` ))

            setSearchState( { 
                photos: JSON.parse( localStorage.getItem( `puzzlin-${query}` ) ), 
                loading: false,
             } );

        else
        {
            setSearchState( { photos: [], loading: true } );

            photosFetch( query )
                .then( phs => 
                    { 
                        setSearchState( { photos: phs, loading: false} )
                       
                        if( query )
                            localStorage.setItem( `puzzlin-${query}`, JSON.stringify( phs ) );
                    })
                .catch( ( err ) => 
                    {
                        console.log("No photos could be retrieved from the server. Error: ", err);
                        setSearchState( { photos: false, loading: false})
                    });                   
        }
        
    }, [ setSearchState, query ]);
    
    return searchState;
};
