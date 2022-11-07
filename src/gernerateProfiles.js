function genenerateteam(){
 
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <script src="https://cdn.tailwindcss.com"></script>
      <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"/>
      <title>Team Generator</title>
  </head>
  <body class="bg-gradient-to-b min-h-screen from-slate-300 to-slate-500 ">
  
    <header>
      <div class ="grid place-items-center pt-10">
        <div id="header" class="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-green-700 to-indigo-800 mb-10">YOUR TEAM!</div>
      </div>
    </header>
  
    <main class="flex flex-row justify-center items-center">
  
      <div class="box-border h-max w-max p-4 border-4 m-10 p-10 border-gray-300 rounded-3xl drop-shadow-lg">
        <div class="">
          <h1 class="flex flex-col justify-center items-center font-bold text-6xl text-slate-700 pb-4 mb-4">${manager.name}</h1>
           <h2 class="flex flex-col justify-center items-center font-bold text-6xl text-blue-800">Manager</h2>
        </div>
        <h2 class="box-border h-16 w-72 p-1 m-5 border-2 items-center font-semibold border-black rounded-xl">ID:<span>${manager.id}</span></h2>
        <h2 class="box-border h-16 w-72 p-1 m-5 border-2 items-center font-semibold border-black rounded-xl">Email:<span>${manager.email}</span></h2>
        <h2 class="box-border h-16 w-72 p-1 m-5 border-2 items-center font-semibold border-black rounded-xl">Office Number:<span>${manager.office}</span></h2>
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
          <h2 class="box-border h-16 w-72 p-1 m-5 border-2 items-center font-semibold border-black rounded-xl">School:<span>${intern.school}</span></h2>
        </div>
    
    </main>
  </body>
  </html>
  `

}