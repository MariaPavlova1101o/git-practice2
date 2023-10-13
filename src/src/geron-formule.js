const AB = 10;
const AC = 11;
const BC = 12;
const p = AB + AC + BC;
const S = Math.sqrt(p * (p - AB) * (p - AC) * (p - BC));
console.log(S);