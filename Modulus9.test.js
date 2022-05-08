import * as t from "https://deno.land/std/testing/asserts.ts";
import { Modulus9 } from "./Modulus9.js";

Deno.test("calc", () => {
  t.assertEquals(Modulus9.calc("011101042092"), 3);
  t.assertEquals(Modulus9.calc("000012010038"), 8);
});
Deno.test("check", () => {
  t.assert(Modulus9.check("3011101042092"));
  t.assert(Modulus9.check(3011101042092));
  t.assert(Modulus9.check("8000012010038"));
});
Deno.test("addCheckDigit", () => {
  t.assertEquals(Modulus9.addCheckDigit("011101042092"), "3011101042092");
});
Deno.test("algorithm", () => {
  t.assertEquals(Modulus9.calc("1"), 7);
  t.assertEquals(Modulus9.calc("11"), 6);
  t.assertEquals(Modulus9.calc("111"), 4);
  t.assertEquals(Modulus9.calc("1111"), 3);
  t.assertEquals(Modulus9.calc("00001111"), 3);
  t.assertEquals(Modulus9.calc("11110"), 3);
});
