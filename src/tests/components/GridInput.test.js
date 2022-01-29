import 'react';
import { shallow, mount } from 'enzyme';

import { GridInput } from "../../components/GridInput";

jest.mock( 'react', () => {
    return {
        ...jest.requireActual( 'react' ), 
        useContext: () => { return {
            puzzleGrid: [ 4, 3 ],
            setPuzzleGrid: jest.fn(),
        }}
    }
});

describe('Tests on the <GridInput /> component', () => {

    const setPuzzleGrid = jest.fn();

    test('It should match the snapshot.', () => {
      
        const wrapper = shallow( <GridInput /> );

        expect( wrapper ).toMatchSnapshot();
    });

    test('Its input boxes should take the context values as current values.', () => {
      
        const wrapper = mount( <GridInput /> );

        expect( wrapper.find( 'input' ).at(0).prop( 'value')).toBe( 4 );
        expect( wrapper.find( 'input' ).at(1).prop( 'value')).toBe( 3 );
    });
});
