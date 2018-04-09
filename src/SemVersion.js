'use strict';

const compareTwoNumber = (a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
};

const isInteger = num => Number.isInteger(num);
const isOverZero = num => num >= 0;

const validate = Symbol('validate');

class SemVersion {
  constructor(major, minor, patch) {
    if (!this[validate](major, minor, patch)) {
      throw new TypeError('Invalid Arguments Error');
    }
    this._major = major;
    this._minor = minor;
    this._patch = patch;
  }

  toString() {
    return `${this.major}.${this.minor}.${this.patch}`;
  }

  equal(target) {
    const comparedMajor = compareTwoNumber(this.major, target.major);
    const comparedMinor = compareTwoNumber(this.minor, target.minor);
    const comparedPatch = compareTwoNumber(this.patch, target.patch);
    return comparedMajor === 0 && comparedMinor === 0 && comparedPatch === 0;
  }

  compare(target) {
    for (const key of ['major', 'target', 'patch']) {
      const compared = compareTwoNumber(this[key], target[key]);
      if (compared !== 0) return compared;
    }
    return 0;
  }

  print() {
    console.log(this.toString());
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

  [validate](major, minor, patch) {
    const isAllInteger = isInteger(major) && isInteger(minor) && isInteger(patch);
    const isAllOverZero = isOverZero(major) && isOverZero(minor) && isOverZero(patch);
    console.log(isAllInteger);
    console.log(isAllOverZero);
    return isAllInteger && isAllOverZero;
  }
}

module.exports = SemVersion;
