const Intern = require('../library/Intern')
const intern = new Intern("Tim Drake", "003", "notnightwing@gmail.com",)


describe("intern", () => {
    it('returns intern', () => {
        expect(intern.name).toBe("Tim Drake");
        expect(intern.id).toBe("003");
        expect(intern.email).toBe("notnightwing@gmail.com");
        expect(intern.school).toBe("Gotham University")
    }) 
})

describe ("getName method", () => {
    it("should return getName method", () => {
        expect(intern.getName()).toBe("Tim Drake")
    })
})

describe ("getid method", () => {
    it("should return getId method", () => {
        expect(intern.getId()).toBe("003")
    })
})

describe ("getEmail method", () => {
    it("should return getEmail method", () => {
        expect(intern.getEmail()).toBe("notnightwing@gmail.com")
    })
})

describe ("getSchool method", () => {
    it("should return getSchool method", () => {
        expect(intern.getSchool()).toBe("Gotham University")
    })
})
