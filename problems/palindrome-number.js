/**
 * @param {number} x
 * @return {boolean}
 */

/*
Given an integer x, return true if x is a palindrome, and false otherwise.
 */

function isPalindrome(x) {

    var palindrome = "";
    var y = x.toString();

    for (let i = y.length - 1; i >= 0 ; i--) {
        palindrome = palindrome + y.charAt(i);
    }

    return x.toString() == palindrome;
};

export {isPalindrome};