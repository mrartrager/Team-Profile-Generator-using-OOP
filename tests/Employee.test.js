const Employee = require("../Employee");
const employee = new Employee('Wally', "123", 'Wally@email.com');

describe("employee", () => {
    it('returns employee', () => {
        expect(employee.name).toBe("Wally")
        expect(employee.id).toBe("123")
        expect(employee.email).toBe("Wally@email.com")
    }) 
})

describe("getName method", () => {
    it ("should return getName method", () => {
        expect(employee.getName()).toBe("Wally")
    })
})

describe("getId method", ()=> {
    it("should return getId method", () => {
        expect(employee.getId()).toBe("123")
    })
})

describe("getEmail method", () => {
    it("Should return getEmail method", () => {
        expect(employee.getEmail()).toBe('Wally@email.com')
    } )
})

describe("getRole method", () => {
    it("should return getRole method", () => {
        expect(employee.getRole()).toBe('Employee')
    })
})