// Problem 3
// Largest Prime Factor
/* The prime factors of 13195 are 5, 7, 13 and 29.
 *
 * What is the largest prime factor of the number 600851475143?
 */

var primes = [2, 3, 5, 7, 11];

function getFactor(n) {
  for (var i = 2; i < n; i++) {
    if (n % i == 0) {
      return i;
    }
  }
}

n = 600851475143;
var firstFactor = getFactor(n);
console.log(firstFactor);
var secondFactor = n / firstFactor;
console.log(secondFactor);

// getMaxOfArray
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

var max = getMaxOfArray(prime_factors(firstFactor));

max = Math.max(max, getMaxOfArray(prime_factors(secondFactor)));

function prime_factors (n) {
  if (n < 2) {
    return NaN;
  }

  var results = [];

  var largestPrime = 2;

  for (var i = 2; i <= n / 2; i++) {
    if (n % i == 0 && isPrime(i)) {
      results.push(i);
      // if (i > largestPrime) {
      //   largestPrime = i;
      // }
    }
  }

  return results;
  // return largestPrime;
}



function isPrime(n) {
  if (primes.indexOf(n) != -1) {
    return true;
  }
  else {
    for (var i = 2; i <= n / 2; i++) {
      if (n % i == 0) {
        return false;
      }
    }
    primes.push(n);
    return true;
  }
}

// for (var i = 0; i < 600851475143 / 2; i++) {
//   isPrime(i);
// }

console.log("=== BEGIN ===");
console.log(max);
console.log("===  END  ===");

// NOTE: Check if isPrime works correctly
// results = [];
//
// for (var i = 0; i < 20; i++) {
//  results.push(String(i) + " " + isPrime(i));
// }
//
// console.log(results);
