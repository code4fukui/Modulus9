# Modulus9

チェックディジットアルゴリズム、Modulus9。

## JavaScript (ESモジュール)

- [Modulus9.js](Modulus9.js)

### 使い方

```js
import { Modulus9 } from "https://code4fukui.github.io/Modulus9/Modulus9.js";

console.log(Modulus9.calc("011101042092")); // 3
console.log(Modulus9.check("3011101042092")); // true
console.log(Modulus9.addCheckDigit("011101042092")); // "3011101042092"
```

### テスト

```
deno test
```

### サンプルアプリ

[Modulus9.js test](https://code4fukui.github.io/Modulus9/)

## 関連プロジェクト

- [Verhoeff](https://github.com/code4fukui/Verhoeff)
- [Luhn](https://github.com/code4fukui/Luhn)
- [Modulus11](https://github.com/code4fukui/Modulus11)
- [Modulus10](https://github.com/code4fukui/Modulus10)

## ライセンス

MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
