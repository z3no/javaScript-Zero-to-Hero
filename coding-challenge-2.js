/*
    Coding Challenge #2

    Use the BMI example from Challenge #1, and the code you already wrote, and improve it.

    Your tasks:
    1. Print a nice output to the console, saying who has the higher BMI. The message is either
       "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
    2. Use a template literal to include the BMI values in the outputs.
       Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

    GOOD LUCK 😀
 */

// data 1
const weightMark = 78;
const heightMark = 1.69;
const weightJohn = 92;
const heightJohn = 1.95;
// data 2
// const weightMark = 95;
// const heightMark = 1.88;
// const weightJohn = 85;
// const heightJohn = 1.76;

const markBMI = weightMark / heightMark ** 2;
const johnBMI = weightJohn / heightJohn **2;

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}