class VITRegNumber {
  private readonly regNumber: string;
  private year: number = -1;
  private branch: string = "";
  private branchName: string = "";
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
        this.branch = branch
        switch(this.branch){
          case 'BCE':
            this.branchName = "Computer Science Engineering Core";
            break;
          case 'BBS':
            this.branchName = "Computer Science Engineering with Specialization in Business Systems";
            break;
          case 'BCB':
            this.branchName = "Computer Science Engineering specialization in Bioinformatics";
            break;
          case 'BCD':
            this.branchName = "Computer Science Specialisation in Data Analytics";
            break;
          case 'BCI':
            this.branchName = "Computer Science with specialization in information security";
            break;
          case 'BCN':
            this.branchName = "Computer Science specialization in Networking and security";
            break;
          case 'BCT':
            this.branchName = "Computer Science Engineering with Specialization in Internet of Things";
            break;
          case 'BEC':
            this.branchName = "Electronics and Communication Engineering";
            break;
          case 'BEE':
            this.branchName = "Electrical and Electronics engineering";
            break;
          case 'BIT':
            this.branchName = "Information Technology";
            break;
          case 'BAI':
            this.branchName = "Computer Science Engineering with Specialization in Artificial Intelligence and Machine Learning";
            break;
          default:
            this.branchName = this.branch;

        }
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
  getBranchName(): string{
    return this.branchName;
  }
}

export default VITRegNumber;
