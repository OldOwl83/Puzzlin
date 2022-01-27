import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';
import { useLocation } from 'react-router-dom';

import { fetchPhotos } from "../../functions/fetchPhotos";
import { useFetchPhotos } from "../../hooks/useFetchPhotos";

jest.mock( 'react-router-dom', () => {

    return {

        ...jest.requireActual( 'react-router-dom' ),
        useLocation: () => { return { search: '?q=car'}; },
    };
});

jest.mock( "../../functions/fetchPhotos", () => {
    return {
        fetchPhotos: () => { return new Promise( ( res ) => res( [ 
                {
                    id: 63455,
                    description: "Primera descripción", 
                    urlRegular: 'www.primeraUrlRegular.com',
                    urlSmall: 'www.primeraUrlSmall.com',
                    author: 'José Antonio',
                },
                {
                    id: 5555,
                    description: "Segunda descripción", 
                    urlRegular: 'www.segundaUrlRegular.com',
                    urlSmall: 'www.segundaUrlSmall.com',
                    author: 'Rodo Arruabarrena',
                },
            ] )); 
        }
    }
});

describe('Tests on "useFetchPhotos" hook', () => {
  
    // fetchPhotos.mockReturnValue( [ 
    //     {
    //         id: 63455,
    //         description: "Primera descripción", 
    //         urlRegular: 'www.primeraUrlRegular.com',
    //         urlSmall: 'www.primeraUrlSmall.com',
    //         author: 'José Antonio',
    //     },
    //     {
    //         id: 5555,
    //         description: "Segunda descripción", 
    //         urlRegular: 'www.segundaUrlRegular.com',
    //         urlSmall: 'www.segundaUrlSmall.com',
    //         author: 'Rodo Arruabarrena',
    //     },
    // ] );

    test('should first', () => {

        act( () => {

            const searchState = renderHook( () => useFetchPhotos( 'words' ));
            

            console.log( searchState.result );
        });

    });
    
});
