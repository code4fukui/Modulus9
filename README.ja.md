# Modulus9

Modulus9はチェックディジット算出アルゴリズムです。チェックディジットを計算、検証、付与することができます。

## 機能

- 数値のチェックディジットの計算
- チェックディジットの検証
- チェックディジットの付与

## 使い方

```js
import { Modulus9 } from "https://code4fukui.github.io/Modulus9/Modulus9.js";

console.log(Modulus9.calc("011101042092")); // 3
console.log(Modulus9.check("3011101042092")); // true
console.log(Modulus9.addCheckDigit("011101042092")); // "3011101042092"
```

## テスト

```
deno test
```

## ライセンス

MIT License