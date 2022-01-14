import { InputSubject } from "../../components/InputSubject";

import { shallow } from 'enzyme';
import { renderHook } from '@testing-library/react-hooks';

describe('Test on InputSubject component', () => {

    const setPP = jest.fn();
    const setLP = jest.fn();
    const setCP = jest.fn();


    let wrapper;

    beforeEach( () => {

        wrapper = shallow( <InputSubject setPhotosParent={ setPP } setLoadingParent={ setLP } setConnectedParent={ setCP } />);
    });

    //const submitInput = shallow( <InputSubject setPhotosParent={ setPP } setLoadingParent={ setLP } setConnectedParent={ setCP } /> );

    test('Rendering control', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('It should take the input changes.', () => {

        wrapper.find( 'input' ).simulate( 'change', { target:{ value: "Hola mundo" } } );

        expect( wrapper.find( 'input' ).props().value ).toBe( 'Hola mundo' );
        
    });
});
