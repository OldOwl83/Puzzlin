import { useContext, useEffect, useRef } from 'react';
// import PropTypes from 'prop-types';

import '../styles/Piece.css';
import { MainPhotoContext, PuzzleGrid } from '../RompeCocosApp';
// import { columns } from './Puzzle';

export const Piece = ( { position, direc } ) => {

    const { photoPuzzle } = useContext( MainPhotoContext );

    const { puzzleGrid } = useContext( PuzzleGrid );

    const previousPosition = useRef( [] );

    useEffect( () => {
       
    previousPosition.current = position;
    
    }, [ position, direc ]);

    return (
        <div className={ position === 'black' ? `blackPieceContainer black${ direc[0] }` : `pieceContainer ${ previousPosition.current !== position && position !== 'black' ? direc[0] : '' }` }>
            <img 

                className={ ( position === 'black' && 'imgBlack' ) || 'imgPiece'}
                src={ photoPuzzle }
                style={ position !== 'black' 
                    ? { left: `${position[0] * -100}%`, top: `${position[1] * -100}%`, width: `${ puzzleGrid[0] * 100}%` } 
                    : {}}

                alt="Piece of puzzle"
            />
        </div>
    )
}

// Piece.PropTypes = {
//     photo: PropTypes.string.isRequired,
//     position: PropTypes.array[Any(Number), Any(Number)].isRequired
// }
