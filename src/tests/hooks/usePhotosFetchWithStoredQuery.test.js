import { act, renderHook } from '@testing-library/react-hooks';
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

//It don't work

// Storage.prototype.getItem = jest.fn().mockReturnValue( [ 
//     {
//         id: 33333,
//         description: "Primer car", 
//         urlRegular: 'www.primeraUrlCar.com',
//         urlSmall: 'www.primeraUrlCar.com',
//         author: 'José',
//     },
//     {
//         id: 222222,
//         description: "Segundo car", 
//         urlRegular: 'www.segundaUrlCar.com',
//         urlSmall: 'www.segundaUrlCar.com',
//         author: 'Rodo',
//     },
// ] );

// jest.spyOn(window.localStorage.__proto__, 'getItem').mockImplementation( () => {

//     return true;
// } );


describe('Tests on "usePhotosFetch" hook with query data stored ( TODO )', () => {
    
    Storage.prototype.getItem = jest.fn( ( arg ) => { return JSON.stringify( [
    
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
    ] );});

    test('should second', () => {
        
        const { result } = renderHook( () => usePhotosFetch());

        expect( localStorage.getItem ).toBeCalledTimes(1);
    });

    test('should first', () => {
      
        // const { result } = renderHook( () => usePhotosFetch());

        // expect( result.current.photos.length ).toBe( 2 );
        // expect( result.current.photos[0].id ).toBe( 63455 );
        // expect( result.current.loading ).toBe( false );
    });
    
});
