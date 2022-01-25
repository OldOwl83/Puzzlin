import { useReducer, useEffect, useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { initPieces, piecesReducer } from '../functions/piecesReducer';
import { useVictory } from '../hooks/useVictory';
import { MainPhotoContext, PuzzleGrid } from '../Puzzlin';

import '../styles/Puzzle.css';
import { Piece } from './Piece';

export let columns;
export let rows;

export const Puzzle = () => {
    
    const { puzzleGrid } = useContext( PuzzleGrid );
    const { photoPuzzle } = useContext( MainPhotoContext );
    
    columns = puzzleGrid[0];
    rows = puzzleGrid[1];

    const [ positions, dispatch ] = useReducer( piecesReducer, [], initPieces );
    
    const [ direc, setDirec ] = useState( '' );

    const win = useVictory( positions );

    const movePiece = ( e ) => {
        
        const blackIndex = positions.findIndex( pos => pos === 'black' );
        
        switch (e.key) {

            case 'ArrowDown':

                e.preventDefault(); //It only prevent default actions for the current pressed key.
                
                if( blackIndex / columns >= 1)
                {
                    setDirec( ['down', 'up'] );
                    dispatch("down");
                }
                break;
                
            case 'ArrowUp':

                e.preventDefault();
                    
                if( blackIndex / columns < rows - 1)
                {
                    setDirec( ['up', 'down'] );
                    dispatch("up");
                }   
                break;
                
            case 'ArrowRight':

                e.preventDefault();
                
                if( blackIndex % columns !== 0)
                {
                    setDirec( ['right', 'left'] );
                    dispatch("right");
                }   
                break;
                
            case 'ArrowLeft':

                e.preventDefault();

                if( blackIndex % columns !== columns - 1)
                {
                    setDirec( ['left', 'right'] );
                    dispatch("left");
                }   
                break;
                                
            default:
                break;
        }
    }
                    
    useEffect(() => {
        
        window.addEventListener( 'keydown', movePiece, false );

        return () => {
            window.removeEventListener( 'keydown', movePiece );
        }
    }, [ positions ] ); //It needs update the value of 'blackIndex' in the 'movePiece' function.

    useEffect( () => {

        if(win)
            window.removeEventListener( 'keydown', movePiece );
    }, [ win ]);

    return (

        <>
        <h2>Use the keyboard arrows to move the pieces inside the hole</h2>
        { !win && 
        
        <div 
            id="puzzleContainer" 
            style={ { gridTemplateColumns: `repeat(${ columns }, ${ (100 / columns) }%)`,
    gridTemplateRows: `repeat(${ rows }, ${ (100 / rows) }%)`, } }
        >

            { positions.map( ( pos, i ) => <Piece key={ i } position={ pos } direc={direc} />) }

        </div> }

        { win && <img id="victoryPhoto" src={ photoPuzzle } />}

        <Link to={ -1 }><button id="comeBack">Come back to photos selector</button></Link>

        { win && <div id='victoryAlert'><p>You win!</p></div>}

        </>
    );
}