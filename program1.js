/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const bracketMap = { ')': '(', '}': '{', ']': '[' };

    for (let char of s) {
        if (bracketMap[char] === undefined) {
            stack.push(char);
        } else {
            if (stack.length === 0 || stack.pop() !== bracketMap[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
};

module.exports = { isValid };


