# Modulus9.js

A checksums, Modulus9 Algorithm in JavaScript (ES module)

- [法人番号](https://www.houjin-bangou.nta.go.jp/setsumei/shinsetsuhoujin/)

## how to use

```js
import { Modulus9 } from "https://code4fukui.github.io/Modulus9.js/Modulus9.js";

console.log(Modulus9.calc("011101042092")); // 3
console.log(Modulus9.check("3011101042092")); // true
console.log(Modulus9.addCheckDigit("011101042092")); // "3011101042092"
```

## test

```
deno test
```

## shortcut

```js
import { Modulus9 } from "https://js.sabae.cc/Modulus9.js";
```

## sample app

[Modulus9.js test](https://code4fukui.github.io/Modulus9.js/)

## related

- [Verhoeff.js](https://github.com/code4fukui/Verhoeff.js)
- [Luhn.js](https://github.com/code4fukui/Luhn.js)
- [Modulu11.js](https://github.com/code4fukui/Modulus11.js)
