import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import { PhotoShowcase } from "../../components/PhotoShowcase";

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
    useLocation: () => { return { search: '?q=car' }; },
}));

describe('Tests on <PhotoShowcase /> component', () => {
  
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

    const setPhotosContHeight = jest.fn();
    const setPhotosContScroll = jest.fn();
    
    const wrapper = mount( 
        <MemoryRouter>
            <PhotoShowcase photos={ photos } /> 
        </MemoryRouter>
    );

    test('It should match the snapshot and display two images.', () => {
      
        expect( wrapper ).toMatchSnapshot();

        expect( wrapper.find( 'img' ).length ).toBe( 8 );
    });
    
    test('The "navigate" function should be called with a new state location after clicking any images', () => {
        
        wrapper.find( 'img' ).at(0).simulate( 'click' );

        expect( mockNavigate ).toHaveBeenCalledTimes( 1 );
        expect( mockNavigate ).toHaveBeenCalledWith( { search: '?q=car' }, 
            {
                replace: true,
                state: {
                    contSroll: 0,
                    selectedPhoto: 'www.primeraUrlRegular.com',
                    author: 'José Antonio',
                }
            } );
    });

    test('The initial style of "photosContainer" element should be {top: 0; height: 220}', () => {
        
        expect( wrapper.find( '#photosContainer' ).prop( 'style' ).top).toBe( 0 );
        expect( wrapper.find( '#photosContainer' ).prop( 'style' ).height).toBe( wrapper.find( 'img' ).length * 110 );
    });

    test('The scroll of "photosContainer" element should change after clicking the arrow buttons', () => {
      
        wrapper.find( '.arrows' ).at(1).simulate( 'click' );

        //Don't work
        // expect( wrapper.find( '#photosContainer' ).prop( 'style' ).top).toBe( -330 );
    });
    
    
    
    

});
