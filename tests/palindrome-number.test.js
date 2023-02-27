import {isPalindrome} from "../problems/palindrome-number.js";

describe('Leetcode problem 9 - is palindrome', () => {
    it ('Must return true', () => {
        const expected = true;
        const returned = isPalindrome(121);

        expect(returned).toBe(expected);
    })
})