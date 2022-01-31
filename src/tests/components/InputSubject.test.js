import React from 'react';
import { MemoryRouter } from 'react-router-dom'
import { mount } from 'enzyme';

import { InputSubject } from "../../components/InputSubject";

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
    useLocation: () => { return { search: '?q=car' }; },
}));

describe('Tests on <InputSubject /> component', () => {
  
    // const submitInput = jest.fn();

    const wrapper = mount( 
        <MemoryRouter>
            <InputSubject />
        </MemoryRouter> 
        );

    test('It should match the snapshot ', () => {  

        expect( wrapper ).toMatchSnapshot();
    });

    test('It should change the input value and reset it after submiting the form.', () => {
      
        wrapper.find( 'input' ).simulate( 'change', { target: { value: 'car' } } );

        expect( wrapper.find( 'input' ).prop( 'value' )).toBe( 'car' );
        
        wrapper.find( 'form' ).simulate( 'submit', { preventDefault: () => {} } );
        
        expect( wrapper.find( 'input' ).prop( 'value' )).toBe( '' );
    });
    

    test('It should call "navigate" function with URL query parameters and history replace as arguments.', () => {

        wrapper.find( 'input' ).simulate( 'change', { target: { value: 'car' } } );

        wrapper.find( 'form' ).simulate( 'submit', { preventDefault: () => {} } );

        expect( mockNavigate ).toHaveBeenCalledTimes( 1 );
        expect( mockNavigate ).toHaveBeenCalledWith( '../?q=car', { replace: true } );
    });

    test('It should call "navigate" function with URL query parameters and history push (replace: false) as arguments.', () => {

        wrapper.find( 'input' ).simulate( 'change', { target: { value: 'cars' } } );

        wrapper.find( 'form' ).simulate( 'submit', { preventDefault: () => {} } );

        expect( mockNavigate ).toHaveBeenCalledTimes( 1 );
        expect( mockNavigate ).toHaveBeenCalledWith( '../?q=cars', { replace: false } );
    });
});
