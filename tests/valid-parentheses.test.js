import {isValid} from "../problems/valid-parentheses.js";

describe('Leetcode problem 20 - valid parentheses', () => {
    it ('Must return true', () => {
        const expected = true;
        const returned = isValid('()');

        expect(returned).toBe(expected);
    })
    it ('Must return true', () => {
        const expected = true;
        const returned = isValid('()[]{}');

        expect(returned).toBe(expected);
    })
    it ('Must return true', () => {
        const expected = false;
        const returned = isValid('(]');

        expect(returned).toBe(expected);
    })
    it ('Must return true', () => {
        const expected = false;
        const returned = isValid('((');

        expect(returned).toBe(expected);
    })
})