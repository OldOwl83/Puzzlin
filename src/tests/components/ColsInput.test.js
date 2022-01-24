import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import { ColsInput } from '../../components/ColsInput';
import { PuzzleGrid } from '../../Puzzlin';

// jest.mock( '../../Puzzlin' );

describe('Test on <ColsInput />', () => {

    const setPuzzleGrid = jest.fn();

    const wrapper = mount( 
    
        <PuzzleGrid.Provider value={ { puzzleGrid: [4, 3], setPuzzleGrid } }>
            <ColsInput /> 
        </PuzzleGrid.Provider>
    
    );

    test('should match the snapshot', () => {
        
        expect( wrapper ).toMatchSnapshot();
    });

    test('should get as value the same value it sends (6), and calls "setPuzzleGrid" with "[6, 3]" as argument.', () => {
        
        wrapper.find( 'input' ).simulate( 'change', { target: { value: 6 }} );
        
        expect( wrapper.find( 'input' ).prop( 'value' ) ).toBe( 6 );
        
        expect( setPuzzleGrid ).toBeCalledTimes( 1 );
        expect( setPuzzleGrid ).toBeCalledWith( [ 6, 3 ] );
    });

    test('should get as value the same value it sends (""), but calls "setPuzzleGrid" with "[4, 3]" as argument.', () => {

        wrapper.find( 'input' ).simulate( 'change', { target: { value: '' }} );

        expect( wrapper.find( 'input' ).prop( 'value' ) ).toBe( '' );

        expect( setPuzzleGrid ).toBeCalledTimes( 1 );
        expect( setPuzzleGrid ).toBeCalledWith( [ 4, 3 ] );
    });
    
    test('should get as value always 4 (minimum), and call "setPuzzleGrid" with "[4, 3]" as argument.', () => {
        
        wrapper.find( 'input' ).simulate( 'change', { target: { value: 2 }} );
        
        expect( wrapper.find( 'input' ).prop( 'value' ) ).toBe( 4 );
        
        wrapper.find( 'input' ).simulate( 'change', { target: { value: 0 }} );
        
        expect( wrapper.find( 'input' ).prop( 'value' ) ).toBe( 4 );
        
        expect( setPuzzleGrid ).toBeCalledTimes( 2 );
        expect( setPuzzleGrid ).toBeCalledWith( [ 4, 3 ] );
    });

});
