import {mergeTwoLists} from "../problems/merge-two-sorted-lists.js";

describe('Leetcode problem 21 - merge two lists', () => {
    it('Must return an array [1,1,2,3,4,4]', () => {
        const expected = [1,1,2,3,4,4];
        const returned = mergeTwoLists([1,2,4], [1,3,4])

        expect(expected).toEqual(returned);
    })
    it('Must return an array []', () => {
        const expected = [];
        const returned = mergeTwoLists([], [])

        expect(expected).toEqual(returned);
    })
    it('Must return an array []', () => {
        const expected = [0];
        const returned = mergeTwoLists([], [0])

        expect(expected).toEqual(returned);
    })
    it('Must return an array [1,2]', () => {
        const expected = [1,2];
        const returned = mergeTwoLists([1,2], [])

        expect(expected).toEqual(returned);
    })
})