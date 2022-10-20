let firstName = 'Sammy';
let lastName = 'Smith';
let sentance = 'Hello there john, my name is sammy and I love soccer, boxing and gamimg'

let val;

// Concatenation
val = firstName + ' ' + lastName;

// Appending
val += ' Junior';

// Escaping
val = 'That\'s truely awesome I am so happy for you ' + firstName + '. Who\'s gonna be at the event\'s'

// Length
val = firstName.concat(' ' + lastName);

// Concart
val = firstName.concat(' ' + lastName);

// Change Case
val = firstName.toUpperCase();
val = lastName.toLowerCase();

// IndexOf()
val = firstName.indexOf('n');
val = lastName.indexOf('i');

// CharAt
val = firstName.charAt(2);

// Getting last character in string
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0, 3)

// slice()
val = sentance.slice(0, 16);

// replace()
sentance = sentance.replace('sammy', 'John')

// splice()
val = sentance.split(' ');



console.log(val);
