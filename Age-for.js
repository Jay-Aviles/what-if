const prompt = require('prompt-sync')();

const age= Number(prompt('Enter your age: '));

if (age < 16) {
    console.log("You can't drive. " );
}
else if (age>= 18 && age <=24){
    console.log("You can vote but not rent a car",);
}


