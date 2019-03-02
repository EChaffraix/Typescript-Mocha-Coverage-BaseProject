import * as Work from 'src/Work';
import { expect } from 'chai';
import 'mocha';

describe("Work", function() {
    it("should transform number 1 into '1'", function() {
        const work = new Work.Work();
        const result = work.convert(1);
        expect(result).to.be.equal("1");
    })
});