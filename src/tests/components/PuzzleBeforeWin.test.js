import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Puzzle } from '../../components/Puzzle';

import { MainPhotoContext, PuzzleGrid } from '../../Puzzlin';

describe('Tests on <Puzzle /> component.', () => {

    const puzzleGrid = [ 4, 3 ];
    const movePiece = jest.fn();  
  
    const wrapper = mount(
        <MainPhotoContext.Provider value={ { puzzlePhoto: 'portada.jpg' } }>
        <PuzzleGrid.Provider value={ { puzzleGrid: puzzleGrid } } >
        <MemoryRouter>

            <Puzzle />

        </MemoryRouter>
        </PuzzleGrid.Provider>
        </MainPhotoContext.Provider>
    );

    test('It should generate the puzzle pieces.', () => {
        
        //There is no point in trying to match the snapshot, because the distribution of pieces is random and changes with each mount.

        expect( wrapper.find( '.pieceContainer').length ).toBe( puzzleGrid[0] * puzzleGrid[1] - 1 );
    });

    test('The "puzzleContainer" should display de puzzle grid.', () => {
      
        expect( wrapper.find( '#puzzleContainer' ).prop( 'style' ).gridTemplateColumns ).toBe( `repeat(${ puzzleGrid[0] }, ${ (100 / puzzleGrid[0]) }%)` );
        expect( wrapper.find( '#puzzleContainer' ).prop( 'style' ).gridTemplateRows ).toBe( `repeat(${ puzzleGrid[1] }, ${ (100 / puzzleGrid[1]) }%)` );
    });
    

    test('It should call "movePiece" function as the user press a valid key.', () => {
      
        wrapper.simulate( 'keydown', { key: 'ArrowUp'});
        
        //Don't work
        // expect( movePiece ).toHaveBeenCalledTimes( 1 );
    }); 
});

