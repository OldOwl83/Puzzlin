import 'react';
import { MemoryRouter } from 'react-router-dom';

import { mount } from 'enzyme';

import { Preview } from '../../components/Preview';
import { MainPhotoContext } from '../../Puzzlin';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
    useLocation: () => { 
        return { 
            key: 'dsgfdgs',
            pathname: '/',
            state: {
                selectedPhoto: 'portada.jpg',
                author: 'Napoleón'
            },
        }; },
}));

describe('Tests on <Preview /> component', () => {

    const setPuzzlePhoto = jest.fn();

    const wrapper = mount( 
        <MemoryRouter>
            <MainPhotoContext.Provider value={ { setPuzzlePhoto } }>
                <Preview /> 

            </MainPhotoContext.Provider>
        </MemoryRouter>
        );
  
    test('It should match the snapshot.', () => {
      
        expect( wrapper ).toMatchSnapshot();
    });

    test('The component elements should match the location state data', () => {
      
        expect( wrapper.find( 'img' ).prop( 'src' ) ).toBe( 'portada.jpg' );
        expect( wrapper.find( 'footer' ).text()).toBe( 'Photo by Napoleón' );
    });

    test('It should call "setPuzzlePhoto" function on click event with source image data.', () => {
      
        wrapper.find( 'img' ).simulate( 'click', { target: { src: 'portada.jpg' }} );

        expect( setPuzzlePhoto ).toHaveBeenCalledTimes( 1 );
        expect( setPuzzlePhoto ).toHaveBeenCalledWith( 'portada.jpg' );
    });
    
    
    
});
