
const Manager = require('../Manager')
const manager = new Manager("Bruce Wayne", "002", "notBatman@gmail.com", "1000")

describe("manager", () => {
    it('returns manager', () => {
        expect(manager.name).toBe("Bruce Wayne");
        expect(manager.id).toBe("002");
        expect(manager.email).toBe("notBatman@gmail.com");
        expect(manager.officeNumber).toBe("1000")
    }) 
})

describe ("getName method", () => {
    it("should return getName method", ()=> {
        expect(manager.getName()).toBe("Bruce Wayne")
    })
})

describe ("getid method", () => {
    it("should return getId method", ()=> {
        expect(manager.getId()).toBe("002")
    })
})

describe ("getEmail method", () => {
    it("should return getEmail method", ()=> {
        expect(manager.getEmail()).toBe("notBatman@gmail.com")
    })
})

describe ("getofficeNumber method", () => {
    it("should return getOfficeNumber method", ()=> {
        expect(manager.getOfficeNumber()).toBe("1000")
    })
})