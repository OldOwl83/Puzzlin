export const fetchPhotos = async( keywords = '' ) => {

    let page = 1;
    const widePhotos = [];

    do
    {
        const resp = await fetch(`https://api.unsplash.com/search/photos?query=${ encodeURI( keywords ) }&page=${ page }&per_page=100&orientation=landscape&client_id=xjexFbnrsQ1Pg_j3X7tZP8NSSYv_fIj2yH6rXAb-s7g`);

        const data = await resp.json();
        console.log(data);
        if( data.total !== 0 )
            widePhotos.push( ...data.results.filter( obj => obj.width / 1.3 > obj.height && obj.width / 1.42 < obj.height) );
        else
            break;
        
        console.log('Vuelta', page);
        
        page++;
        
    }while(widePhotos.length < 20 && page < 10);
    
    console.log('widePhotos: ', widePhotos);
    const photos = widePhotos.map( ( obj ) => { 
        
        return {
            id: obj.id,
            description: obj.alt_description, 
            urlRegular: obj.urls.regular,
            urlSmall: obj.urls.small,
            author: obj.user.name,
        };
    });
    console.log('photos: ', photos);
    return photos;
}