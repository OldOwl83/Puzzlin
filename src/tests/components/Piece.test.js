import 'react';
import { mount } from 'enzyme';

import { Piece } from '../../components/Piece';
import { MainPhotoContext, PuzzleGrid } from '../../Puzzlin';


jest.mock( 'react', () => ({
    ...jest.requireActual( 'react' ),
    useRef: () => { return { current: [ 1, 2 ] }; },
 }));

describe('Tests on "white" <Piece /> component', () => {

    let position = [ 1, 1 ];
    let puzzleGrid = [ 4, 3 ];

    const wrapper = mount(
        <MainPhotoContext.Provider value={ { puzzlePhoto: 'portada.jpg' } }>
        <PuzzleGrid.Provider value={ { puzzleGrid: puzzleGrid } } >

            <Piece position={ position } direc={ 'up' } />

        </PuzzleGrid.Provider>
        </MainPhotoContext.Provider>
    );
  

    test('It should match the snapshot', () => {
      
        expect( wrapper ).toMatchSnapshot();
    });

    test('The image should take the source passed by parameter.', () => {
      
        expect( wrapper.find( 'img' ).prop( 'src' )).toBe( 'portada.jpg' );
    });

    test('The "div" and "img" classNames should be "pieceContainer up" and "imgPiece", respectively.', () => {
      
        expect( wrapper.find( 'div' ).prop( 'className' )).toBe( 'pieceContainer up' );
        expect( wrapper.find( 'img' ).prop( 'className' )).toBe( 'imgPiece' );
    });

    test('It should sets the right position and width of photo.', () => {
      
        expect( wrapper.find( 'img' ).prop( 'style' ).left).toBe( `${ position[0] * -100 }%` );
        expect( wrapper.find( 'img' ).prop( 'style' ).top).toBe( `${ position[1] * -100 }%` );
        expect( wrapper.find( 'img' ).prop( 'style' ).width).toBe( `${ puzzleGrid[0] * 100 }%` );
    });
});

describe('Tests on "black" <Piece /> component', () => {

    let position = 'black';
    let puzzleGrid = [ 4, 3 ];

    const wrapper = mount(
        <MainPhotoContext.Provider value={ { puzzlePhoto: 'portada.jpg' } }>
        <PuzzleGrid.Provider value={ { puzzleGrid: puzzleGrid } } >

            <Piece position={ position } direc={ 'up' } />

        </PuzzleGrid.Provider>
        </MainPhotoContext.Provider>
    );
  

    test('It should match the snapshot', () => {
      
        expect( wrapper ).toMatchSnapshot();
    });

    test('The image should take the source passed by parameter.', () => {
      
        expect( wrapper.find( 'img' ).prop( 'src' )).toBe( 'portada.jpg' );
    });

    test('The "div" and "img" classNames should be "blackPieceContainer blackup" and "imgBlack", respectively.', () => {
      
        expect( wrapper.find( 'div' ).prop( 'className' )).toBe( 'blackPieceContainer blackup' );
        expect( wrapper.find( 'img' ).prop( 'className' )).toBe( 'imgBlack' );
    });
});
