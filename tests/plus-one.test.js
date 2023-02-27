import {plusOne} from "../problems/plus-one.js";

describe('Leetcode problem 66 - plus one', () => {
    it('Must return an array [1,2,4]', () => {
        const expected = [1,2,4];
        const returned = plusOne([1,2,3]);

        expect(returned).toEqual(expected)
    })

    it('Must return an array [1,0]', () => {
        const expected = [1,0];
        const returned = plusOne([9]);

        expect(returned).toEqual(expected)
    });
    it('Must return an array [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]', () => {
        const expected = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
        const returned = plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,2]);

        expect(returned).toEqual(expected)
    });
    it('Must return an array [7,0]', () => {
        const expected = [7,0];
        const returned = plusOne([6,9]);

        expect(returned).toEqual(expected)
    });
    it('Must return an array [1,0,0]', () => {
        const expected = [1,0,0];
        const returned = plusOne([9,9]);

        expect(returned).toEqual(expected)
    });
})