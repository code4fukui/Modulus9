# Modulus9

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A check digit algorithm, Modulus9.

## in JavaScript (ES module)

- [Modulus9.js](Modulus9.js)

### How to use

```js
import { Modulus9 } from "https://code4fukui.github.io/Modulus9/Modulus9.js";

console.log(Modulus9.calc("011101042092")); // 3
console.log(Modulus9.check("3011101042092")); // true
console.log(Modulus9.addCheckDigit("011101042092")); // "3011101042092"
```

### Test

```
deno test
```

### Sample app

[Modulus9.js test](https://code4fukui.github.io/Modulus9/)

## Related

- [Verhoeff](https://github.com/code4fukui/Verhoeff)
- [Luhn](https://github.com/code4fukui/Luhn)
- [Modulus11](https://github.com/code4fukui/Modulus11)
- [Modulus10](https://github.com/code4fukui/Modulus10)

## License

MIT License — see [LICENSE](LICENSE).