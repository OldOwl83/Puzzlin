import { 
    BrowserRouter as Router,
    Routes, Route,
        } from "react-router-dom"; 

import { createContext, useState } from "react";
import { PhotoSelector } from "./components/PhotoSelector";
import { Puzzle } from "./components/Puzzle";
import { NoRoute } from "./components/NoRoute";

import './styles/Puzzlin.css';

export const MainPhotoContext = createContext( null );
export const PuzzleGrid = createContext( [] );

export const Puzzlin = () => {

    const [ puzzlePhoto, setPuzzlePhoto ] = useState( '' );
    const [ puzzleGrid, setPuzzleGrid ] = useState( [4, 3] );

    return (
        <>
            <h1>Puzzlin</h1>
            <hr />

            <Router>
                <MainPhotoContext.Provider value={ { puzzlePhoto, setPuzzlePhoto } } >
                <PuzzleGrid.Provider value={ { puzzleGrid, setPuzzleGrid } }>

                    <Routes>

                        <Route path="/" element={ <PhotoSelector /> } />
                        <Route path="/?q=:query" element={ <PhotoSelector /> } />

                        <Route path="/puzzle" element={ <Puzzle /> } />

                        <Route path="/*" element={ <NoRoute /> } />

                    </Routes>

                </PuzzleGrid.Provider>
                </MainPhotoContext.Provider>
            </Router>

        </>
    )
};