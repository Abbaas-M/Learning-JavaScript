// General Loops

// FOR LOOPS
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//     document.body.innerHTML += `<li>${i}</li>`;
// }

// BREAK & CONTINUE

// BREAK
// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         console.log('The Iteration Ends Here!');
//         break;
//     }

//     console.log(i);
// }

// CONTINUE
// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         console.log('Mile 5 - Half Way There!');
//         continue;
//     }

//     console.log(`Mile : ${i}`);
// }

// WHILE LOOP
// let i = 0;
// while (i < 10) {
//     console.log(`ID: ${i}`);
//     i++;
// }

// DO WHILE LOOP
// let id = 0;

// do {
//     console.log(`ID: ${id}`);
//     id++
// }
// while (id < 10);

// LOOPING THROUGH ARRAY
// let colors = ['Red', 'Blue', 'Green', 'Orange'];

// for (let i = 0; i < colors.length; i++) {
//     document.body.innerHTML += `<li>${colors[i]}</li>`
// }

// FOREACH()
// let colors = ['Red', 'Green', 'Blue', 'Orange'];

// colors.forEach(function (color) {
//     document.body.innerHTML += `<h1>${color}</h1>`;
// })

// INPUTING THE THE ARRAY COLORS IN THAT COLOR ONTO THE DOM
// let colors = ['REd', 'GreEn', 'blUe', 'OrangE'];
// colors.push('PurPle');
// colors.push('GraY');
// colors.push('Navy');

// colors.forEach(function (color) {
//     document.body.innerHTML += `<h2 style= "color: ${color.toLowerCase()}; font-family: sans-serif;">${color.toUpperCase()}</h2>`
// })

// MAP
// const users = [
//     { id: 52, name: 'John' },
//     { id: 73, name: 'Sarah' },
//     { id: 47, name: 'Manny' },
// ];

// users.push({ id: 53, name: 'Rhodes' });

// let userNames = users.map(function (user) {
//     return user.name;
// });

// const userIds = users.map(function (userId) {
//     return userId.id;
// })

// userIds.sort(function (x, y) {
//     return y - x;
// })

// users.forEach(function (user) {
//     console.log(`${user.name}: ${user.id}`)
// })

// console.log(userIds);

// FOR IN LOOPS
// let person = {
//     name: 'Alex',
//     age: 27,
//     dateOfBirth: new Date('16 May 2007'),
// };

// for (let x in person) {
//     console.log(person[x])
// }

// PRACTICE

// let family = ['Mom', 'Dad', 'Sister', 'Brother', 'Grand-Parents', 'Aunty', 'Uncles', 'Cousins', 'in-laws'];

// for (let i = 0; i < family.length; i++) {

//     // if (i === 4) {
//     //     console.log('Extended Family');
//     //     continue;
//     // }

//     // if (i === 4) {
//     //     break;
//     // }

//     console.log(family[i]);
// }

// While Loop
// let i = 0;

// while (i < 10) {
//     console.log(i);
//     i++;
// }

// DO WHILE LOOP
// let i = 0;

// do {
//     console.log(`ID: ${i}`)
//     i++;
// }

// while (i <= 10);

// ARRAY LOOPING
// let users = [
//     { name: 'John', age: 30, id: `#` },
//     { name: 'Samantha', age: 21, id: `#` },
//     { name: 'Alex', age: 42, id: `#` },
//     { name: 'David', age: 58, id: `#` },
// ]

// users.forEach(function (user) {
//     let randomId = parseInt(Math.random() * 250);
//     user.id += randomId;
// })
// // console.table(users);

// let userIDs = users.map(function (userId) {
//     return userId.id;
// })
// console.log(userIDs);

// LOOPING THROUGH OBJECT
// let person = {
//     name: 'Alex',
//     age: 30,
//     dob: new Date('06-16-2007 12:37:32'),
// }

// for (let x in person) {
//     console.log(`${x.toUpperCase()}: ${person[x]}`)
// }
