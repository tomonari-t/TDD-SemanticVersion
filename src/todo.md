- [] バージョン番号を示すクラスをつくる。
    - [] コンストラクタで3つの（number: major, minor, patch）引数を受け取る。
        - [] constructor(1, 2, 3)のとき、Version{ major: 1, minor: 2, patch 3 } となる
- [] バージョンオブジェクトは文字列として表現する。
    - [] toString()で0個の引数を受取り、文字列を受け取る
        - [] Version{ major: 1, minor: 2, patch 3 } のとき、"1.2.3" を得る

- [] バージョン番号が条件を満たしているか判断するクラスをつくる。
    - [] semver においてバージョンの各フィールドは0以上の整数である。
        - [] Version{ major: 0, minor: 0, patch 0 } => valid
    - [] semver においてバージョンの各フィールドは0以上の整数以外ではいけない。
        - [] Version{ major: null, minor: undefined, patch [] } => invalid        

---

バージョンオブジェクトは major, minor, patch フィールドから表現する。
