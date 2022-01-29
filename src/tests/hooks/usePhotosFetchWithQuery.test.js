import { renderHook } from '@testing-library/react-hooks';
import 'react-router-dom';

import "../../functions/photosFetch";

import { usePhotosFetch } from "../../hooks/usePhotosFetch";

jest.mock( 'react-router-dom', () => {

    return {

        ...jest.requireActual( 'react-router-dom' ),
        // useLocation: () => { return { search: '' }; },
        useLocation: () => { return { search: '?q=car' }; },
    };
});

jest.mock( "../../functions/photosFetch", () => {
    return {
        photosFetch: () => { return new Promise( ( res ) => res( [ 
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

//It don't work
jest.spyOn(window.localStorage.__proto__, 'getItem').mockImplementation( () => {

            return JSON.stringify( [ 
                {
                    id: 33333,
                    description: "Primer car", 
                    urlRegular: 'www.primeraUrlCar.com',
                    urlSmall: 'www.primeraUrlCar.com',
                    author: 'José',
                },
                {
                    id: 222222,
                    description: "Segundo car", 
                    urlRegular: 'www.segundaUrlCar.com',
                    urlSmall: 'www.segundaUrlCar.com',
                    author: 'Rodo',
                },
            ] );
       
} );

describe('Tests on "usePhotosFetch" hook with URL query', () => {

    // test('should second', () => {
        
    //     const { result } = renderHook( () => usePhotosFetch());

    //     console.log(result.current);
    //     expect( result.current.photos.length ).toBe( 1 );
    //     expect( result.current.photos[0].id ).toBe( 'portada' );
    //     expect( result.current.loading ).toBe( false );
    // });

    test('should first', async() => {

        const { result, waitForNextUpdate } = renderHook( () => usePhotosFetch());

        await waitForNextUpdate( { timeout: false } );

        expect( result.current.photos.length ).toBe( 2 );
        expect( result.current.photos[0].id ).toBe( 63455 );
        expect( result.current.loading ).toBe( false );
    });

    
});
