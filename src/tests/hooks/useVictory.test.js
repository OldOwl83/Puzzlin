import { renderHook } from '@testing-library/react-hooks';
import 'react';

import { useVictory } from "../../hooks/useVictory";

jest.mock( 'react', () => {
    return {
        ...jest.requireActual( 'react' ), 
        useContext: () => { return {
            puzzleGrid: [ 4, 3 ]
        }}
    }
});

describe('Tests on "useVictory" custom hook', () => {

    test('It should recognize the win condition and return "true" consequently', () => {
        
        const positions = [ 
            [ 0, 0 ], [ 1, 0 ], [ 2, 0 ], [ 3, 0 ],
            [ 0, 1 ], [ 1, 1 ], [ 2, 1 ], [ 3, 1 ],
            [ 0, 2 ], [ 1, 2 ], [ 2, 2 ], 'black',
        ];

        const win = renderHook( () => useVictory( positions ));

        expect( win.result.current ).toBeTruthy();
    });
    
    test('It should recognize the win condition and return "true" consequently', () => {
        
        const positions = [ 
            [ 0, 0 ], [ 1, 0 ], [ 2, 0 ], [ 3, 0 ],
            [ 0, 1 ], [ 1, 1 ], [ 2, 1 ], 'black',
            [ 0, 2 ], [ 1, 2 ], [ 2, 2 ], [ 3, 1 ],
        ];

        const win = renderHook( () => useVictory( positions ));

        expect( win.result.current ).not.toBeTruthy();
    });
});
