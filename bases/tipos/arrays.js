"use strict";
(() => {
    const numbers = [0, 1, 2, 3, "4"];
    numbers.push("5");
    numbers.push(true);
    console.log(numbers);
    const villains = ["Omega Rojo", "Dormammu", "Duende Verde"];
    villains.forEach(v => {
        console.log(v.toUpperCase());
    });
})();
