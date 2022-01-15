import { 
    BrowserRouter as Router,
    Routes, Route,
        } from "react-router-dom"; 

import { createContext, useState } from "react";
import { PhotoSelector } from "./components/PhotoSelector";
import { Puzzle } from "./components/Puzzle";

import './styles/RompeCocosApp.css';

export const MainPhotoContext = createContext( null );

export const RompeCocosApp = () => {

    const [ photoPuzzle, setPhotoPuzzle ] = useState( "images/tapa.png" );



    return (
        <>
            <h1>RompeCocos</h1>
            <hr />

            <Router>
                <MainPhotoContext.Provider value={ { photoPuzzle, setPhotoPuzzle } } >
                    <Routes>

                        <Route exact path="/" element={ <PhotoSelector /> } />

                        <Route exact path="/puzzle" element={ <Puzzle /> } />

                    </Routes>
                </MainPhotoContext.Provider>
            </Router>

        </>
    )

};