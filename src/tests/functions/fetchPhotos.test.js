import { type } from "@testing-library/user-event/dist/type";
import { fetchPhotos } from "../../functions/fetchPhotos"

describe('Test on fetchPhotos function', () => {

    test('It should return a promise with photos array as response.', async() => {
      
        const photos = await fetchPhotos( 'words' );

        for( let photo of photos )
            expect( photo ).toMatchObject( { id: expect.any( String ), description: expect.any( String ), urlRegular: expect.any( String ), urlSmall: expect.any( String ), author: expect.any( String ) } );
    })
})
