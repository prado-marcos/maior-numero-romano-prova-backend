"use strict";

const chai = require("chai");
const expect = chai.expect;
const largestRomanNumInStr = require("../src/largest-roman-num-in-str");

describe("test", function () {
    it("should return: {number: 60, value: 'LX'}", function () {
        expect(JSON.stringify(largestRomanNumInStr("AXXBLX"))).to.equal(
            JSON.stringify({
                number: 60,
                value: "LX",
            })
        );
    });
    it("should return: { number: 2000, value: 'MM'}", function () {
        expect(
            JSON.stringify(
                largestRomanNumInStr(
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                )
            )
        ).to.equal(
            JSON.stringify({
                number: 2000,
                value: "MM",
            })
        );
    });
    it("should return: 'Not a string'", function () {
        expect(largestRomanNumInStr()).to.equal("Not a string");
    });
    it("should return: 'Not a string'", function () {
        expect(largestRomanNumInStr(999)).to.equal("Not a string");
    });
    it("should return: 'Not a string'", function () {
        expect(largestRomanNumInStr(true)).to.equal("Not a string");
    });
    it("should return: 'Not a string'", function () {
        expect(largestRomanNumInStr(null)).to.equal("Not a string");
    });
});
