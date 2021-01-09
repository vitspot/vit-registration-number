import { describe, it } from "mocha";

import Entity from "../src/app";
import { expect } from "chai";

/**
 * This file contains all tests which operate / validate the branch part of registraiton number
 */
describe(" => Branch Check", () => {
  it("should successfully return branch", (done) => {
    const Worker = new Entity("19BCE2669");
    expect(Worker.getBranch()).to.be.equal("BCE");
    done();
  });
});
