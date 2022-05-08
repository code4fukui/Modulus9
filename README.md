# Modulus9

A check digit algorithm, Modulus9

- [法人番号](https://www.houjin-bangou.nta.go.jp/setsumei/shinsetsuhoujin/)

## in JavaScript (ES module)

- [Modulus9.js](Modulus9.js)

### how to use

```js
import { Modulus9 } from "https://code4fukui.github.io/Modulus9/Modulus9.js";

console.log(Modulus9.calc("011101042092")); // 3
console.log(Modulus9.check("3011101042092")); // true
console.log(Modulus9.addCheckDigit("011101042092")); // "3011101042092"
```

### test

```
deno test
```

### sample app

[Modulus9.js test](https://code4fukui.github.io/Modulus9/)

## related

- [Verhoeff](https://github.com/code4fukui/Verhoeff)
- [Luhn](https://github.com/code4fukui/Luhn)
- [Modulus11](https://github.com/code4fukui/Modulus11)
- [Modulus10](https://github.com/code4fukui/Modulus10)
