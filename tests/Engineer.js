const Engineer = require('../lib/Engineer');

describe("Engineer", () =>{
    it('Engineers name', () =>{
        expect(engineerTest.name).toEqual(expect.any(String))
        expect(engineerTest.name.length).toBeGreaterThan(2)

    })
    it('Engineers email', () =>{
        expect(engineerTest.email).toEqual(expect.stringContaining('@'))
    })

    it('Engineers ID', () => {
        expect(engineerTest.id).toEqual(expect.any(Number))
    })

    it('Engineers role', () => {
        expect(engineerTest.role).toBe('Engineer')
    })

    it('Github', () => {
        keys = Object.keys(engineerTest)
        optionKey = keys[4]
        expect(optionKey).toBe('gitHub')
        expect(engineerTest.gitHub).toEqual(expect.any(String))
    })


})