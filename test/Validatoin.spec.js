'use strict'

const assert = require('power-assert');
const semVersionValidator = require('../src/semVersionValidator');
const SemVersion = require('../src/SemVersion');

describe('semVersionValidator関数', () => {
    it('Version{ major: 0, minor: 0, patch 0 } を受け取ったときtrueを返す。', () => {
        const actual = semVersionValidator(new SemVersion(0, 0, 0));
        assert.equal(actual, true);
    });

    it('Version{ major: null, minor: undefined, patch [] }　を受け取ったときfalseを返す', () => {
        const actual = semVersionValidator(new SemVersion(null, undefined, []));
        assert.equal(actual, false);
    });
});

