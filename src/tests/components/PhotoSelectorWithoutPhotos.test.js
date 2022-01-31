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

const photos = [];

jest.mock( '../../hooks/usePhotosFetch', () => {
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

        expect( wrapper.find( '#previewContainer' ).exists()).toBe( false );
        expect( wrapper.find( '.message' ).exists()).toBe( true );
        expect( wrapper.find( '.message' ).text()).toBe( 'There were no matches with the search keywords.' );
    });
});
