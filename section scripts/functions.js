// FUNCTIONS & EXPRESSIONS

// Function Declaration

// NORMAL FUNCTION
// function calcAge(yearBorn) {
//     console.log(2022 - yearBorn);
// }
// calcAge(2007);


// RETURN
// function getAge(yearBorn) {
//     return 2022 - yearBorn;
// }
// console.log(getAge(2007))

// FUNCTION PARAMETERS
// function nameAge(name, birthYear) {
//     return `Hello ${name}, Your ${2022 - birthYear} years old today!`;
// }

// console.log(nameAge('Jamie', 1981));

// SETTING DEFAULT PARAMETERS
// function userID(userName = 'User') {
//     return `${userName} ID: #${parseInt(Math.random() * 1000 + 1)}`;
// };

// console.log(userID('Jamie'));

// IFFI - Immediately Invoked Function Expression
// (function calc(num1, num2) {
//     console.log(num1 + num2);
// })(34, 96);

// FUNCTION EXPRESSION/ANONOYMOUS FUNCTIONS
// let userName = function () {
//     console.log('John Doe');
// };
// userName();


// PRACTICE

// MAKING A FUNCTION THAT COUNTS THE NUMBER OF WORDS IN A STRING
// function wordCount(sentance = 'No sentance provided') {
//     let splitSentance;
//     splitSentance = sentance.split(' ');
//     return `words: ${splitSentance.length}`;
// };

// let essay = `interdum consectetur libero id faucibus nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu lobortis elementum nibh tellus molestie nunc non blandit massa enim nec dui nunc mattis enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut pharetra sit amet aliquam id diam maecenas ultricies mi eget mauris pharetra et ultrices neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi proin sed libero enim sed faucibus turpis in eu mi bibendum neque egestas congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat`
// console.log(wordCount(essay));

// MAKING AN OBJECT WITH METHODS THAT DO BASIC MATH CALCULATIONS
const calculation = {
    add: function (num1, num2) {
        return num1 + num2;
    },

    subtract: function (num1, num2) {
        return num1 - num2;
    },

    divide: function (num1, num2) {
        return num1 / num2;
    },

    multiply: function (num1, num2) {
        return num1 * num2;
    },
}

calculation.englishMark = function (yearMarkSthusFar) {
    console.log(yearMarkSthusFar / 180 * 60 + '%');
};

// console.log(calculation.add(30, 20));
// console.log(calculation.subtract(50, 30));
// console.log(calculation.divide(150, 3));
// console.log(calculation.multiply(20, 5));
// calculation.englishMark(150);

// RUNNING AN IF STATEMENT IN AN IFFE
// (function (age = 30) {

//     if (age >= 30) {
//         console.log(`Age is ${age}, You may enter the race`)
//     } else if (age <= 29) {
//         console.log(`Age is ${age}, You may not enter the race`)
//     }

// })(43);
