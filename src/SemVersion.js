'use strict';

class SemVersion {
    constructor(major, minor, patch) {
        this.major = major;
        this.minor = minor;
        this.patch = patch;
    }
}

module.exports = SemVersion;