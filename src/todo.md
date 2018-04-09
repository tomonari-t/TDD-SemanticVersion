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
    - [x] 自身の_validate()をつかってインスタンス生成時に検証する
        - [x] constructor(1, 2, 3)のとき、Version{ major: 1, minor: 2, patch 3 } が生成できる
        - [x] Version{ major: null, minor: undefined, patch [] } のとき例外をthrowする

    - [ ] バージョンオブジェクトは等価性比較や大小比較ができる。
        - [ ] Version1.3.9のcompareメソッドにVersion1.4.2のインスタンスを渡されると、-1を返す。
        - [ ] Version10.3.5のcompareメソッドにVersion2.23.1のインスタンスを渡されると、1を返す。
        - [ ] Version1.4.2のcompareメソッドにVersion1.4.2のインスタンスを渡されると、0を返す。



major が 1, minor が 4, patch が 2 のバージョンの文字列表記は "1.4.2"
バージョン 1.4.2 は バージョン 2.1.0 より小さい
バージョン 1.4.2 は バージョン 1.4.2 と等しい
バージョン 1.3.9 は バージョン 1.4.2 より小さい
バージョン 10.3.5 は バージョン 2.23.1 より大きい

---

バージョンオブジェクトは major, minor, patch フィールドから表現する。
