import React from 'react';
import { Link, useLinkClickHandler } from 'react-router-dom';

export const Header = () => {

    const linker = useLinkClickHandler( '/', { 
        target: '_self',
        replace: false,
        state: {
            contScroll: 0,
            selectedPhoto: 'images/portada1.png',
            author: 'Mauro Donnantuoni',
        }
    });

    return (
        <>
        <Link to='/' id='toHomeLink' onClick={ linker }>
            <header>
                <h1>Puzzlin</h1>
                <div id="logoContainer">
                    <img src="images/rompecabezas.png" alt="logo" />
                </div>
            </header>
        </Link>

        <hr />
        </>
    );
};
