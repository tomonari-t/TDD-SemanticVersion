'use strict'

const assert = require('power-assert');
const SemVersion = require('../src/SemVersion');

describe('SemVersionクラス', () => {
    it('new SemVersion(1, 2, 3)のとき、Version{ major: 1, minor: 2, patch 3 } となる', () => {
        const version = new SemVersion(1, 2, 3);
        assert.equal(version.major, 1);
        assert.equal(version.minor, 2);
        assert.equal(version.patch, 3);
    });

    it('new SemVersion(4, 5, 6)のとき、Version{ major: 4, minor: 5, patch 6 } となる', () => {
        const version = new SemVersion(4, 5, 6);
        assert.equal(version.major, 4);
        assert.equal(version.minor, 5);
        assert.equal(version.patch, 6);
    });

    it('Version{ major: 1, minor: 2, patch 3 } のとき、"1.2.3" を得る', () => {
        assert.equal(actual, "1.2.3");
    });
});