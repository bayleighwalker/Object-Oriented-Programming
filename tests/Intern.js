const Intern = require ('../lib/Intern');

describe('Intern', () => {
    it('Interns name', () =>{
        expect(internTest.name).toEqual(expect.any(String))
        expect(internTest.name.length).toBeGreaterThan(2)

    })
    it('Interns email', () =>{
        expect(internTest.email).toEqual(expect.stringContaining('@'))
    })

    it('Interns ID', () => {
        expect(internTest.id).toEqual(expect.any(Number))
    })

    it('Intern Role', () => {
        expect(internTest.role).toBe('Intern')
    })

    it('School', () => {
        keys = Object.keys(internTest )
        optionKey = keys[4]
        expect(optionKey).toBe('school')
        expect(internTest.school).toEqual(expect.any(String))
    })
})

