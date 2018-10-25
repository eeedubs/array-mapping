var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(i => Math.sqrt((i.x * i.x) + (i.y * i.y)));
// i is referring to each array element within input
// i.x is the "x" value in the array spot that x is linked to
// i.y is the "y" value in the array spot that y is linked to
// console.log(result); will log an array of the pythagorean theorem
// var testing1 = input.map(m => m.x);
// console.log(testing1); // [ 3, 12, 8 ]
// var testing1 = input.map(n => n.x);
// console.log(testing2); // [ 4, 5, 15 ]

console.log(result[0] === 5); // true
console.log(result[1] === 13); // true
console.log(result[2] === 17); // true