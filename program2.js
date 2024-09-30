/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // Create a dictionary to map Roman numerals to their integer values
    const romanDict = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    // Initialize a variable to store the final integer value
    let total = 0;

    // Iterate through the input string from left to right
    for (let i = 0; i < s.length - 1; i++) {
        // Check if the current numeral's value is less than the next one
        if (romanDict[s[i]] < romanDict[s[i + 1]]) {
            // If so, subtract its value from the total
            total -= romanDict[s[i]];
        } else {
            // Otherwise, add its value to the total
            total += romanDict[s[i]];
        }
    }

    // Add the value of the last numeral to the total
    total += romanDict[s[s.length - 1]];

    // Return the final integer value
    return total;
};

module.exports = { romanToInt };