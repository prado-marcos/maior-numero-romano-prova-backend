const romanNumerals = require("./roman-numerals");

exports.stringToRomanNumeralsArray = (str) => {
    if (typeof str !== "string") {
        throw new Error("Not a string");
    }
    return str
        .replace(/[^m|d|c|l|x|v|i]/gi, " ")
        .toUpperCase()
        .split(" ")
        .filter((element) => {
            return element !== "";
        })
        .filter(isRoman);
};

exports.getLargestRomanNumeral = (romanNumeralsArray) => {
    let largestNumber = {
        number: "",
        value: 0,
    };
    romanNumeralsArray.forEach((romanNum) => {
        let num = 0;
        for (const char of romanNum) {
            num += romanNumerals[char];
        }
        if (num > largestNumber.number) {
            largestNumber.number = num;
            largestNumber.value = romanNum;
        }
    });
    return largestNumber;
};

const isRoman = (str) => {
    const pattern =
        /^(M{1,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})|M{0,4}(CM|C?D|D?C{1,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})|M{0,4}(CM|CD|D?C{0,3})(XC|X?L|L?X{1,3})(IX|IV|V?I{0,3})|M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|I?V|V?I{1,3}))$/;
    return pattern.test(str);
};
