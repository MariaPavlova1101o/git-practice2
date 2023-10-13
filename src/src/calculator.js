let rublesPerLitr = 100;
let distance = 60;
let litrsPer100km = 20;
let rublesPer100km = rublesPerLitr * litrsPer100km;
let rublesPerkm = rublesPer100km / 100;
console.log('Стоимость поездки: ',distance * rublesPerkm);
