/**
 * Fib
 *
 * Write a function which print out the n-th entry in the fibonacci series.
 * The fibonacci series is an ordering of numbers where
 * each number is the sum of the preceeding two.
 * Example sequence: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
 *
 * Examples:
 * fib(4) === 3
 * fib(15) === 610
 */

function fib(i) {

        if (i === 0) {
            return i
        } else if (i === 1) {
            return i
        } else {
           return fib (i - 2) + fib (i - 1);
        }
    
}

module.exports = fib;
