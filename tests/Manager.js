const Manager = require ('../lib/Manager');

const managerTest = new Manager ('Prani', 'prani@gmail.com', 4 , 'Manager', 109)

describe('Manager', () => {
    it('Managers name', () =>{
        expect(managerTest.name).toEqual(expect.any(String))
        expect(managerTest.name.length).toBeGreaterThan(2)

    })
    it('Managers email', () =>{
        expect(managerTest.email).toEqual(expect.stringContaining('@'))
    })

    it('Managers ID', () => {
        expect(managerTest.id).toEqual(expect.any(Number))
    })

    it('Managers role', () => {
        expect(managerTest.role).toBe('Manager')
    })

    it('Managers number', () => {
        keys = Object.keys(managerTest)
        optionKey = keys[4]
        expect(optionKey).toBe('office')
        expect(managerTest.office).toEqual(expect.any(Number))
    })
})