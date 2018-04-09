'use strict';

const compareTwoNumber = (a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
}

class SemVersion {
    constructor(major, minor, patch) {
        if (!this._validate(major, minor, patch)) {
            throw new TypeError('Invalid Arguments Error');
        }
        this._major = major;
        this._minor = minor;
        this._patch = patch;
    }

    toString() {
        return `${this.major}.${this.minor}.${this.patch}`;
    }

    compare(target) {
        const comparedMajor = compareTwoNumber(this.major, target.major)
        if (comparedMajor !== 0) {
            return comparedMajor;
        }
        const comparedMinor = compareTwoNumber(this.minor, target.minor)
        if (comparedMinor !== 0) {
            return comparedMinor;
        }
        const comparedPatch = compareTwoNumber(this.patch, target.patch)
        if (comparedPatch !== 0) {
            return comparedPatch;
        }
        return 0;
    }

    get major() {
        return this._major;
    }

    get minor() {
        return this._minor;
    }

    get patch() {
        return this._patch;
    }

    _validate(major, minor, patch) {
        return major >= 0 && minor >= 0 && patch >= 0;
    }
}

module.exports = SemVersion;