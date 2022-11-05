
const Engineer = require('../library/Engineer')
const engineer = new Engineer("Alfred", "001", "Actuallyabutler@gmail.com", "alfredCodes")

describe ("engineer", () => {
    it("returns engineer" , () => {
        expect(engineer.name).toBe("Alfred");
        expect(engineer.id).toBe("001");
        expect(engineer.email).toBe("Actuallyabutler@gmail.com");
        expect(engineer.github).toBe("alfredCodes");
    })
})

describe ("getName method", () => {
    it("should return getName method", () => {
        expect(engineer.getName()).toBe("Alfred")
    })
})

describe ("getId method", ()=> {
    it("should return getId method", () =>{
        expect(engineer.getId()).toBe("001")
    })
})

describe ("getEmail method", () => {
    it("should return getEmail method", () => {
        expect(engineer.getEmail()).toBe("Actuallyabutler@gmail.com")
    })
})
