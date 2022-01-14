import { useState } from "react";
import { PhotoSelector } from "./components/PhotoSelector";
import { Puzzle } from "./components/Puzzle";

import './styles/RompeCocosApp.css';

export const RompeCocosApp = () => {

    const [ photoPuzzle, setPhotoPuzzle ] = useState( false );

    return (
        <>
            <h1>RompeCocos</h1>

            <hr />

            { !photoPuzzle && <PhotoSelector setMainPhoto={ setPhotoPuzzle } /> }

            { photoPuzzle && <Puzzle photo={ photoPuzzle } />}

        </>
    )

};