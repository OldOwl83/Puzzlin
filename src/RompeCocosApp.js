import { 
    BrowserRouter as Router,
    Routes, Route,
        } from "react-router-dom"; 

import { createContext, useState } from "react";
import { PhotoSelector } from "./components/PhotoSelector";
import { Puzzle } from "./components/Puzzle";

import './styles/RompeCocosApp.css';

export const MainPhotoContext = createContext( null );
export const PuzzleGrid = createContext( [] );

export const RompeCocosApp = () => {

    const [ photoPuzzle, setPhotoPuzzle ] = useState( "images/tapa.png" );
    const [ puzzleGrid, setPuzzleGrid ] = useState( [3, 3] );


    return (
        <>
            <h1>Puzzlin</h1>
            <hr />

            <Router>
                <MainPhotoContext.Provider value={ { photoPuzzle, setPhotoPuzzle } } >
                <PuzzleGrid.Provider value={ { puzzleGrid, setPuzzleGrid } }>

                    <Routes>

                        <Route exact path="/" element={ <PhotoSelector /> } />

                        <Route exact path="/puzzle" element={ <Puzzle /> } />

                    </Routes>

                </PuzzleGrid.Provider>
                </MainPhotoContext.Provider>
            </Router>

        </>
    )
};