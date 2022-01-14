
import PropTypes from 'prop-types';
import '../styles/Piece.css';

export const Piece = ( { photo, position} ) => {
    return (
        <div className='pieceContainer'>
            <img 

                className='imgPiece'
                src={ photo }
                style={ { left: `${position[0] * -100}%`, top: `${position[1] * -100}%`, } }

                alt="Piece of puzzle"
            />
        </div>
    )
}

// Piece.PropTypes = {
//     photo: PropTypes.string.isRequired,
//     position: PropTypes.array[Any(Number), Any(Number)].isRequired
// }
