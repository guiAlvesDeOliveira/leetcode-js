/**
 * @param {number[]} digits
 * @return {number[]}
 */
/*
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer.
The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
Increment the large integer by one and return the resulting array of digits.
 */
export function plusOne(digits) {
    var size = digits.length - 1
    var answer = [];

    if (size == 0){
        if (digits[0] == 9){
            answer = [1,0]
            return answer
        }
    }

    for (let i = size; i >= 0 ; i--) {
        digits[i]++;
        if (digits[i] == 10){
            digits[i] = 0;
            if (i == 0){
                answer = [1].concat(digits)
                return answer
            }
        }else{
            i = -1;
        }
    }

    return digits;
};
