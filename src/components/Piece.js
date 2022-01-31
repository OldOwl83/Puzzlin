/*
* This component represents a location on the puzzle grid that contains any pieces of the cropped photo. The location is fixed, while the pieces travel through the grid positions. This effect is achieved by moving an enlarged copy of the photo inside the location container, which partially covers it, revealing only the part that corresponds to the housed piece.
*/

import React, { memo, useContext, useEffect, useRef } from 'react';

import { MainPhotoContext, PuzzleGrid } from '../Puzzlin';
import '../styles/Piece.css';

export const Piece = memo(( { position, direc } ) => {

    const { puzzlePhoto } = useContext( MainPhotoContext );
    const { puzzleGrid } = useContext( PuzzleGrid );

    const previousPosition = useRef( [] );

    useEffect( () => {
       
    previousPosition.current = position; //To trigger the move animation (linked with classes 'up', down', etc.) only when the position has changed. 
    
    }, [ position, direc ]);

    return (
        <div className={ position === 'black' ? `blackPieceContainer black${ direc }` : `pieceContainer ${ previousPosition.current !== position && position !== 'black' ? direc : '' }` }>

            <img 
                className={ ( position === 'black' && 'imgBlack' ) || 'imgPiece'}
                src={ puzzlePhoto }
        // Position properties determine which piece is displayed.
                style={ position !== 'black' 
                    ? { left: `${position[0] * -100}%`, top: `${position[1] * -100}%`, width: `${ puzzleGrid[0] * 100}%` } 
                    : {}}

                alt="Piece of puzzle"
                draggable='false'
            />
            
        </div>
    )
});