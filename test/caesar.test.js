// Write your tests here!
/*
It returns false if the shift value is equal to 0, less than -25, greater than 25, or not present.
It ignores capital letters. (For example, the results of A Message and a message should be the same.)
When encoding, it handles shifts that go past the end of the alphabet. (For example, shifting z to the right by 3 should cause the z to wrap around to the front of the alphabet, so that z becomes c.)
It maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding.
*/

const { expect } = require("chai");
const caesarModule = require("../src/caesar");

describe("caesar", () => {
  it("should return the decoded message depending on the given shift value", () => {
        const actual = caesarModule.caesar("bpqvsnct ntmf mvoqvmmz jwwbkiux!", 8, false);
    const expected = "thinkful flex engineer bootcamp!"; 
        expect(actual).to.eql(expected);
  });
  it("should return the encoded message depending on the given shift value", () => {
        const actual = caesarModule.caesar("Thinkful flex engineer bootcamp!", 8);
    const expected = "bpqvsnct ntmf mvoqvmmz jwwbkiux!";
    expect(actual).to.eql(expected);
  });
   it("should leave spaces as is", () => {
        const actual = caesarModule.caesar("abc !", 8);
        const expected = " "
        expect(actual.charAt(3)).to.equal(expected);
    });
    it("should leave special characters as is", () => {
        const actual = caesarModule.caesar("abc !", 8);
        const expected = "!"
        expect(actual.charAt(4)).to.equal(expected);
    });
    it("should wrap characters around when going over 'z'", () => {
        const actual = caesarModule.caesar("Zelda", 3);
      const expected = "chogd";
        expect(actual).to.equal(expected);
    });
  it("should ignore capitalization of letters", () => {
    const actual = caesarModule.caesar("Jacob", 2);
    const expected = "lceqd";
    expect(actual).to.eql(expected);
  });
  it("should return false if the shift parameter is not present", () => {
    const actual = caesarModule.caesar("thinkful");
    expect(actual).to.be.false;
it("should return false if the shift is greater than 25", () => {
        const actual = caesarModule.caesar("bpqvsnct ntmf mvoqvmmz jwwbkiux!", 56);
        expect(actual).to.be.false; 
    });
    it("should return false if the shift is less than -25", () => {
        const actual = caesarModule.caesar("bpqvsnct ntmf mvoqvmmz jwwbkiux!", -75);
        expect(actual).to.be.false; 
    });
    it("should return false if the shift is 0", () => {
        const actual = caesarModule.caesar("bpqvsnct ntmf mvoqvmmz jwwbkiux!", 0);
        expect(actual).to.be.false; 
    });
  });
});