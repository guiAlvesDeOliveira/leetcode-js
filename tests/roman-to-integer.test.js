import {romanToInt} from "../problems/roman-to-integer.js";

describe('Leetcode problem 13 - Roman to integer', () => {
    it('Must return an integer number 3', () => {
        const expected = 3;
        const returned = romanToInt('III');

        expect(returned).toBe(expected);
    })
    it('Must return an integer number 58', () => {
        const expected = 58;
        const returned = romanToInt('LVIII');

        expect(returned).toBe(expected);
    })
    it('Must return an integer number 1994', () => {
        const expected = 1994;
        const returned = romanToInt('MCMXCIV');

        expect(returned).toBe(expected);
    });
})