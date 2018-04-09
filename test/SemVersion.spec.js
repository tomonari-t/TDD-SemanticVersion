'use strict'

const assert = require('power-assert');
const SemVersion = require('../src/SemVersion');

describe('SemVersionクラス', () => {
    let version;

    beforeEach('前処理', () => {
       version = new SemVersion(1, 2, 3);
    });

    describe('インスタンス生成時、major, minor, patch３つの情報をうけとる。', () => {
        it('new SemVersion(1, 2, 3)のとき、Version{ major: 1, minor: 2, patch 3 } となる', () => {
            assert.equal(version.major, 1);
            assert.equal(version.minor, 2);
            assert.equal(version.patch, 3);
        });
    });

    describe('インスタンスは文字列として変換できる', () => {
        it('Version{ major: 1, minor: 2, patch 3 } のとき、"1.2.3" を得る', () => {
            assert.equal(version.toString(), '1.2.3');
        });
    });

    it('new SemVersion(1, 2, 3)のとき、Version{ major: 1, minor: 2, patch 3 } が生成できる', () => {
        const actual = new SemVersion(1, 2, 3)
        assert.ok(actual)
    })

    it('Version{ major: null, minor: undefined, patch [] } のとき例外をthrowする', () => {
        assert.throws(() => new SemVersion(null, undefined, []), Error);
    })
});