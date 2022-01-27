import { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import { fetchPhotos } from '../functions/fetchPhotos';

export const useFetchPhotos = ( keywords = '' ) => {
    // console.log("Aquí useFetchPhotos!!");

    const query = useLocation().search.slice(3);
    // console.log("Query: ", query);
    
    const [ searchState, setSearchState ] = useState( 
        {
            photos: [],
            loading: true,
        } );
    
    useEffect(() => {

        if( !query )
    
            setSearchState( { photos: [ { id: 'portada', description: 'Imagen de portada.', urlSmall: 'images/tapa.png', urlRegular: 'images/tapa.png' } ], loading: false} );
       
        else if( localStorage.getItem( `puzzlin-${query}` ))

            setSearchState( { 
                photos: JSON.parse( localStorage.getItem( `puzzlin-${query}` ) ), 
                loading: false,
             } );

        else
        {
            setSearchState( { photos: [], loading: true } );
            
            fetchPhotos( keywords )
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
        
    }, [ setSearchState, keywords, query ]);
    
    return searchState;
};
