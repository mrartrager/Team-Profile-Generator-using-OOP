const employee = require("./Employee.js")

class Egineer extends employee {
constructor ({name, email, id, github}){
    super({name, email, id});
    this.github=github;
    this.role="Egineer";
}
}













module.exports=Egineer