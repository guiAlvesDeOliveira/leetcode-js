/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
 */

function twoSum(nums, target) {

    var size = nums.length;
    var answer = [];

    for (let i = 0; i < size; i++) {
        if (i + 1 < size) {
            for (let j = i + 1; j < size; j++) {
                if (nums[i] + nums[j] == target) {
                    answer[0] = i;
                    answer[1] = j;
                }
            }
        }
    }

    return answer;
}

export {twoSum};

