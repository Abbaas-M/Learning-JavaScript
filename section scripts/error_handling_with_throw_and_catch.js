// THE CODE WE WANT TO TRY AND RUN
try {
    // myFunc().name

    const user1 = {
        name: null,
        age: 17,
        gender: 'Rather not say'
    }

    // user1.name = 'Sammy'

    // if (user1.name === null) {
    //     // CUSTOM ERROR MESSAGE
    //     throw 'User did not enter a name.'

    //     // CUSTOM FORMATTED ERROR MESSAGE
    //     throw new ReferenceError('User has no name!');
    // }

    if (user1.age <= 17) {
        throw new SyntaxError('User is to young to be using this site, How did this happen!');
    }

}
// HANDLES THE ERRORS IN TRY
catch (err) {
    // GETTING ONLY THE ERRORS NAME/TYPE
    // console.log(err.name)

    // GETTING ONLY THE ERROR MESSAGE
    // console.log(err.message)

    // TESTING THE TYPE OF OUR ERROR
    // console.log(err instanceof ReferenceError)

    // CUSTOM ERROR TESTING
    // console.warn(err)


}
// THE FINALLY BLOCK WILL STILL RUN REGAURDLESS OF THE ABOVE TWO BLOCKS
finally {
    // let sum = 2 + 2;
//     console.log(sum)
}

