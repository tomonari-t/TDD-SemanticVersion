'use strict';

const semVersionValidator = require('./semVersionValidator');

class SemVersion {
    constructor(major, minor, patch) {
        this.major = major;
        this.minor = minor;
        this.patch = patch;
        if (!semVersionValidator(this)) {
            throw new Error('Invalid Arguments Error');
        }
    }
    toString() {
        return `${this.major}.${this.minor}.${this.patch}`;
    }
}

module.exports = SemVersion;