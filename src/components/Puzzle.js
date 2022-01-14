import { useState, useEffect } from 'react';
import '../styles/Puzzle.css';
import { Piece } from './Piece';

export const Puzzle = ( { photo } ) => {
    
    const [pieces, setPieces] = useState( [] );

    const [ change, setChange ] = useState( true );
    // console.log("Estado pieces a la renderización: ", pieces);
    
    const rows = 3;
    const columns = 5;
    const auxPieces = pieces.slice();
    
    let [ blackPositionX, blackPositionY ] = [ 4, 2 ];

    const movePiece = ( e ) => {
        e.preventDefault();
        
        setChange( false );
        let auxPiece;
        
        switch (e.key) {
            case 'ArrowDown':
                
                if( blackPositionY > 0)
                {
                    auxPiece = auxPieces[blackPositionX + blackPositionY * 5];
                    
                    auxPieces[blackPositionX + blackPositionY * 5] = auxPieces[blackPositionX + (blackPositionY - 1) * 5];
                    
                    auxPieces[blackPositionX + (blackPositionY - 1) * 5] = auxPiece;
                    
                    blackPositionY--;
                }
                
                break;
                
            case 'ArrowUp':
                
                if( blackPositionY < rows - 1)
                {
                    auxPiece = auxPieces[blackPositionX + blackPositionY * 5];
                    
                    auxPieces[blackPositionX + blackPositionY * 5] = auxPieces[blackPositionX + (blackPositionY + 1) * 5];
                    
                    auxPieces[blackPositionX + (blackPositionY + 1) * 5] = auxPiece;
                    
                    blackPositionY++;
                }
            
                break;
            
            case 'ArrowLeft':
                
                if( blackPositionX < columns - 1)
                {
                    auxPiece = auxPieces[blackPositionX + blackPositionY * 5];
                    
                    auxPieces[blackPositionX + blackPositionY * 5] = auxPieces[blackPositionX + 1 + blackPositionY * 5];
                    
                    auxPieces[blackPositionX + 1 + blackPositionY * 5] = auxPiece;
                    
                    blackPositionX++;
                }
                
                break;
                
            case 'ArrowRight':
                
                if( blackPositionX > 0)
                {
                    auxPiece = auxPieces[blackPositionX + blackPositionY * 5];
                    
                    auxPieces[blackPositionX + blackPositionY * 5] = auxPieces[blackPositionX - 1 + blackPositionY * 5];
                    
                    auxPieces[blackPositionX - 1 + blackPositionY * 5] = auxPiece;
                    
                    blackPositionX--;
                }
                
                break;
                
                default:
                    break;
                    
        }
                
        console.log("x: " + blackPositionX + " y: " + blackPositionY);
        setPieces( auxPieces );
        setChange( true );
    }
                    
    useEffect(() => {
        
        for(let i = 0; i < rows; i++)
            for(let j = 0; j < columns; j++)
                auxPieces.push( <Piece key={ `${j}${i}` } photo={ photo } position={ [ j, i ] } /> );
        
        auxPieces.pop();

        auxPieces.push( <Piece key={ 'black' } photo={ './images/fondo.png' } position={ [ blackPositionX, blackPositionY ] } /> );

        setPieces( auxPieces );

        // console.log("Estado inicial auxPieces: ", auxPieces);
        
        window.addEventListener( 'keydown', movePiece, false );

        return () => {
            window.removeEventListener( 'keydown', movePiece );
        }
    }, []);
    
    return (

        <div id="puzzleContainer">
            { change && pieces.map( piece => piece) }
        </div>
    );
}