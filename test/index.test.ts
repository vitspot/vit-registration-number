import { describe, it } from "mocha";

import Entity from "../src/app";
import { expect } from "chai";

/**
 * This file contains all tests which operate / validate the index part of registraiton number
 */
describe(" => Index Check", () => {
  it("should successfully return index", (done) => {
    const Worker = new Entity("19BCE2669");
    expect(Worker.getIndex()).to.be.equal(2669);
    done();
  });
});
