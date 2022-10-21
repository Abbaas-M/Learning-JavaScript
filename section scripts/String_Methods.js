let firstName = 'John';
let lastName = 'Doe';
let greeting = 'Hi there! How are you, John?';
let looks = 'Brown,5\'ft 4,Black Hair,Male';
let val;

// Concat();
val = firstName.concat(' ', lastName);

// IndexOf()
val = greeting.indexOf('!');

// Substing();
val = greeting.substring(0, 9);

// Slice();
val = greeting.slice(0, 9);

// Includes();
val = greeting.includes('John');

// Replace
val = greeting.replace('John', 'Sammy Davis');

// Split();
val = looks.split(',');

// CharAt();
val = greeting.length;
val = greeting.charAt(16);

// Appending
firstName += ' ' + lastName;

// Case
val = firstName.toUpperCase();
val = firstName.toLowerCase();
val = firstName.slice(5, 8).toUpperCase();

// Last Character
val = greeting.charAt(greeting.length - 1);


console.log(val);
