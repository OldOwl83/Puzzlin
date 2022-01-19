import { shallow } from 'enzyme';
import { renderHook } from '@testing-library/react-hooks';

import { PhotoSelector } from "../../components/PhotoSelector";
import { useState } from 'react';


describe('Test on PhotoSelector component.', () => {

    const setMP = jest.fn();

    
    test('It should match to snapshot.', () => {
        
        const wrapper = shallow( <PhotoSelector setMainPhoto={ setMP } />);

        expect( wrapper ).toMatchSnapshot();
    })

    test('It should deployed the <img /> elements', () => {

        const imgs = [
            {
                id: 'anything',
                description: 'anything', 
                urlRegular: 'anything',
                urlSmall: 'anything',
                author: 'anything',
            },
            {
                id: 'anything',
                description: 'anything', 
                urlRegular: 'anything',
                urlSmall: 'anything',
                author: 'anything',
            },
            {
                id: 'anything',
                description: 'anything', 
                urlRegular: 'anything',
                urlSmall: 'anything',
                author: 'anything',
            },
            {
                id: 'anything',
                description: 'anything', 
                urlRegular: 'anything',
                urlSmall: 'anything',
                author: 'anything',
            },
            {
                id: 'anything',
                description: 'anything', 
                urlRegular: 'anything',
                urlSmall: 'anything',
                author: 'anything',
            },
            {
                id: 'anything',
                description: 'anything', 
                urlRegular: 'anything',
                urlSmall: 'anything',
                author: 'anything',
            },
            {
                id: 'anything',
                description: 'anything', 
                urlRegular: 'anything',
                urlSmall: 'anything',
                author: 'anything',
            },
            {
                id: 'anything',
                description: 'anything', 
                urlRegular: 'anything',
                urlSmall: 'anything',
                author: 'anything',
            },
            {
                id: 'anything',
                description: 'anything', 
                urlRegular: 'anything',
                urlSmall: 'anything',
                author: 'anything',
            },
            {
                id: 'anything',
                description: 'anything', 
                urlRegular: 'anything',
                urlSmall: 'anything',
                author: 'anything',
            },
        ];

        const args = {
            photos: imgs, 
            loading: false,
            connected: true,
        };

        const respu = renderHook( () => useState( { photos: imgs, loading: false, connected: true } ));

        // console.log( respu.result.current );

        const wrapper = shallow( <PhotoSelector setMainPhoto={ setMP } />);

        expect( wrapper ).toMatchSnapshot();
        // expect( wrapper.find( 'img' ).length ).toBeGreaterThan( 2 );
        
    })
    

    
})
