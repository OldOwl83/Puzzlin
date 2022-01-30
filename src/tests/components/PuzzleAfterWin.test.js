import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Puzzle } from '../../components/Puzzle';
import '../../hooks/useVictory';

import { MainPhotoContext, PuzzleGrid } from '../../Puzzlin';

jest.mock( '../../hooks/useVictory', () => {
    return { useVictory: () => true };
});

describe('first', () => {
  
    const puzzleGrid = [ 4, 3 ];
    
    test('It should show the "victoryPhoto" and the "victoryAlert" as the puzzle was complete.', () => {

        const wrapper = mount(
            <MainPhotoContext.Provider value={ { puzzlePhoto: 'portada.jpg' } }>
            <PuzzleGrid.Provider value={ { puzzleGrid: puzzleGrid } } >
            <MemoryRouter>
    
                <Puzzle />
    
            </MemoryRouter>
            </PuzzleGrid.Provider>
            </MainPhotoContext.Provider>
        );

        expect( wrapper.find( '#puzzleContainer' ).exists() ).toBeFalsy();
        expect( wrapper.find( '#victoryPhoto' ).exists() ).toBeTruthy();
        expect( wrapper.find( '#victoryAlert' ).exists() ).toBeTruthy();
    });
});