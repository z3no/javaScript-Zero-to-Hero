/*
    Coding Challenge #9

    Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures.
    Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

    Your tasks:
        1. Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above
           to the console. Try it with both test datasets.
        2. Use the problem-solving framework: Understand the problem and break it up into sub-problems!

    Test data:
        - Data 1: [17, 21, 23]
        - Data 2: [12, 5, -5, 0, 4]

    GOOD LUCK 😀
 */

'use strict';

// 1) Understanding the problem
// - Array needs to be a string with ... to separate values
// - Calculate the days

// 2) Breaking up into sub-problems
// - Array needs to be transformed into a string
// - Each value needs to be a string with °C
// - Needs to contain the day -> index + 1
// - Start has ... also as a separator and at the end
// - Log the string to the console

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {

    let string = '';
    for (let i = 0; i < arr.length; i++) {
        string += `${arr[i]}°C in ${i + 1} days ... `;
    }
    console.log('...' + string);
}

printForecast(data1);
printForecast(data2);