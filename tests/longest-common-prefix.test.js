import {longestCommonPrefix} from "../problems/longest-common-prefix.js";

describe('Leetcode problem 14 - Longest Common Prefix', () => {
    it ('Must return a string "fl" ', () => {
        const expected = 'fl';
        const returned = longestCommonPrefix(["flower","flow","flight"]);

        expect(returned).toBe(expected);
    })
    it ('Must return a string "" ', () => {
        const expected = '';
        const returned = longestCommonPrefix(["dog","racecar","car"]);

        expect(returned).toBe(expected);
    })
})