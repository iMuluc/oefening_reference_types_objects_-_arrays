// Deel 1 Objecten:
let person = {
    name: 'Mert',
    age: 21,
    evaluations: [7, 10, 9]
};
console.log(person);
console.log(person.name);
console.log(person['age']);
console.log(person.evaluations);


// Deel 2 Arrays:
let kleuren = ["groen", "blauw", "rood"];
console.log(kleuren);
console.log(kleuren.length);
console.log(kleuren[0]);

const laatste = kleuren[kleuren.length - 1];
console.log(laatste);

kleuren.push('geel');
kleuren.push(5);

kleuren.push({ greeting: "Hi ik ben een object" })

console.log(kleuren);

// Deel 3 Bekijk een "real-life" object
/*
1. const laatste = catBreeds[catBreeds.length - 1];
console.log(laatste.name);

2. console.log(catBreeds[0].energy_level);

3. console.log(catBreeds[1].temperament[0]);

4. const laatsteTemperament = catBreeds[2][temperament.length - 1];
console.log(laatsteTemperament);

5. console.log(catBreeds[2].food[0]);
*/