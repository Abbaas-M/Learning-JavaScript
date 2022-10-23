// Getting the date
let val = new Date();

let dt;

// Setting the date
let bd;
bd = new Date(' 16 May 2007');
bd = new Date('10/23/2022 8:23');
bd = new Date('10-23-2022 8:23');

// Getting Specific Dates&Times
let today = new Date();

// Dates
dt = today.getDate();
dt = today.getMonth();
dt = today.getFullYear();
dt = today.getDay();

// Times
dt = today.getHours();
dt = today.getMinutes();
dt = today.getSeconds();
dt = today.getMilliseconds();

// Setting Dates&Times
today.setDate(28)
today.setFullYear(1999);
today.setHours(8);

console.log(today);
