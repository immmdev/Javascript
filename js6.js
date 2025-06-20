// "this" keyword refers to an object that is executing current piece of code
let studen={
    eng:23,
    math:34,
    science:56,
    avg(){
        average=(this.eng + this.math + this.science)/3; // this is the object itself
        console.log(average);
    }
}

// "try and catch" statement is used to; try the code that is under doubt of error and put the executable code in catch if error found in try block
// this statement is used to prevent the crash of code if any error occur in between the code and the further code run without any intrupption
console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");
try{
    console.log(a);
} catch(err){
    console.log("a is not defined");
    console.log(err); //printing type of error using catch 
}
console.log("hello");
console.log("hello");
console.log("hello");

// miscellaneous topics
// arrow functions; more compact way to define function in js
const sum = (a,b) => {
    console.log(a+b);
}
const cube = n => {
    return n*n*n;
}

// implicit return
const fun=(a,b) => a*b // in case of single value no need of parenthesis

// set timeout
// set time donot stop the execution of program the statements after time out executed before it
console.log("hi there")
setTimeout(() => {
    console.log("apna college"); //function call back
},4000);
console.log("welcome to");

// set interval
let id1=setInterval(()=>{
    console.log("apna college");
},3000);

console.log("mai yani dev");

let id2=setInterval(()=>{
    console.log("hi");
},2000);

// this for arrow function
// this in an arrow function does not bind to the object.

// It uses this from its lexical scope (where the function was defined, not called).

// Since it’s defined in the global scope, this.name becomes undefined in most environments (or refers to window.name in browsers)
const student={
    name:"Dev",
    class:"btech",
    marks:37,
    getMarks: function(){
        console.log(`marks ${this.marks}`) // here this means student 37
    },
    getName: ()=>{
        console.log(this.name); //undefind
    } //lexical scope (this here has parent scope that is student(global))
}

//  write a arrow function that return sqare of n

const sqare=(n)=>(n*n);
// write a function that prints "hello world" 5 times interval of 2 sec
// 🔁 setInterval(...)
// Starts running the callback every 2 seconds.

// So it prints: "hello world" repeatedly.

// ⏳ setTimeout(...)
// Waits 10 seconds, and then runs clearInterval(id), which:

// Stops the interval.

// No more "hello world" after that.


let id=setInterval(()=>{
    console.log("hello world");
},2000);

setTimeout(()=>{
    clearInterval(id);
},10000);

// practice question js part 7
// 1) write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers
const arrayAverage=(arr)=>{
    tot=0;
    for(let i=0; i<=arr.length-1; i++){
        tot+=arr[i];

    }

    console.log(`the average of the array is ${tot/arr.length}`);
} 

// 2) write an arrow function to check whether the number is even or odd
const oddEven=(n)=>{
    if(n%2==0){
        console.log(`Nunber ${n} is even`);
    }
    else{
        console.log(`number ${n} is odd`);
    }
}

// 3) 
const object1 = {
    message:"hello world",
    logMessage() {
        console.log(this.message);
    }
};
setTimeout(object1.logMessage,1000);

// 4) what is the output of the following code
let length=4;
function callback(){
    console.log(this.length);
}
const object={
    length:5,
    method(callback){
        callback();
    }

};
object.method(callback,1,2);