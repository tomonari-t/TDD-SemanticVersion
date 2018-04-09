const assert = require('power-assert');
const SemVersion = require('../src/SemVersion')

it('new SemVersion(1, 2, 3)のとき、Version{ major: 1, minor: 2, patch 3 } となる', () => {
    const actual = new SemVersion(1, 2, 3);
    assert.equal(actual.major, 1);
    assert.equal(actual.minor, 2);
    assert.equal(actual.patch, 3);
});

it('new SemVersion(4, 5, 6)のとき、Version{ major: 4, minor: 5, patch 6 } となる', () => {
    const actual = new SemVersion(4, 5, 6);
    assert.equal(actual.major, 4);
    assert.equal(actual.minor, 5);
    assert.equal(actual.patch, 6);
});