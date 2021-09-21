//Difference in Syntax.

//Normal Function 

let add = function(x,y)
{
    return x+y;
};

let sayHi = function()
{
    console.log("Hi! I am Thinkpad.")
}

//Arrow Function

let add = (x,y) => x+y; //reduces typing efforts 

let sayHi = _ => console.log("Hi! I am Thinkpad.") //No paranthesis required if no parameter.


//Argument Binding

//Normal Function 
let myFunc = {  
    showArgs(){ 
     console.log(arguments); 
    } 
   }; 
   myFunc.showArgs(1, 2, 3, 4); //Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]

//Arrow Function 
let myFunc = {  
    showArgs:()=>{ 
     console.log(arguments); 
    } 
   }; 
   myFunc.showArgs(1, 2, 3, 4);  

//    VM68:3 Uncaught ReferenceError: arguments is not defined
//     at Object.showArgs (<anonymous>:3:18)
//     at <anonymous>:6:11

//Arrow functions do not have arguments binding.


//This Binding 

let me = { 
    name: "Siddhant", 
    thisInArrow:() => { 
    console.log("My name is " + this.name); // no 'this' binding 
    }, 
    thisInRegular(){ 
    console.log("My name is " + this.name); // 'this' binding 
    } 
   };
   me.thisInArrow(); //My name is 
   me.thisInRegular(); //My name is Siddhant


//Constructability

let add = function(x,y)
            {
                return (x+y);
            }
let sum = new add(2,3);
console.log(sum);

// 5
// add {}

let add = (x,y) => (x+y);
let sum = new add(2,3);
console.log(sum);

// Uncaught TypeError: add is not a constructor
// at <anonymous>:2:11





