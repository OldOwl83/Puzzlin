import { shallow, mount } from 'enzyme';

import { NumberInput } from "../../components/NumberInput";

describe('Tests on <NumberInput /> component', () => {
  
    const setValue = jest.fn();

    const min = 3;
    const max = 8;
    const init = 5;

    test('It should match the snapshot and takes the initial value', () => {
        
        const wrapper = shallow( <NumberInput 
                                    setValue={ setValue } 
                                    min={ min } 
                                    max={ max } 
                                    initialValue={ init } 
                                /> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( 'input' ).prop( 'value' )).toBe( init );
    });

    test('It should call "setValue" function with the same value entered', () => {
      
        const wrapper = mount( <NumberInput 
                                    setValue={ setValue } 
                                    min={ min } 
                                    max={ max } 
                                    initialValue={ init } 
                                /> );

        expect( wrapper.find( 'input' ).prop( 'value' )).toBe( init );
        
        wrapper.find( 'input' ).simulate( 'change', { target: { value: 4 }});
        
        expect( wrapper.find( 'input' ).prop( 'value' )).toBe( 4 );

        expect( setValue ).toHaveBeenCalledTimes( 2 );
        expect( setValue ).toHaveBeenCalledWith( init );
        expect( setValue ).toHaveBeenCalledWith( 4 );
    });

    test('It should call "setValue" function with the minimum value', () => {
      
        const wrapper = mount( <NumberInput 
                                    setValue={ setValue } 
                                    min={ min } 
                                    max={ max } 
                                    initialValue={ init } 
                                /> );

        expect( wrapper.find( 'input' ).prop( 'value' )).toBe( init );
        
        wrapper.find( 'input' ).simulate( 'change', { target: { value: 1 }});
        
        expect( wrapper.find( 'input' ).prop( 'value' )).toBe( min );

        expect( setValue ).toHaveBeenCalledTimes( 3 );
        expect( setValue ).toHaveBeenCalledWith( init );
        expect( setValue ).toHaveBeenCalledWith( min );
    });

    test('It should call "setValue" function with the maximum value', () => {
      
        const wrapper = mount( <NumberInput 
                                    setValue={ setValue } 
                                    min={ min } 
                                    max={ max } 
                                    initialValue={ init } 
                                /> );

        expect( wrapper.find( 'input' ).prop( 'value' )).toBe( init );
        
        wrapper.find( 'input' ).simulate( 'change', { target: { value: 10 }});
        
        expect( wrapper.find( 'input' ).prop( 'value' )).toBe( max );

        expect( setValue ).toHaveBeenCalledTimes( 3 );
        expect( setValue ).toHaveBeenCalledWith( init );
        expect( setValue ).toHaveBeenCalledWith( max );
    });
});
