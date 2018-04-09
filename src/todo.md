- [x] バージョン番号を示すクラスをつくる。
    - [x] インスタンス生成時、major, minor, patch３つの情報をうけとる。
        - [x] constructor(1, 2, 3)のとき、Version{ major: 1, minor: 2, patch 3 } となる
    - [x] インスタンスは文字列として変換できる
        - [x] Version{ major: 1, minor: 2, patch 3 } のとき、"1.2.3" を得る

- [] バージョン番号が条件を満たしているか判断するクラスをつくる。
    - [] semver においてバージョンの各フィールドは0以上の整数である。
        - [] Version{ major: 0, minor: 0, patch 0 } を受け取ったときtrueを返す。
    - [] semver においてバージョンの各フィールドは0以上の整数以外ではいけない。
        - [] Version{ major: null, minor: undefined, patch [] }　を受け取ったときfalseを返す

---

バージョンオブジェクトは major, minor, patch フィールドから表現する。
