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
        if(branch === 'BCE')
        this.branch = branch+"(Computer Science Engineering Core)"
        else if(branch === 'BBS')
        this.branch = branch+"(Computer Science Engineering with Specialization in Business Systems)"
        else if(branch === 'BCB')
        this.branch = branch+"(Computer Science Engineering specialization in Bioinformatics)"
        else if(branch === 'BCD')
        this.branch = branch+"(Computer Science Specialisation in Data Analytics)"
        else if(branch === 'BCI')
        this.branch = branch+"(Computer Science with specialization in information security)"
        else if(branch === 'BCN')
        this.branch = branch+"(Computer Science specialization in Networking and security)"
        else if(branch === 'BCT')
        this.branch = branch+"(Computer Science Engineering with Specialization in Internet of Things)"
        else if(branch === 'BEC')
        this.branch = branch+"(Electronics and Communication Engineering)"
        else if(branch === 'BEE')
        this.branch = branch+"(Electrical and Electronics engineering)"
        else if(branch === 'BIT')
        this.branch = branch+"(Information Technology)"
        else if(branch === 'BAI')
        this.branch = branch+"(Computer Science Engineering with Specialization in Artificial Intelligence and Machine Learning)"
        else
        this.branch = branch

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
