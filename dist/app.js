"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VITRegNumber = /** @class */ (function () {
    function VITRegNumber(regNumber) {
        this.year = -1;
        this.branch = "";
        this.index = -1;
        this.regNumber = regNumber;
        this.process();
    }
    VITRegNumber.prototype.process = function () {
        try {
            if (this.regNumber.length != 9) {
                throw new Error("too short");
            }
            var year = this.regNumber.substr(0, 2);
            if (/^\d+$/.test(year)) {
                this.year = parseInt(year);
            }
            else {
                throw new Error("invalid year of study");
            }
            var index = this.regNumber.substr(5, 4);
            if (/^\d+$/.test(index)) {
                this.index = parseInt(index);
            }
            else {
                throw new Error("invalid characters in branch index");
            }
            var branch = this.regNumber.substr(2, 3);
            if (/^\d+$/.test(branch)) {
                throw new Error("invalid characters in branch code");
            }
            else {
                this.branch = branch;
            }
        }
        catch (e) {
            throw new Error("Invalid Registration Number :: " + e.message);
        }
    };
    VITRegNumber.prototype.getBranch = function () {
        return this.branch;
    };
    VITRegNumber.prototype.getYear = function () {
        return this.year;
    };
    VITRegNumber.prototype.getIndex = function () {
        return this.index;
    };
    return VITRegNumber;
}());
exports.default = VITRegNumber;
