// Problem 4
// Largest Palindrome Product
/* A palindromic number reads the same both ways. The largest palindrome made
 * from the product of two 2-digit numbers is 9009 = 91 × 99.
 *
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */

function isPalindrome(toCheck) {
  if (toCheck.length <= 1) {
      return true;
  }

  var len = toCheck.length - 1;
  for (var i = 0; i <= len / 2; i++) {
    if (toCheck.charAt(i) != toCheck.charAt(len-i)) {
      return false;
    }
  }
  return true;
}

function findLargestPalindrome(start, end) {
  var largestPalindrome = 0;
  for (var i = end; i >= start; i--) {
    for (var j = end; j >= start; j--) {
      var product = i * j;
      var str = product.toString();
      if (isPalindrome(str) && product > largestPalindrome) {
        largestPalindrome = product;
        console.log(largestPalindrome);
      }
    }
  }

  return largestPalindrome;
}
