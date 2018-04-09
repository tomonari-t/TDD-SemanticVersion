'use strict'

const assert = require('power-assert');
const SemVersion = require('../src/SemVersion');

describe('SemVersionクラス', () => {
    let version;

    beforeEach('前処理', () => {
       version = new SemVersion(1, 2, 3);
    });

    describe('インスタンス生成時、major, minor, patch３つの情報をうけとる。', () => {
        describe('new SemVersion(1, 2, 3)のとき、', () => {
            it('major が 1となる', () => assert.equal(version.major, 1));
            it('minor が 2となる', () => assert.equal(version.minor, 2));
            it('patch が 3となる', () => assert.equal(version.patch, 3));
        });

        describe('つかってインスタンス生成時に検証する', () => {
            it('new SemVersion(1, 2, 3)のとき、Version{ major: 1, minor: 2, patch 3 } が生成できる', () => {
                assert.ok(new SemVersion(1, 2, 3));
            });
            
            it('Version{ major: null, minor: undefined, patch [] } のとき例外をthrowする', () => {
                assert.throws(() => new SemVersion(null, undefined, []), TypeError);
            });

            it('Version{ major: 1.1, minor: 1.1, patch 1.1 } のとき例外をthrowする', () => {
                assert.throws(() => new SemVersion(1.1, 1.1, 1.1), TypeError);
            });
        });
    });




    describe('インスタンスは文字列として変換できる', () => {
        it('Version{ major: 1, minor: 2, patch 3 } のとき、"1.2.3" を得る', () => {
            assert.equal(version.toString(), '1.2.3');
        });
    });

    describe('バージョンオブジェクトは等価性比較や大小比較ができる。', () => {
        it('Version1.3.9のcompareメソッドにVersion1.4.2のインスタンスを渡されると、-1を返す。', () => {
            const actual = new SemVersion(1, 3, 9);
            const target = new SemVersion(1, 4, 2);
            assert.equal(actual.compare(target), -1);
        });
    
        it('Version1.4.2のcompareメソッドにVersion1.4.2のインスタンスを渡されると、0を返す。', () => {
            const actual = new SemVersion(1, 4, 2);
            const target = new SemVersion(1, 4, 2);
            assert.equal(actual.compare(target), 0);
        });
    
        it('Version10.3.5のcompareメソッドにVersion2.23.1のインスタンスを渡されると、1を返す。', () => {
            const actual = new SemVersion(10, 3, 5);
            const target = new SemVersion(2, 23, 1);
            assert.equal(actual.compare(target), 1);
        });
    })
});
