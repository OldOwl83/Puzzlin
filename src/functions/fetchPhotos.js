/*
* This function makes the request to the 'unsplash.com' API to receive an array of photo objects. It receives the search keywords by parameter, makes the request and filters the response to obtain only the photos whose width is between 1.3 and 1.42 greater than its height. It loops through several pages of the request ( maximum 10 ) until the array of photo objects reaches a maximum of 20 elements. The obtained photo objects save the following data: id, description, urlRegular, urlSmall and author.
*/

export const fetchPhotos = async( keywords = '' ) => {

    let page = 1; // Request pages counter
    const widePhotos = []; // Array for the obtained photos

    do
    {
        const resp = await fetch(`https://api.unsplash.com/search/photos?query=${ encodeURI( keywords ) }&page=${ page }&per_page=100&orientation=landscape&client_id=xjexFbnrsQ1Pg_j3X7tZP8NSSYv_fIj2yH6rXAb-s7g`);

        const data = await resp.json();
        // console.log(data);
        if( data.total !== 0 )

            widePhotos.push( ...data.results.filter( obj => obj.width / 1.3 > obj.height && obj.width / 1.42 < obj.height) );

        else
            break;
        
        page++;
        
    }while(widePhotos.length < 20 && page < 10);
    
    return widePhotos.map( ( obj ) => { 
        
        return {
            id: obj.id,
            description: obj.alt_description, 
            urlRegular: obj.urls.regular,
            urlSmall: obj.urls.small,
            author: obj.user.name,
        };
    });
}