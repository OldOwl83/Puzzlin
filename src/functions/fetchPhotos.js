export const fetchPhotos = async( keywords = '' ) => {

    const resp = await fetch(`https://api.unsplash.com/search/photos?query=${ encodeURI(keywords) }&per_page=100&client_id=xjexFbnrsQ1Pg_j3X7tZP8NSSYv_fIj2yH6rXAb-s7g`);

    const data = await resp.json();

    const widePhotos = data.results.filter( obj => obj.width / 1.2 > obj.height && obj.width / 1.52 < obj.height);
    
    
    const photos = widePhotos.map( ( obj ) => {
            
        return {
            id: obj.id,
            description: obj.alt_description, 
            urlRegular: obj.urls.regular,
            urlSmall: obj.urls.small,
            author: obj.user.name,
        };
    });

    return photos;
}