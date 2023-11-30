let marval_Hero = ["Irorman", "Spiderman", "Doctor strainge"];
let Dc_heros = ["Batman", "Superman", "Flash"];

//let DC_Push = marval_Hero.push(Dc_heros);
// console.log(DC_Push);
console.log("========================");
let all_heros = [...marval_Hero, ...Dc_heros]                 // Modern Concatination
console.log(all_heros);
console.log(typeof(all_heros));

console.log(Array.isArray("Arpit"));            // Check is array or not ?
console.log(Array.from("Prince"));          // Element conver into Array.

let num1 = 100;
let num2 = 1000;
let num3 = 10000;
console.log(Array.of(num1,num2,num3));