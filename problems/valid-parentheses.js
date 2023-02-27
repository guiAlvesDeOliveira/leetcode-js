/**
 * @param {string} s
 * @return {boolean}
 */
/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 */

export function isValid(s) {

    var stack = [];
    var comparator = '';

    if (s.length % 2 != 0 ){
        return false;
    }

    for (let i = 0; i < s.length; i++) {
        var c = s[i];

        if (c == '(' || c == '[' || c == '{'){
            stack.push(c);
        }else {
            if (stack.length > 0){
                comparator = stack.pop()
                if (comparator == '('){
                    if (c != ')'){
                        return false
                    }
                }else if (comparator == '['){
                    if (c != ']'){
                        return false;
                    }
                }else if (comparator == '{'){
                    if (c != '}'){
                        return false;
                    }
                }
            }else {
                return false;
            }
        }
    }

    return !comparator == '' && stack.length == 0;
};