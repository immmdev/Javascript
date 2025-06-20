//                  FUNCTIONS
// function : block of code that perform specific task is called function 
// definition of function; function functionName() {
// do something } 
// calling; functionName();

 function hello(){
    console.log("hello");
 }
 hello(); 

//  check whether the person is adult or not
 
function age(){
    let age=prompt("enter your age");
    if(age>=18){
        console.log("you are an adult");
    }
    else{
        console.log("you are under age");
    }

 } 
 age();


//  create a funstion to roll a dice
function dice(){
    let a=Math.random();
    a*=6;
    a=Math.floor(a);
    a+=1;
    console.log(`RANDOM NUMBER IS ${a}`);
}
dice();

// Function arguments; function name(arg1,arg2){}
 function printInfo(name,age){
    console.log(`my name is ${name} and age is ${age}`);
 }
 printInfo("dev",20);


// function to calculate avg
function avg(a,b,c){
    let avg=(a+b+c)/3
    console.log(avg);
}
avg(8,3,3);

// return
function avg(a,b,c){
    let avg=(a+b+c)/3
   return avg // function return avg but not print it & code after return is not considered
}
console.log(avg(5,22,2));

// funstion yhat prints the sum of number till n

function sum(n){
    add=0;
    for(let i=0; i<=n; i++){
        add+=i;
    }
    console.log(`sum is ${add}`);
}
sum(100);

// function to concat the array
function con(a,b){
    c=a.concat(b);
    console.log(c);
}
con([1,2,3,4],[3,5,6,7]);

// function to concatinate array of strings
let str=["dev","singh"]; // global scope
function con(str){
    let a; //  function scope (more precise)
    for(let i=0; i<=str.length; i++){ // i has block scope
        a+=str[i];
        }
    return a
}


// scope is the availability of the variable, objects and function from differnt part of the code
// function, lexical(we can use the variable defines inside function in the function function that is defined in the parent function but converse is not true), block(it is applied on let and const variables){block}
{
    let a=5;   // block scope
    const b=5; //block scope

}
 
function outerFun(){
    let x=5;
    let y=9;
    function innerFunc(){ //this function cannot called outside outer function
        let a=10; // a is not accessble from outer function
        console.log(x); //lexical scope 
        console.log(y);
    }
}

//  we can store any function in a varialble
let a= function f(a,b){
    n=a+b;
    console.log(n)
}

a(7,9);

// higher order function: take one or more functions as arguments returns a function

let greet=function(){
    console.log("happy birthday");
}
function multipleGreet(func,count){ // higher order function
    for(let i=1; i<=count; i++){
        func();
    }
}
multipleGreet(greet,10);


// methods: functions that are defined in an object are called methods

const calculator1={
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return a*b;
    }
}

// method shorthand
const calculator={
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    mul(a,b){
        return a*b;
    }
}

// practice question(6)
// 1) function that returns array greater than a number

function returnArray(arr,n){
    arrN=[];
    for(let i=0; i<=arr.length; i++){
        if(arr[i]>n){
            arrN.push(arr[i]);
            }
    }
    return arrN;
}

// 2) to extract unique characters from string

function uniqueEelement(str){
    let uniq="";
    for(let i=0; i<=str.length; i++){
        if(!uniq.includes(str[i])){
            uniq+=str[i];
        }
    }
    return uniq;

}

// 3) create function that accepts the list of countries as input and returns the country with largest letters
function largestCountry(arr){
    let largest=0;
    for(let i=0; i<=arr.length-1; i++){
        if(arr[i].length>largest){
            largest=arr[i].length;
            j=arr.indexOf(arr[i]);
        }
        
    }
    return arr[j];
}

// 4 genrate random number between a range create function
function randInt(a,b){
    num=Math.random();
    num*=(b-a);
    num=Math.floor(num);
    num+=(a+1);
    console.log(num);

}

// 5 count number of vowels in a string
function noVowels(str){
    let count=0;
    for(let i=0; i<=str.length-1; i++){
        if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u"){
            count++;

        }

    }
    console.log(count);

}