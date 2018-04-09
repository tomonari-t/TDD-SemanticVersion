- [x] バージョン番号を示すクラスをつくる。
    - [x] インスタンス生成時、major, minor, patch３つの情報をうけとる。
        - [x] constructor(1, 2, 3)のとき、Version{ major: 1, minor: 2, patch 3 } となる
    - [x] インスタンスは文字列として変換できる
        - [x] Version{ major: 1, minor: 2, patch 3 } のとき、"1.2.3" を得る

- [x] バージョン番号が条件を満たしているか判断する関数をつくる。
    - [x] この関数に各プロパティが0以上のsemverのインスタンスを与えるとtrueを返す。
        - [x] Version{ major: 0, minor: 0, patch 0 } を受け取ったときtrueを返す。
    - [x]  この関数に各プロパティが0以上ではないsemverのインスタンスを与えるとfalseを返す。
        - [x] Version{ major: null, minor: undefined, patch [] }　を受け取ったときfalseを返す

- [x] バージョン番号を示すクラスをつくる。
    - [ ] semVersionValidator関数をつかってインスタンス生成時に検証する
        - [ ] constructor(1, 2, 3)のとき、Version{ major: 1, minor: 2, patch 3 } が生成できる
        - [] Version{ major: null, minor: undefined, patch [] } のとき例外をthrowする

---

バージョンオブジェクトは major, minor, patch フィールドから表現する。
