import { 
    BrowserRouter as Router,
    Routes, Route,
        } from "react-router-dom"; 

import { createContext, useState } from "react";
import { PhotoSelector } from "./components/PhotoSelector";
import { Puzzle } from "./components/Puzzle";
import { NoRoute } from "./components/NoRoute";

import './styles/Puzzlin.css';
import './styles/footer.css';

export const MainPhotoContext = createContext( null );
export const PuzzleGrid = createContext( [] );

export const Puzzlin = () => {

    const [ puzzlePhoto, setPuzzlePhoto ] = useState( '' );
    const [ puzzleGrid, setPuzzleGrid ] = useState( [4, 3] );

    return (
        <>
            <header>
                <h1>Puzzlin</h1>
                <div id="logoContainer">
                    <img src="images/rompecabezas.png" />
                </div>
            </header>
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
            <footer id="footer">

                <ul id="footer_data">
                    <li>© 2022 Mauro Donnantuoni Moratto</li>
                    <li><a href="https://github.com/OldOwl83">GitHub: OldOwl83</a></li>
                    <li><a href="https://hellocode-blog.net/">Hello Code!</a></li>
                    <li id='freepik'><a href="https://www.flaticon.es/iconos-gratis/rompecabezas" title="rompecabezas iconos">Rompecabezas iconos creados por Freepik - Flaticon</a></li>
                </ul>
                <img src="images/developed.png" id="developed" draggable="false" />

            </footer>
        </>
    )
};