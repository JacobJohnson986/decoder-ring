// Write your tests here!
/*
It returns false if the given alphabet isn't exactly 26 characters long.
It correctly translates the given phrase, based on the alphabet given to the function.
It returns false if there are any duplicate characters in the given alphabet.
It maintains spaces in the message, before and after encoding or decoding.
It ignores capital letters. (For example, the results of A Message and a message should be the same.)
*/

const { expect } = require("chai");
const substitutionModule = require("../src/substitution");

describe("substitution", () => {
  it("should encode a message", () => {
        const actual = substitutionModule.substitution("jacob", "vyjkhprseaqfguxlcidbotznwm");
    const expected = "avjxy";
        expect(actual).to.eql(expected);
  });
  it("should encode a message that has spaces in it", () => {
        const actual = substitutionModule.substitution("Hello world", "vyjkhprseaqfguxlcidbotznwm");
    const expected = "shffx zxifk";
        expect(actual).to.eql(expected);
  });
  it("should ignores capital letters", () => {
        const actual = substitutionModule.substitution("Hello world", "vyjkhprseaqfguxlcidbotznwm");
    const expected = "shffx zxifk";
        expect(actual).to.eql(expected);
  });
  it("should decode a message", () => {
        const actual = substitutionModule.substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
    const expected = "message";
        expect(actual).to.eql(expected);
  });
  it("should decode a message that has spaces in it", () => {
        const actual = substitutionModule.substitution("shffx zxifk", "vyjkhprseaqfguxlcidbotznwm", false);
    const expected = "hello world";
        expect(actual).to.eql(expected);
  });
      it("should return false if the alphabet parameter isn't exactly 26 characters", () => {
        const actual = substitutionModule.substitution("jacob", "shortABC");
    expect(actual).to.be.false;
      });
  it("should return false if the alphabet parameter has duplicate characters", () => {
        const actual = substitutionModule.substitution("jacob", "duplicateABC");
    expect(actual).to.be.false;
  });
});