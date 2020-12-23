class VITRegNumber {
  private readonly regNumber: string;
  private year: number = -1;
  private branch: string = "";
  private index: number = -1;

  constructor(regNumber: string) {
    this.regNumber = regNumber;
    this.process();
  }

  process() {
    try {
      if (this.regNumber.length != 9) {
        throw new Error("too short");
      }

      const year = this.regNumber.substr(0, 2);
      if (/^\d+$/.test(year)) {
        this.year = parseInt(year);
      } else {
        throw new Error("invalid year of study");
      }

      const index = this.regNumber.substr(5, 4);
      if (/^\d+$/.test(index)) {
        this.index = parseInt(index);
      } else {
        throw new Error("invalid characters in branch index");
      }

      const branch = this.regNumber.substr(2, 3);
      if (/^\d+$/.test(branch)) {
        throw new Error("invalid characters in branch code");
      } else {
        this.branch = branch;
      }
    } catch (e) {
      throw new Error(`Invalid Registration Number :: ${e.message}`);
    }
  }

  getBranch(): string {
    return this.branch;
  }

  getYear(): number {
    return this.year;
  }

  getIndex(): number {
    return this.index;
  }
}

export default VITRegNumber;
