const Manager = require('../Manager')
const manager = new Manager("Bruce Wayne", "002", "notBatman@gmail.com", "1000")

describe("manager", () => {
    it('returns manager', () => {
        expect(manager.name).toBe("Bruce Wayne");
        expect(manager.id).toBe("002");
        expect(manager.email).toBe("notBatman@gmail.com");
        EXPORTDECLARATION_TYPES(manager.officeNumber).toBe("1000")
    }) 
})
