import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => { 

    test('getHeroesById debe de devolver un héroe por ID', () => { 

        const id = 1;
        const hero = getHeroeById(id);

        expect( hero ).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
    })

    test('getHeroesById debe de devolver undefined', () => { 

        const id = 100;
        const hero = getHeroeById(id);

        expect( hero ).toBeUndefined();
    })

    test('getHeroesByOwner debe de devolver un array con 3 héroes de DC', () => { 
        const owner = 'DC';
        const resp = getHeroesByOwner(owner);
        
        expect( typeof resp ).toBe("object")
        expect( resp ).toHaveLength(3);
        expect( resp ).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);
    })

    test('getHeroesByOwner debe de devolver un array con 2 héroes de Marvel', () => { 
        const owner = 'Marvel';
        const resp = getHeroesByOwner(owner);
        
        expect( resp ).toHaveLength(2);
    })
})