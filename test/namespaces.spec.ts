import chai = require('chai');
var expect = chai.expect;
/// reference path="../src/HelloWorld.js"
var Hello = require("../src/HelloWorld")
describe("Hello namespace", function () {
    it("must be included", function () {
        var c = new Hello.World();
        var hello = c.Say();
        expect(hello).to.be.equal("Hello world!")
    })
})