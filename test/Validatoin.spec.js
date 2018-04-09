'use strict'

const assert = require('power-assert');
const semVersionValidator = require('../src/semVersionValidator');
const SemVersion = require('../src/SemVersion');

describe('semVersionValidator関数', () => {
    describe('この関数に各プロパティが0以上のsemverのインスタンスを与えるとtrueを返す。', () => {
        it('Version{ major: 0, minor: 0, patch 0 } を受け取ったときtrueを返す。', () => {
            const isValid = semVersionValidator(new SemVersion(0, 0, 0));
            assert.equal(isValid, true);
        });
    });
    
    describe('この関数に各プロパティが0以上ではないsemverのインスタンスを与えるとfalseを返す。', () => {
        it('Version{ major: null, minor: undefined, patch [] }　を受け取ったときfalseを返す', () => {
            const isValid = semVersionValidator({ major: null, minor: undefined, patch: [] });
            assert.equal(isValid, false);
        });
    });
});

