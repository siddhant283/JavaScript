//Use strict
'use strict';

/*Nullish coalescing operator*/

let age1;
console.log(age??"Age not defined");  //Age not defined
age1=21;
console.log(age??"Age not defined"); //21


//Javascript specials

//Code structure

alert('Siddhant') //Siddhant
alert('Kuntal')   //Kuntal

alert('Crest'); alert('Data Systems');  //Crest //Data Systems

//Variables

let age2=21;
age2=23;

const City_name="Ahmedabad";
// City_name="Jaipur"; (will throw error)

var role="SDE";
role="QA";

//typeof data type

typeof role;  //string
typeof age;  //number
typeof City_name; //string

typeof null; //object
typeof undefined; //undefined
typeof function(){};  //function

//Interaction

let guest = prompt("Please enter your name");
let team = prompt("Please enter your team's name");
let intern = confirm("Are you a intern?");

alert(guest+" "+" from"+" "+team+" team" +" is here!");  //siddhant  from sde team is here!


//Operators
//Comparison Operator

if(intern == true)
     alert("He is a " + team + ' intern.');  // He is a sde intern.




//loops
 let counter = 3;

 for(let i=1;i<=counter;i++)
 {
    console.log("This is "+i+" iteration");
 }
//This is 1 iteration
// This is 2 iteration
// This is 3 iteration


 //switch construct
 let experience_months = 12 ;

 switch(experience_months)
 {
     case 6:
         console.log('You are permanent now');
         break;

     case 12:
          console.log('Your bond period is over now.');
          break;

     default:
          console.log('Doesnt match the specifications');
          break;
 }
//Your bond period is over now.

 //Functions

 let mean = average(10,20);

 function average(a,b)
 {
     let result = (a+b)/2;
     return result;
 }

//In context of an expression.

 let average = function(a,b)
 {
     let result = (a+b)/2;
     return result;
 }

//Arrow function

let average = (a,b) => (a+b)/2;

console.log(mean);

//Optional Chaining

const adventurer = {
    name: 'Alice',
    cat: {
      name: 'Dinah'
    }
  };

  const dogName = adventurer.dog?.name;
  console.log(dogName); //  undefined

  const catName = adventurer.cat?.name;
  console.log(catName); // 'Dinah'

  //Object refrence and copying

  let user = { name: 'Siddhant' };

  let admin = user;

  admin.name = 'Kuntal'; // changed by the "admin" reference

  console.log(user.name); // 'Kuntal', changes are seen from the "user" reference
  console.log(user==admin); //'true' , as referencing to the same memory address.

  //Object Method and this

  let user = {
    name: "Siddhant",
    age: 21,

    sayHi() {
      // "this" is the "current object" will refrence at run time to the object.
      console.log(this.name);
    }

  };

  user.sayHi(); // Siddhant

  // Constructor function

  function Student(first, last, id, branch) {
    this.firstName = first;
    this.lastName = last;
    this.id = id;
    this.branch = branch;
  }

  let student_01 = new Student("Siddhant","Kuntal",01,"CSE");
  let student_02 = new Student("Akash","Gupta",02,"CSE");

  console.log(student_01.firstName); //Siddhant
  console.log(student_02.lastName); //Gupta

  //Data types

  //Array Methods

  //Splice

  let arr = ["Siddhant","is","a","SDE","intern","at","Crest"];

  arr.splice(1,1);
  console.log(arr); //["Siddhant", "a", "SDE", "intern", "at", "Crest"]
  console.log(arr.length);// 6

  arr.splice(2,2,"two","elemets");
  console.log(arr); // ["Siddhant", "a", "two", "elemets", "at", "Crest"]
  console.log(arr.length);// 6

  let name_rem = arr.splice(0,1);
  console.log(name_rem); //["Siddhant"]

  //slice

  console.log(arr.slice(0,2));  //(2) ["a", "two"]
  console.log(arr.slice(-2));  // (2) ["at", "Crest"]

  //concat
  let arr2 = [1,2,3];
  console.log(arr2.concat(4,5,6)) //(6) [1, 2, 3, 4, 5, 6]

  //concat array-object with array

 let arrayObject = {
  0: "concat",
  1: "array_object",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};

  console.log( arr2.concat(arrayObject) ); // (5) [1, 2, 3, "concat", "array_object"]


 //Iterate on array elements

 ["Crest","is","a","leading","Company"].forEach(console.log);  /* Crest 0 (5) ["Crest", "is", "a", "leading", "Company"]
                                                                VM2045:1 is 1 (5) ["Crest", "is", "a", "leading", "Company"]
                                                                VM2045:1 a 2 (5) ["Crest", "is", "a", "leading", "Company"]
                                                                VM2045:1 leading 3 (5) ["Crest", "is", "a", "leading", "Company"]
                                                                VM2045:1 Company 4 (5) ["Crest", "is", "a", "leading", "Company"]*/
 //Searching in array

 arr = ["Ahmedabad","Jaipur","Delhi",1,true,3,false,null,undefined];
 console.log(arr.indexOf("Jaipur")); //1
 console.log(arr.indexOf(false)); //6
 console.log(arr.indexOf(3));  //5
 console.log(arr.indexOf(undefined)); //8


 console.log( arr.includes("Surat") ); //false


 let students = [
    {id: 1, name: "Siddhant"},
    {id: 2, name: "Akash"},
    {id: 3, name: "Akhil"}
  ];

  let student_two = students.find(item => item.id == 2);

  console.log(student_two); // Akash

  let id_akhil = students.findIndex(item => item.name == "Akhil");

  console.log(id_akhil+1); // 3

  let bfr_three = students.filter(item => item.id < 3);
  console.log(bfr_three)
//   (2) [{…}, {…}]
// 0: {id: 1, name: "Siddhant"}
// 1: {id: 2, name: "Akash"}
// length: 2
// __proto__: Array(0)



//Array transformation

   //map function

let lengths = ["Ahmedabad","Jaipur","Delhi",1].map(item => item.length);
console.log(lengths); // VM3281:2 (4) [9, 6, 5, undefined]

   //sort function

  let  fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.sort();        // ["Apple", "Banana", "Mango", "Orange"]
  console.log(fruits);
  //reverse function
  fruits.reverse();     // ["Orange", "Mango", "Banana", "Apple"]
  console.log(fruits);

  //Using compare function in sort to use it with numbers.

  var points = [40, 100, 1, 5, 25, 10];
  points.sort((a, b) => a - b);   //(6) [1, 5, 10, 25, 40, 100]

  points = [40, 100, 1, 5, 25, 10];
  points.sort(function(a, b){return b - a});  //(6) [100, 40, 25, 10, 5, 1]

  //split function

  let sentence = 'New Delhi is the Capital of India';

  let arr = sentence.split(' ');
  console.log(arr); //["New", "Delhi", "is", "the", "Capital", "of", "India"]

  sentence = 'New Delhi is the Capital of India';

  arr = sentence.split(' ',2);
  console.log(arr);  //["New", "Delhi"]

  //join function

  words = ['New','Delhi','is','Capital','of','India'];
  console.log(words.join(' ')); //New Delhi is Capital of India

  //reduce iteration

  let arr = [10, 20, 30, 40, 50];

  let result = arr.reduce((mul, current) => mul*current);

  console.log( result ); // 12000000

  //differentiate array from object using isArray

  console.log(Array.isArray({})); // false

  alert(Array.isArray([])); // true

  //iterables

  //using for loop

  for(let char of "Siddhant")
  {
      console.log(char);
  }

//  S
//  i
//  d (2)
//  h
//  a
//  n
//  t

// Using iterable.next()

let myName = "Siddhant";

// does the same as
// for (let char of str) alert(char);

let iterator = myName[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  console.log(result.value); // outputs characters one by one
}

//  S
//  i
//  d (2)
//  h
//  a
//  n
//  t

//Object methods

//Object.assign()

const target = { name: "Siddhant", last: "Kuntal" };
const source = { last: "Singh", branch: "cse" };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Object { name: "Siddhant", last: "Singh", branch: "cse" }

console.log(returnedTarget);
//Object { name: "Siddhant", last: "Singh", branch: "cse" }

//Object.entries()

let object1 = {
    first: 'Siddhant',
    last: 'Kuntal' ,
    id: 12 ,
    branch: 'CSE'
  };

  for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
  }

// > "first: Siddhant"
// > "last: Kuntal"
// > "id: 12"
// > "branch: CSE"


//Object.freeze()


  Object.freeze(object1);
  object1.id=21;
  console.log(object1.id);

  //12 as object1 is freezed it's properties can't be changed or deleted.

//Object.is()

Object.is('siddhant','kuntal')
//false
Object.is(-21,21)
//false
Object.is(-0,0)
//false
Object.is(NaN,0)
//false


//Object.keys()

console.log(Object.keys(object1));
// Array ["first", "last", "id", "branch", "role"]

//Object.seal()

let object2 = {
    first: 'Akash',
    last: 'Gupta' ,
    id: 21 ,
    branch: 'CSE'
  };

 Object.seal(object2);

 object2.last = "khatode";
 console.log(object2.last); //khatode

 delete object2.id; //can't delete as object2 is sealed

 console.log(object2.id); // won't get deleted and output = 21;

 //Object.values()

 console.log(Object.values(object2));  // Array ["Akash", "Gupta", 21, "CSE"]


 //Map

let myMap = new Map()

let keyString = 'a string'
let keyObj    = {}
let keyFunc   = function() {}

// setting the values
myMap.set(keyString, "value associated with 'a string'")
myMap.set(keyObj, 'value associated with keyObj')
myMap.set(keyFunc, 'value associated with keyFunc')


console.log(myMap.get(keyString)) //"value associated with 'a string'"
console.log(myMap.get(keyObj))    //"value associated with keyObj"
console.log(myMap.get(keyFunc))   //"value associated with keyFunc"

console.log(myMap.has(keyString))  // true

console.log(myMap.size) //3

let iteration = myMap.keys()
console.log(iteration.next()) //Object { value: "a string", done: false }

let iteration2 = myMap.values()
console.log(iteration2.next()) //Object { value: "value associated with 'a string'", done: false }

let iteration3 = myMap.entries()
console.log(iteration3.next()) // Object { value: Array ["a string", "value associated with 'a string'"], done: false }


// Set
let set = new Set();

let siddhant = { name: "siddhant" };
let akash = { name: "akash" };
let akhil = { name: "akhil" };
let ankit = {name: "ankit"}

// courses taken, some users come multiple times
set.add(siddhant);
set.add(akash);
set.add(akhil);
set.add(akash);
set.add(akhil);

// set keeps only unique values
console.log( set.size ); // 3

for (let student of set) {
  console.log(student.name);
}

// "siddhant"
// > "akash"
// > "akhil"

console.log(set.has(ankit)) //false

set.delete(akhil)
for (let student of set) {
    console.log(student.name);
  }

//   "siddhant"
//   > "akash"

set.clear() //Clear set


// WeakMap

let siddhant = { name: "Kuntal" };

let map = new WeakMap();
map.set(siddhant, "Kuntal");

john = null; // overwrite the reference


console.log(map.get(siddhant)); //undefined

//thus WeakMap is weak in sense of protecting the refrence of it's keys unlike Map
//which protects the key reference.

//WeakSet -- similar to WeakMap

let set = new WeakSet();

let siddhant = { name: "sid" };
let akash = { name: "aki" };
let akhil = { name: "akhil" };


set.add(siddhant);
set.add(akash);
set.add(akhil);

console.log(set.has(siddhant)); //true

akash = null;

console.log(set.has(akash)); // false


//Destructuring Assignment

let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// 10

console.log(b);
// 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
//Array [30,40,50]

//JSON Methods

//JSON.stringify

let student = {
    name: 'Siddhant',
    age: 21,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
  };

  let json = JSON.stringify(student);

  console.log(typeof json); // string

  console.log(json);  // {"name":"Siddhant","age":21,"isAdmin":false,"courses":["html","css","js"],"wife":null}

//JSON.parse

let studentData = '{"name":"Siddhant","age":21,"isAdmin":false,"courses":["html","css","js"],"wife":null}';

let student = JSON.parse(studentData);

console.log(typeof student); // object

console.log(students);  // {name: "Siddhant", age: 21, isAdmin: false, courses: Array(3), wife: null}


//Date and time
let today = new Date();
console.log(today);    //Sun Jan 24 2021 15:33:42 GMT+0530 (India Standard Time)
console.log(today.getTime());  //1611482622558
console.log(today.getFullYear());  //2021
console.log(today.getMonth()); //0

today.setFullYear(2021,11,02);
console.log(today);  //Thu Dec 02 2021 15:42:48 GMT+0530 (India Standard Time)

let newday = new Date();
newday.setFullYear(2022,0,24);
if (newday > today) {
    console.log("Today is before January 24, 2022.");
  } else {
    console.log("Today is after January 24, 2022.");
  }
//Today is before January 24, 2022


let today_parsed = Date.parse('2021-01-24T15:51:50.417-07:00');

console.log(today_parsed); // 1611528710417  (timestamp)
