import { columns, rows } from "../../components/Puzzle";
import { initPieces, piecesReducer } from "../../functions/piecesReducer";

jest.mock('../../components/Puzzle', () => {
    return{
        columns: 4, 
        rows: 3
    }
});

describe('Tests on "initPieces" and "piecesReducer" functions', () => {
    
    test('"initPieces" should return an array containing twelve untidy positions.', () => {
        
        const positions = initPieces( [] );

        expect( positions.length ).toBe( 12 );

        positions.map( ( elem ) => {

            if( elem !== 'black')
            {
                expect( elem.length ).toBe( 2 );
                expect( elem[0] ).toBeGreaterThanOrEqual( 0 );
                expect( elem[0] ).toBeLessThan( columns );
                expect( elem[1] ).toBeGreaterThanOrEqual( 0 );
                expect( elem[1] ).toBeLessThan( rows );
            }
        });
    });
    
    test('"piecesReducer" should ', () => {
    
        const positions = [ 
            [ 0, 0 ], [ 1, 0 ], [ 2, 0 ], [ 3, 0 ],
            [ 0, 1 ], [ 1, 1 ], [ 2, 1 ], [ 3, 1 ],
            [ 0, 2 ], [ 1, 2 ], [ 2, 2 ], 'black',
        ];

        let action = 'down';

        let changedPositions = piecesReducer( positions, action );

        expect( changedPositions ).toEqual( [ 

            [ 0, 0 ], [ 1, 0 ], [ 2, 0 ], [ 3, 0 ],
            [ 0, 1 ], [ 1, 1 ], [ 2, 1 ], 'black',
            [ 0, 2 ], [ 1, 2 ], [ 2, 2 ], [ 3, 1 ],
        ]);

        action = 'up';

        changedPositions = piecesReducer( changedPositions, action );

        expect( changedPositions ).toEqual( [ 

            [ 0, 0 ], [ 1, 0 ], [ 2, 0 ], [ 3, 0 ],
            [ 0, 1 ], [ 1, 1 ], [ 2, 1 ], [ 3, 1 ],
            [ 0, 2 ], [ 1, 2 ], [ 2, 2 ], 'black',
        ]);
    });
});
