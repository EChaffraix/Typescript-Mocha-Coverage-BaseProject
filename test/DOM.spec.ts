import chai = require('chai');
var expect = chai.expect;

declare namespace NodeJS {
    interface Global {
        window: any;
        $: any;
    }
}
declare var global: NodeJS.Global;
declare var $: any;

global.window = document.defaultView;
global.$ = require('jquery');

describe("Mocha", function() {
    before(function () {
    })

    afterEach(function () {
        document.body.innerHTML = "";
    })

    it("Has jsdom", function () {
        const div = document.createElement("div");
        expect(div).not.to.be.undefined;

        div.classList.add("something");
        div.classList.add("something-jsdom");
        document.body.appendChild(div);

        const items = document.getElementsByClassName("something");
        expect(items).to.have.lengthOf(1);
    });

    it("And jquery", function () {
        const div = document.createElement("div");
        div.classList.add("something");
        div.classList.add("something-jquery");
        document.body.appendChild(div);
        const jqueryresult = $(".something");
        expect(jqueryresult).to.have.lengthOf(1);
    });
});