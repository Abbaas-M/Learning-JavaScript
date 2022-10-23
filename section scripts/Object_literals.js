let person = {
    name: 'John',
    age: 27,
    height: 5.9 + 'ft',
    hobbies: ['Soccer', 'Coding', 'Reading'],
    description: {
        hairColor: 'Brown',
        skinColor: 'White Pale',
        eyeColor: 'blue'
    },
    calcAge: function () {
        return 2022 - this.age;
    },

}

let val;

// Getting object values


val = person['height'];
val = person.calcAge();
val = person.description.eyeColor;
val = person.hobbies.push('Boxing');

const people = [
    { name: 'Sammy', age: 30 },
    { name: 'John', age: 24 },
    { name: 'Tibilt', age: 37 },
    { name: 'Leon', age: 42 },
    { name: 'Jacob', age: 59 },
]

val = people[2].name = 'Lerenzo';

console.log(val);
