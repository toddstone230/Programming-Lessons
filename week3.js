const a = 1;
const b = 2;

// ARRAYS
const array = [1,2,3,4,5,6];
const arrayOfLeapYears = [2000, 2004, 2008, 2012, 2016, 2020, 2021];
const crayolaPack = ["red", "orange", "green", "indigo", "violet"];

const people = ["Zeeno", "David", "Ousman", "Jack", "Jill", "Sam", "Helen", "Bob", "Tom", "Bruhhh", "Tomas", "Enrike", "Solomon"];

// console.log(people[2]);
// console.log(crayolaPack[1]);
// console.log(crayolaPack[1] + " and " + crayolaPack[2]);

const message = people[0] + " is teaching " + people[1] + " and " + people[2] + " in " + arrayOfLeapYears[6];
console.log(message);

// console.log("Zeeno,");
// console.log("David");
// console.log("Ousman");
// console.log("Jack");
// console.log("Jill");
// console.log("Sam");
// console.log("Helen");
// console.log("Bob");
// console.log("Tom");
// console.log("Bruhhh");

// people.forEach((name, index) =>{
//     if(index % 2 !=0){
//         console.log(name + " is in position " + (index + 1));
//     }
// });

// TASK
// Print "Zeeno is teaching David and Ousman in 2021"

// "1" IS NOT THE SAME AS 1
// console.log(a + b);
const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
console.log("I live on " + planets[2]);
console.log("The Solar System");
for (let i = 0; i < planets.length; i++) {
    console.log(planets[i]);
}