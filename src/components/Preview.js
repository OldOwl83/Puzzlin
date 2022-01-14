import '../styles/Preview.css';

export const Preview = ( { photo, start } ) => {

    console.log( 'Preview' );

    return (
        <div id="previewContainer" onClick={ () => { start( photo )} }>

            <img src={ photo } alt="Selected photo preview" />

        </div>
    )
}