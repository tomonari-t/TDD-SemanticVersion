'use strict'

const assert = require('power-assert');
const validation = require('../src/validation');
const SemVersion = require('../src/SemVersion');

it('Version{ major: 0, minor: 0, patch 0 } を受け取ったときtrueを返す。', () => {
    const actual = validation(new SemVersion(0, 0, 0));
    assert.equal(actual, true);
});

