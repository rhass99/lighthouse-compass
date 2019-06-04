let luhn= require('../luhn');
let assert = require('chai').assert;

describe("Testing the w1d5 stretch examples", () => {
    describe("Testing happy path for luhn.check", () => {
        it("Should return 'Number is valid'", () => {
            assert.equal("Number is valid", luhn.check(79927398713))
        })
        it("Should return 'Number is not valid'", () => {
            assert.equal("Number is not valid", luhn.check(79927398714))
        })
    })
    describe("Testing the happy path for luhn.maxProfit", () => {
        it("Should return 16", () => {
            assert.equal(16, luhn.maxProfit([45, 24, 35, 31, 40, 38, 11]))
        })
    })
})