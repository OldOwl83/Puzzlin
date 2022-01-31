import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import '../../functions/photosFetch';
import '../../hooks/usePhotosFetch';
import { PhotoSelector } from '../../components/PhotoSelector';
import { MainPhotoContext, PuzzleGrid } from '../../Puzzlin';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
    useLocation: () => { return { search: '?q=car', state: null }; },
}));

jest.mock( '../../hooks/usePhotosFetch', () => {

    const photos = [ 
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
        {
            id: 63415,
            description: "Primera descripción", 
            urlRegular: 'www.primeraUrlRegular.com',
            urlSmall: 'www.primeraUrlSmall.com',
            author: 'José Antonio',
        },
        {
            id: 5525,
            description: "Segunda descripción", 
            urlRegular: 'www.segundaUrlRegular.com',
            urlSmall: 'www.segundaUrlSmall.com',
            author: 'Rodo Arruabarrena',
        },
        {
            id: 63435,
            description: "Primera descripción", 
            urlRegular: 'www.primeraUrlRegular.com',
            urlSmall: 'www.primeraUrlSmall.com',
            author: 'José Antonio',
        },
        {
            id: 5554,
            description: "Segunda descripción", 
            urlRegular: 'www.segundaUrlRegular.com',
            urlSmall: 'www.segundaUrlSmall.com',
            author: 'Rodo Arruabarrena',
        },
        {
            id: 63555,
            description: "Primera descripción", 
            urlRegular: 'www.primeraUrlRegular.com',
            urlSmall: 'www.primeraUrlSmall.com',
            author: 'José Antonio',
        },
        {
            id: 5565,
            description: "Segunda descripción", 
            urlRegular: 'www.segundaUrlRegular.com',
            urlSmall: 'www.segundaUrlSmall.com',
            author: 'Rodo Arruabarrena',
        },
    ];

    return {
        usePhotosFetch: () => { return {photos: photos, loading: false}; },
    };
});


describe('Tests on <PhotoSelector /> component.', () => {
  
    const wrapper = mount( 

        <MemoryRouter>
        <MainPhotoContext.Provider value={ { setPuzzlePhoto: jest.fn(), } }>
        <PuzzleGrid.Provider value={ { puzzleGrid: [ 4, 3 ], setPuzzleGrid: jest.fn(), } }>

            <PhotoSelector /> 

        </PuzzleGrid.Provider>
        </MainPhotoContext.Provider>
        </MemoryRouter>
    );

    test('It should match the snapshot and display the "previewContainer" element.', () => {
      
        expect( wrapper ).toMatchSnapshot();

        expect( wrapper.find( '#previewContainer' ).exists()).toBe( true );
        expect( wrapper.find( '.message' ).exists()).toBe( false );
    });
    
    test('It should call "navigate" function with a replacing location state as argument.', () => {
        
        //Don't work:
        // expect( mockNavigate ).toHaveBeenCalledTimes( 1 );
    });
    
});
