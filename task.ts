let Heading: string= "Q1. Variables: Var, Let, Const"
var x: number = 500;
let y: number = 600;
const z: number = 700;
x = 800;
y = 900;
//z =1000;// Error: Cannot assign to 'z' because it is a constant.

console.log(`Q1. Variables: Var, Let, Const, ${Heading}!`);
console.log("Q1:", x, y, z);

let Heading1: string= "Q2. Data Types: String, Number, Boolean"
let name1: string = "Faizan";
let age1: number = 25;
let isEmployed: boolean = true;
console.log(`Q2. Data Types: String, Number, Boolean, ${Heading1}!`);
console.log("Q2:", `Name: ${name1} is ${age1} years old. Employed: ${isEmployed}`);

let Heading2: string= "Q3. Any Type"
let data: any = "Vanakkam";
console.log(`Q3. Any Type, ${Heading2}!`);
console.log("Q3:", data);

let age: number = 27;
let hasID: boolean = true;
console.log(age >=18 && hasID); // both true
console.log(age >=45 || hasID); // one true
console.log(!hasID); // reverse the value

let a: number = 100;
let b: number = 200;
let c: number = 300;
console.log(a+b+c); // addition
console.log(a-b-c); // subtraction
console.log(a*b*c); // multiplication
console.log(a+b/c); // division
console.log(a%b); // remainder