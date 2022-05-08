const calc = (num) => {
  const s = num.toString();
  let sum = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    const n = parseInt(s[i]);
    if (i % 2) {
      sum += n;
    } else {
      sum += n * 2;
    }
  }
  return 9 - sum % 9;
};

const check = (num) => {
  const s = num.toString();
  return calc(s.substring(1)) == s[0];
};

const addCheckDigit = (num) => {
  if (typeof num == "string") {
    return calc(num) + num;
  }
  throw "num must be string";
};

export const Modulus9 = { calc, check, addCheckDigit };
