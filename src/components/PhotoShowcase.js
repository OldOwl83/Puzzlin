import { useContext } from "react";
import { MainPhotoContext } from "../RompeCocosApp";

export const PhotoShowcase = ( { photos } ) => {
    
    console.log(photos);

    const { setPhotoPuzzle } = useContext( MainPhotoContext );

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
                            setPhotoPuzzle( e.target.src );
                        }} //url de la foto
                    />)
            })}
            
        </div>
    )
}
