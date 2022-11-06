const generateHTML = (data) => {
    console.log(data)

const employeeData = (employeeObject) => {
    let newRoleData;
    let roleData;
    switch (employeeObject.getRole()) {


        case 'Manager': 
        newRoleData = "Office Number: ";
        roleData = employeeObject.getOffice();
        break;

        case 'Egnineer': 
        newRoleData = "GitHub: ";
        roleData = employeeObject.getGithub();
        break;

        case 'Intern':
        newRoleData = "University: ";
        roleData = employeeObject.getSchool();
        break;


    } 
}
//put html code into return ``
    return `
    
    `
}