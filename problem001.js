// Problem 1
// Multiples of 3 and 5
/* If we list all the natural numbers below 10 that are multiples of 3 or 5, we
 * get 3, 5, 6 and 9. The sum of these multiples is 23.
 *
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */

var total = 0;
// Don't need an array, I just used it to collect the multiples
// Solution only requires the total variable
var multiples = [];

for (var i = 1; i < 1000; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    multiples.push(i);
    total += i;
  }
}

console.log(multiples);
console.log(total);
