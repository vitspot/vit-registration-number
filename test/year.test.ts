import { describe, it } from "mocha";

import Entity from "../src/app";
import { expect } from "chai";

/**
 * This file contains all tests which operate / validate the year part of registraiton number
 */
describe(" => Year Check", () => {
  it("should successfully return year", (done) => {
    const Worker = new Entity("19BCE2669");
    expect(Worker.getYear()).to.be.equal(19);
    done();
  });
});
