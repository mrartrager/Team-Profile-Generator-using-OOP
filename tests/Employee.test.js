const Employee = require("../Employee");
const employee = new Employee('Wally', "123", 'Wally@email.com');

describe("employee", () => {
    it('returns employee', () => {
        expect(employee.name).toBe("Wally")
        expect(employee.id).toBe("123")
        expect(employee.email).toBe("Wally@email.com")
    }) 
})

