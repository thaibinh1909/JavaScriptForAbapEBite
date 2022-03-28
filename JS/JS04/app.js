console.log("hello to execution in Node");

console.log();

var a = 10;
var b = 20;
var c = a + b;
console.log(c);
console.log("A is " + a + ". B is " + b + ". And sum is " + c);
console.log(typeof c);

console.log();

var firstName = "Binh";
var lastName = "Luu";
console.log("I am " + lastName + " " + firstName);

console.log();

var noValueVariable;
console.log(typeof noValueVariable);
var noValueString = "";
console.log(typeof noValueString);

console.log();

var fruit1 = "apple" + 42; // apple42
console.log(fruit1);
console.log(typeof fruit1); // string
var fruit2 = 42 + 8 + "apple"; // 50apple
console.log(fruit2);
console.log(typeof fruit2); // string

console.log();

var car = "BMW";
function showCar() {
  console.log(car);
}
showCar();

function blockScopeTest() {
  if (true) {
    var car1 = "Mer";
    let car2 = "Vin";
  }
  console.log(car1);
  // console.log(car2); // ReferenceError: car2 is not defined
}
blockScopeTest();

console.log();

let alphabet = "QWERTYUIOPASDFGHJKLZXCVBNM";
console.log("length is " + alphabet.length);
let greetingStr = "hello friends";
console.log("i is at " + greetingStr.indexOf("i"));
let num1 = 123.456;
console.log("fixed number is " + num1.toFixed(1));

console.log();

let person = firstName + " " + lastName;
console.log(person);
let age = 20;
let person2 = `${lastName} ${firstName} is ${age} years old.`;
console.log(person2);

console.log();

console.log("Comparison operators");

b = 25;
console.log(b == 25); // true
console.log(b == 30); // false
console.log(b == "25"); // true because no type comparison
console.log(b === 25); // true
console.log(b === 30); // false
console.log(b === "25"); // false because of type comparison
console.log(b != 25); // false
console.log(b != 30); // true
console.log(b != "25"); // false because no type comparison
console.log(b !== 25); // false
console.log(b !== 30); // true
console.log(b !== "25"); // true because of type comparison

console.log();

console.log("Logical operators");

a = 10;
b = 20;
console.log(a === 10 && b === 20); // true
console.log(a === 20 && b === 10); // false
console.log(a === 10 && b === 11); // false
console.log(a === 10 || b === 20); // true
console.log(a === 10 || b === 21); // true
console.log(!(a === b)); // true

console.log();

console.log("Conditional operators");

a = 110;
let output = a <= 100 ? `${a} is less than 100` : `${a} is more than 100`;
console.log(output);

a = `hello`;
output =
  a <= 100
    ? `${a} is less then 100`
    : a >= 100
    ? `${a} is more than 100`
    : `${a} is not a number`;
console.log(output);

let company = "SAP";
switch (company) {
  case "MIC":
    console.log("it is Microsoft");
    break;
  case "SAP":
    console.log("it is SAP");
    break;
  default:
    console.log("it is other");
}

console.log();

const newWayFunction = () => {
  console.log(`first time define function with () => {}`);
};
newWayFunction();

console.log();

const newWayFunction2 = (param1) => {
  if (param1) {
    console.log(param1);
  } else {
    console.log(`param1 is ${typeof param1}`);
  }
};
newWayFunction2();

const newFunction3 = (par1, par2) => {
  if (typeof par1 === "number" && typeof par2 === "number") {
    return par1 + par2;
  } else {
    return `at least a parameter is not a number`;
  }
};
let sum = newFunction3(2, 7);
console.log(sum);

console.log();

console.log(`Closures`);

// parent wrapper
const wrapperF = (para1) => {
  let valueToAdd = para1; // new "private" variable
  // inner function does the real things
  return (calculator = (para2) => {
    return (para2 += valueToAdd);
  });
};
const sumCal6 = wrapperF(6); // initiate (an instance) number 6
console.log(sumCal6); //[Function: calculator]
console.log(sumCal6(1)); // 6 += 1

const sumCal10 = wrapperF(10); // initiate 10
console.log(sumCal10(45)); // 10 *= 45

console.log();

console.log(`Array methods`);

let numberArray = [3, 7, 5, 1];
numberArray.sort((a, b) => a - b); // asc
console.log(numberArray);
numberArray.sort((a, b) => b - a); // des
console.log(numberArray);

console.log(numberArray.indexOf(5));

let fiveExist = numberArray.some((Element) => Element === 5);
console.log(fiveExist);

numberArray.push(11);
console.log(numberArray);

numberArray.splice(1, 2, 9); // at index 1, delete 2 object, insert number 9
console.log(numberArray);

console.log();

console.log(`Object methods`);

let carArray = [
  { make: "Mercedes", model: "A Class AMG", colour: "Black", topSpeed: 168 },
  { make: "BMW", model: "M Series", colour: "White", topSpeed: 150 },
  { make: "Audi", model: "S4", colour: "Blue", topSpeed: 173 },
];
console.table(carArray);
console.log(carArray[1].make); // BMW
console.log(carArray[2]);

console.log();

console.log(`JSON methods`);

var jsObject = JSON.parse(
  '{ "make": "Mercedes", "model": "A Class AMG", "colour": "Black", "trimOptions": ["Leather", "Cloth", "Alcantara"]}'
);
console.log(jsObject);
console.log(typeof jsObject); // object
console.log(jsObject.model); // A Class AMG
console.log(jsObject.trimOptions[2]); // Alcantara

let jsonData = JSON.stringify(jsObject);
console.log(typeof jsonData);
console.log(jsonData);

var oModel = new ODataModel("http://url.com/sap/opu/odata/GWSAMPLE_BASIC/?$format=json");
