// Write your tests here!
/*
When encoding, it translates the letters i and j to 42.
When decoding, it translates 42 to (i/j).
It ignores capital letters. (For example, the results of A Message and a message should be the same.)
It maintains spaces in the message, before and after encoding or decoding.
*/

const { expect } = require("chai");
const polybiusModule = require("../src/polybius");

describe("polybius", () => {
   it("should encode a message by translating each letter to each pair of numbers", () => {
     const actual = polybiusModule.polybius("polybius"); 
     const expected = "5343134521425434";
    expect(actual).to.eql(expected);
   });
  
  it("should leave the spaces as is when encoding", () => {
     const actual = polybiusModule.polybius("hello world"); 
     const expected = "3251131343 2543241341";
    expect(actual).to.eql(expected);
  });

it("should ignore capital letters", () => {
     const actual = polybiusModule.polybius("Hello world"); 
     const expected = "3251131343 2543241341";
    expect(actual).to.eql(expected);
  });
  it("should decode a message by translating each pair of numbers into a letter", () => {
    const actual = polybiusModule.polybius('23513434112251', false);
    const expected = "message";
        expect(actual).to.equal(expected);
  });
  it("should leave the spaces as is when decoding", () => {
     const actual = polybiusModule.polybius("3251131343 2543241341", false); 
     const expected = "hello world";
    expect(actual).to.eql(expected);
  });

  it("should translate 42 to i/j when decoding", () => {
     const actual = polybiusModule.polybius("4211314321", false); 
     const expected = "(i/j)acob";
    expect(actual).to.eql(expected);
  });

  it("should translate i and j to 42 when encoding", () => {
     const actual = polybiusModule.polybius("jacob"); 
     const expected = "4211314321";
    expect(actual).to.eql(expected);
  });
  
  it("should return false if the number of characters in the string sans spaces is not even", () => {
    const actual = polybiusModule.polybius("53431345214254344", false);
    expect(actual).to.be.false;
  });
});
