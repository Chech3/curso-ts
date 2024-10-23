(() => {
const numbers: (number | string | boolean)[] = [0,1,2,3,"4"]
numbers.push("5");
numbers.push(true); 
console.log(numbers);

const villains: string[] = ["Omega Rojo", "Dormammu", "Duende Verde"];

villains.forEach(v => {
    console.log(v.toUpperCase());
});

})()