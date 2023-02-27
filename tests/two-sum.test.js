import { twoSum } from "../problems/two-sum.js";

describe('Leetcode problem 1 - Two Sum', () => {
    it('Must return two indexes [0,1]', () => {
        const expected = [0,1];
        const returned = twoSum([2,7,11,15], 9)

        expect(returned).toEqual(expected);
    });

    it('Must return two indexes [1,2]', () =>{
        const expected = [1,2];
        const returned = twoSum([3,2,4], 6);

        expect(returned).toEqual(expected);
    });

    it('Must return two indexes [0,1]', () => {
        const expected = [0,1];
        const returned = twoSum([3,3], 6);

        expect(returned).toEqual(expected);
    })
})