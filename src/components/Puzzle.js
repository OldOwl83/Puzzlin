import React, { useReducer, useEffect, useState, useContext, useCallback } from 'react';
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
    const { puzzlePhoto } = useContext( MainPhotoContext );
    
    columns = puzzleGrid[0];
    rows = puzzleGrid[1];

    const [ positions, dispatch ] = useReducer( piecesReducer, [], initPieces );
    
    const [ direc, setDirec ] = useState( '' );

    const win = useVictory( positions );

    const movePiece = useCallback( ( e ) => {
        
        const blackIndex = positions.findIndex( pos => pos === 'black' );
        
        switch (e.key) {

            case 'ArrowDown':

                e.preventDefault(); //It only prevent default actions for the current pressed key.
                
                if( blackIndex / columns >= 1)
                {
                    setDirec( 'down' );
                    dispatch( "down" );
                }
                break;
                
            case 'ArrowUp':

                e.preventDefault();
                    
                if( blackIndex / columns < rows - 1)
                {
                    setDirec( 'up' );
                    dispatch( "up" );
                }   
                break;
                
            case 'ArrowRight':

                e.preventDefault();
                
                if( blackIndex % columns !== 0)
                {
                    setDirec( 'right' );
                    dispatch( "right" );
                }   
                break;
                
            case 'ArrowLeft':

                e.preventDefault();

                if( blackIndex % columns !== columns - 1)
                {
                    setDirec( 'left' );
                    dispatch( "left" );
                }   
                break;
                                
            default:
                break;
        }
    }, [ positions ]);
                    
    useEffect(() => {
        
        window.addEventListener( 'keydown', movePiece, false );

        return () => {
            window.removeEventListener( 'keydown', movePiece );
        }
    }, [ positions, movePiece ] );

    useEffect( () => {

        if(win)
            window.removeEventListener( 'keydown', movePiece );
    }, [ win, movePiece ]);

    return (

        <>

        <h2>Use the keyboard arrows to move the pieces inside the hole</h2>

        { !win && 
        
        <div 
            id="puzzleContainer" 
            style={ { gridTemplateColumns: `repeat(${ columns }, ${ (100 / columns) }%)`, gridTemplateRows: `repeat(${ rows }, ${ (100 / rows) }%)`, } }
        >

            { positions.map( ( pos, i ) => <Piece key={ i } position={ pos } direc={ direc } />) }

        </div> }

        { win && 
        
        <>
            <img id="victoryPhoto" src={ puzzlePhoto } alt="You win!" />
            <div id='victoryAlert'><p>You win!</p></div> 
        </> }
        

        <Link to={ -1 }><button id="comeBack">Back to photo picker</button></Link>

        </>
    );
}