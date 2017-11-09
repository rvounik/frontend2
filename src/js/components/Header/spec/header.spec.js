import addNumbers from '../Header';
import { expect } from 'chai';

describe("addNumbers", () => {
    context("when numbers are valid", () => {
        it("it add the numbers", () => {
            expect(addNumbers(1, 2).to.equal(3));
        });
    });
});
