
export const PhotoShowcase = ( { photos, setImage } ) => {
console.log(photos);
    return (
        <div id="photosContainer">
             
            { photos.map( ( { id, description, urlSmall }, i ) => {
            
                if( i < 5 )
                    return (
                    <img className="animate__animated animate__zoomIn"
                        key={ id } 
                        src={ urlSmall } 
                        alt={ description } 
                        onClick={ (e) => {
                            // setMainPhoto( e.target.src );
                            setImage( e.target.src );
                        }} //url de la foto
                    />)
            })}
            
        </div>
    )
}
