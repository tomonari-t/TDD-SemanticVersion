'use strict'

const assert = require('power-assert');
const semVersionValidator = require('../src/semVersionValidator');
const SemVersion = require('../src/SemVersion');

descrivbe('semVersionValidator関数', () => {
    it('Version{ major: 0, minor: 0, patch 0 } を受け取ったときtrueを返す。', () => {
        const actual = semVersionValidator(new SemVersion(0, 0, 0));
        assert.equal(actual, true);
    });
});

