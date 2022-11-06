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
    <div class="box-border h-max w-max p-4 border-4 m-10 p-10 border-gray-300 rounded-3xl drop-shadow-lg">
    <div class="">
      <h1 class="flex flex-col justify-center items-center font-bold text-6xl text-slate-700 pb-4 mb-4">${manager.name}</h1>
       <h2 class="flex flex-col justify-center items-center font-bold text-6xl text-blue-800">Manager</h2>
    </div>
    <h2 class="box-border h-16 w-72 p-1 m-5 border-2 items-center font-semibold border-black rounded-xl">ID:<span>${manager.id}</span></h2>
    <h2 class="box-border h-16 w-72 p-1 m-5 border-2 items-center font-semibold border-black rounded-xl">Email:<span>${manager.email}</span></h2>
    <h2 class="box-border h-16 w-72 p-1 m-5 border-2 items-center font-semibold border-black rounded-xl">Office Number:<span>${manager.officeNumber}</span></h2>
  </div>

  <div class="box-border h-max w-max p-4 border-4 m-10 p-10 border-gray-300 rounded-3xl drop-shadow-lg">
      <div class="">
        <h1 class="flex flex-col justify-center items-center font-bold text-6xl text-slate-700 pb-4 mb-4">${engineer.name}</h1>
         <h2 class="flex flex-col justify-center items-center font-bold text-6xl text-teal-700">Engineer</h2>
      </div>
      <h2 class="box-border h-16 w-72 p-1 m-5 border-2 items-center font-semibold border-black rounded-xl">ID:<span>${engineer.id}</span></h2>
      <h2 class="box-border h-16 w-72 p-1 m-5 border-2 items-center font-semibold border-black rounded-xl">Email:<span>${engineer.email}</span></h2>
      <h2 class="box-border h-16 w-72 p-1 m-5 border-2 items-center font-semibold border-black rounded-xl">Github<span>${engineer.github}</span></h2>
    </div>

    <div class="box-border h-max w-max p-4 border-4 m-10 p-10 border-gray-300 rounded-3xl drop-shadow-lg">
      <div class="">
        <h1 class="flex flex-col justify-center items-center font-bold text-6xl text-slate-700 pb-4 mb-4">${intern.name}</h1>
         <h2 class="flex flex-col justify-center items-center font-bold text-6xl text-green-700">Intern</h2>
      </div>
      <h2 class="box-border h-16 w-72 p-1 m-5 border-2 items-center font-semibold border-black rounded-xl">ID:<span>${intern.id}</span></h2>
      <h2 class="box-border h-16 w-72 p-1 m-5 border-2 items-center font-semibold border-black rounded-xl">Email:<span>${intern.email}</span></h2>
      <h2 class="box-border h-16 w-72 p-1 m-5 border-2 items-center font-semibold border-black rounded-xl">School:<span>${intern.university}</span></h2>
    </div>
    `
}