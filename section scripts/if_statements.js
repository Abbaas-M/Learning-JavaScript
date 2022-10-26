// IF STATESMENTS

// If Statement Syntax
/* if (something) {
    Do something
} else {
    Do something else
}*/

const age = 35;

// Equal To
// if (age == 50) {
//     console.log('Halfway there!')
// } else {
//     console.log('Not quite there yet!');
// }

// Not Equal To
// if (age != 18) {
//     console.log('You are to young to drink!');
// } else {
//     console.log('Drink away but drive home safely!');
// }

// Testing type and value
// if (age === 17) {
//     console.log('Teenager');
// } else {
//     console.log('Adult')
// }

// Testing if a value is defined
// if (typeof age === 'undefined') {
//     console.log('Your age was not defined');
// } else {
//     console.log(`Your age is ${age}`);
// }

// GREATER THAN OR EQUAL TO
// if (age >= 18) {
//     console.log('Your eligible to drink');
// } else if (age <= 17) {
//     console.log('You are a minor, You cannot drink!');
// }

// const sentance = 'Hi Friend, How are you? I am hoping you are well. It\'s been awhile since we\'ve chatted!'

// if (sentance.length > 57) {
//     console.log('Message to long. Please shorten!');
// } else {
//     console.log('Message sent!')
// }

// Logical Operators

// AND &&
// let gender = 'male';
// let age = 24;

// if (gender === 'male' && age >= 24) {
//     console.log('You may enter');
// }

// OR ||
// const hairColor = 'Black';

// if (hairColor === 'Brown' || hairColor === 'Black') {
//     console.log('Looking Fresh')
// } else {
//     console.log('Not looking to fresh');
// }

// TIRNARY OPERATORS
// console.log(typeof age === 'undefined' ? 'Age is not defined' : 'Age is defined');
// console.log(2 + 2 === 4 ? 'This sum is correct' : 'This sum is incorrect');
// console.log(age >= 24 ? 'Young Adult' : 'Teenager');
// Else If Statements
// const reportPercent = 25;

// Write an if statement to see peoples agregate in school based on thier percent
// if (reportPercent <= 29) {
//     console.log(`${reportPercent}% Not Achieved, Grading: 1`)
// } else if (reportPercent >= 30 && reportPercent <= 39) {
//     console.log(`${reportPercent}% Elementary, Grading: 2`);
// } else if (reportPercent >= 40 && reportPercent <= 49) {
//     console.log(`${reportPercent}% Moderate, Grading: 3`);
// } else if (reportPercent >= 50 && reportPercent <= 59) {
//     console.log(`${reportPercent}% Adequate, Grading: 4`);
// } else if (reportPercent >= 60 && reportPercent <= 69) {
//     console.log(`${reportPercent}% Substatial, Grading: 5`);
// } else if (reportPercent >= 70 && reportPercent <= 79) {
//     console.log(`${reportPercent}% Meritorious, Grading: 6`);
// } else if (reportPercent >= 80 && reportPercent <= 100) {
//     console.log(`${reportPercent}% Outstanding, Grading: 7`);
// } else {
//     console.log(NaN);
// }

// Write an if statement testing an objects values
// let person1 = {
//     name: 'Sam',
//     age: 19,
//     gender: 'male',
// }

// let person2 = {
//     name: 'Sarah',
//     age: 15,
//     gender: 'female',
// }

// if (person2.age >= 18 && person2.gender === 'male') {
//     console.log(`${person2.name} is eligable to enter`);
// } else if (person2.age <= 17 && person2.gender === 'female') {
//     console.log(`${person2.name} is not eligable to enter`)
// }

// Write a script that counts the words of essays.
// const sentance = `Dit was die dag wat ek nooit sal vergeet nie, die dag toe ek in die skoolhoof se kantoor was. Dit het alles gebeur op 'n Maandag toe ek die skuld vir al my klasmaats geneem het.

// Dit was vroegoggend en ek en my klasmaats was almal nog moeg en slaperig aangesien ons pas van 'n langnaweek af gekom het. Die eerste paar periodes van die dag was normaal totdat dit rustyd was toe ons nuus hoor dat die klas oorkant ons oorval word vir fone, vapes of onwettige middels. Ek was nie bekommerd dat ek deursoek word nie, want ek het niks gehad om vir die skool weg te steek nie. Ek was onskuldig. My klasmaats aan die ander kant was paniekerig omdat hulle hul fone en vapes by hulle gehad het en sommige van hulle het selfs sigarette by hulle gehad. Hulle het die hele pouse gesoek na plekke om hul besittings weg te steek, maar hulle kon nêrens kry om dit weg te steek nie.

// Uiteindelik het die klas tot 'n besluit gekom dat hulle hul goed in my tas wou wegsteek, aangesien ek deur die onderwysers as 'n goeie student gesien is en hulle my nie sou deursoek nie. Soos die geluk dit wou hê, is ek deursoek en gevang met almal se vapes en fone.

// Die beginsel was genadig en het aangebied om vir my 2 nadele in plaas van 60 te gee as ek haar vertel aan wie die items behoort, het ek natuurlik vir haar gesê en uiteindelik geen nadele gekry nie.`;
// let sentancesplit = sentance.split(' ');
// console.log(sentancesplit.length);;
