const Employee = require ('../lib/Employee');

describe('Employee', () => {
    it('Employees name', () => {
        expect(employeeTest.name).toEqual(expect.any(String))
        expect(employeeTest.name.length).toBeGreaterThan(2)
    })

    it('Employees email', () =>{
        expect(employeeTest.email).toEqual(expect.stringContaining('@'))
    })

    it('Employees ID', () => {
        expect(employeeTest.id).toEqual(expect.any(Number))
    })

    it('Employees Role', () => {
        expect(employeeTest.role).toBe('Employee')
    })

})