import { photosFetch } from "../../functions/photosFetch";

describe('Tests on photosFetch function', () => {

    test('It should return a promise with photos array as response.', async() => {

        let photos = [];
    
        await photosFetch( 'words' )
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
