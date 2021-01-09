import { describe, it } from "mocha";

import Entity from "../src/app";
import { expect } from "chai";

describe(" => Package Check", () => {
  it("should successfully create object", (done) => {
    const Worker = new Entity("19BCE2669");
    expect(Worker).not.to.be.undefined;
    expect(Worker).to.be.instanceOf(Entity);
    done();
  });
});
