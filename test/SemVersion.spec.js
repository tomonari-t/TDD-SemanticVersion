'use strict'

const assert = require('power-assert');
const SemVersion = require('../src/SemVersion');

describe('SemVersionクラス', () => {

    describe('インスタンス生成時、major, minor, patch３つの情報をうけとる。', () => {
        let version;

        beforeEach('前処理', () => {
           version = new SemVersion(1, 2, 3);
        });

        describe('生成に成功するとき、', () => {

            it('SemVersion が生成できる', () => assert.ok(new SemVersion(1, 2, 3)));
            it('major が 1 を得る', () => assert.equal(version.major, 1));
            it('minor が 2 を得る', () => assert.equal(version.minor, 2));
            it('patch が 3 を得る', () => assert.equal(version.patch, 3));
        });


        describe('生成に失敗するとき', () => {
    
            it('major: null, minor: undefined, patch [] のとき例外をthrowする', () => {
                assert.throws(() => new SemVersion(null, undefined, []), TypeError);
            });

            it('major: 1.1, minor: 1.1, patch 1.1 のとき例外をthrowする', () => {
                assert.throws(() => new SemVersion(1.1, 1.1, 1.1), TypeError);
            });
        });
    });

    describe('インスタンスは文字列として変換できる', () => {
        let version;

        before('前処理', () => {
           version = new SemVersion(1, 2, 3);
        });

        it('major: 1, minor: 2, patch 3 のとき、"1.2.3" を得る', () => {
            assert.equal(version.toString(), '1.2.3');
        });
    });

    describe('バージョンオブジェクトは他のバージョンオブジェクトと比較できる', () => {
        let subject;

        beforeEach('前準備', () => {
            subject = new SemVersion(1, 2, 3);
        });

        describe('バージョンオブジェクトは等価比較ができる', () => {
            
            it('Version1.2.3のcompareメソッドにVersion1.2.3のインスタンスを渡されると', () => {
                const target = new SemVersion(1, 2, 3);
                assert.equal(subject.equal(target), true);
            });
            
            it('Version1.2.3のcompareメソッドにVersion1.2.5のインスタンスを渡されると', () => {
                const target = new SemVersion(1, 2, 5);
                assert.equal(subject.equal(target), false);
            });
        });
        
        describe('バージョンオブジェクトは大小比較ができる。', () => {
            
            it('Version1.2.3のcompareメソッドにVersion4.5.6のインスタンスを渡されると、-1を返す。', () => {
                const target = new SemVersion(4, 5, 6);
                assert.equal(subject.compare(target), -1);
            });
            
            it('Version1.2.3のcompareメソッドにVersion1.2.3のインスタンスを渡されると、0を返す。', () => {
                const target = new SemVersion(1, 2, 3);
                assert.equal(subject.compare(target), 0);
            });
            
            it('Version1.2.3のcompareメソッドにVersion0.1.2のインスタンスを渡されると、1を返す。', () => {
                const target = new SemVersion(0, 1, 2);
                assert.equal(subject.compare(target), 1);
            });
        })
    });
});
