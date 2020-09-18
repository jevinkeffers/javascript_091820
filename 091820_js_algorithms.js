// 1) Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word to uppercase.

function upperCase (str) {
    
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

console.log(upperCase("the quick brown fox"));
console.log(upperCase("jumps over the lazy dog"));

// 2) Write a JavaScript function that returns a passed string(one word) with letters in alphabetical order. Assume NO punctuation, NO spaces, and NO symbols are used in the string!

// function alphsortstring(astring) {
//     var stringArray = [];
//     var sortstringArray = [];
//     var sortedString = "";
//     for (let i =0;i<astring.length;i++){
//         stringArray.push(astring[i])
//     }
//     sortstringArray = stringArray.sort();
//     for (let i =0;i<sortstringArray.length;i++){
//         sortedString = sortedString + sortstringArray[i]
//     }
//     return sortedString;
// };
// console.log(alphsortstring('cccbbbaaa'))

// 3) Write a JavaScript function that accepts a number as a parameter and checks if the number is prime or not (true or false).

// function isPrime(number) {
//     for  (let i = 2; i < number; i++)
//         if (number % i === 0) return false;
//     return number > 1
// }

// console.log(isPrime(829));
// console.log(isPrime(438));

// 4) Write a JavaScript function that accepts 2 arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.

// function countLetterstr, x) {
//     let occurence = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === x) {
//             occurence += 1;
//         }
//     }
//     return occurence;
// };

// console og(countLetter("digitalcrafts", "t"));
// console.log(countLetter("oopsiedaisy", "a"));

// 5) Write a program that prints the numbers from 1 to n. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.

// function fizzBuzz(n) {
//     for  (let i = 1; i < n + 1; i++) {
//         if (i % 5 === 0 && i % 3 === 0) {
//             console.log("FizzBuzz");
//         } else if (i % 5 === 0) {
//             console.log("Buzz");
//         } else if (i % 3 === 0) {
//             console.log("Fizz");
//         } else {
//             console.log(i);
//         }
//     }
// }

// fizzBuzz(25);