import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import { fetchPhotos } from "../../functions/fetchPhotos";

describe('Test on fetchPhotos function', () => {

    test('It should return a promise with photos array as response.', async() => {

        let photos = [];
    
        await fetchPhotos( 'words' )
            .then( ( phs ) => { photos = phs; })
            .catch( (err) => {console.log( err )});

        expect( photos.length ).toBeGreaterThan( 0 );
      
        photos.map( ( photo ) => {
            
            expect( photo ).toMatchObject( { 
                id: expect.any( String ), 
                description: expect.any( String ), 
                urlRegular: expect.any( String ), 
                urlSmall: expect.any( String ), 
                author: expect.any( String ) 
            } );
        });
    });
    
})
