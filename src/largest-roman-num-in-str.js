const {
    stringToRomanNumeralsArray,
    getLargestRomanNumeral,
} = require("./util");

const largestRomanNumInStr = (input) => {
    try {
        const romanNumeralsArray = stringToRomanNumeralsArray(input);
        return getLargestRomanNumeral(romanNumeralsArray);
    } catch (error) {
        return error.message;
    }
};

module.exports = largestRomanNumInStr;