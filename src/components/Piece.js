import { useContext } from 'react';
import PropTypes from 'prop-types';

import '../styles/Piece.css';
import { MainPhotoContext } from '../RompeCocosApp';

export const Piece = ( { position, black = false } ) => {

    const { photoPuzzle } = useContext( MainPhotoContext );

    return (
        <div className={ black ? 'pieceContainer black' : 'pieceContainer' }>
            <img 

                className={ ( black && 'imgBlack' ) || 'imgPiece'}
                src={ photoPuzzle }
                style={ !black 
                    ? { left: `${position[0] * -100}%`, top: `${position[1] * -100}%`, } 
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
