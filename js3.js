// guessing favorite movie

let favorite="endgame";
let guess=prompt("guess the movie name");
while(guess!=favorite && guess!=="quit"){
    console.log("wrong please try again");
    guess=prompt("guess");
}
if(guess=="endgame"){
    console.log("congrats");
}
else{
    console.log("bhk bsdk");
}

// break (get out out of the loop)   
//  loop with arrays

let fruits=["apple","mango","grapes","banana","pear"];
fruits.unshift("dev");
 for(i=0; i<fruits.length; i++){
    console.log(i,fruits[i]);
 }

//  reverse
for(let i=fruits.length-1; i>=0; i--){
    console.log(i,fruits[i]);
}
 
// traversing nested arrays using loop
heros=[["iron man","captain america","thor"],["balck widow","scarlett witch","america charvis"]]
for(i=0; i<heros.length; i++){
    console.log(`arrays of heroes ${i}`);
    for(j=0; j<heros[i].length; j++){
        console.log(heros[i][j]);
    }
}

// for of loop
let cities=["mumbai","hyderabad","lucknow","calcutta","ahemedabad"];
for(city of cities){
    console.log(city);
}

// nested for of loop
heroes=[["iron man","captain america","thor"],["balck widow","scarlett witch","america charvis"]]
for(list of heroes){
    for(hero of list){
        console.log(hero);
    }
}

// js object literals are used to store keyed literals (key,value)
const item={
    price: "$100000",
    discount:"$10",
    colors:["red","green"]
    
}

// create an object for the twittwr post
const post={
    username:"@devsingh",
    followers:195,
    likes:100,
    tags:["pranshu","anubhav","gopal","nirupam"]
}


const obj={name:"dev",
class:"btech",
1:98,
null:"d",
undefined:"e"
};


// console.log(obj.1); //we define strings as keys most often if not then use sqare bracket to get their value as sqare bracket first convet the kay to string and then get the respective
console.log(obj[1]);

// to upadate the existing key value and add new key
//  object of objects
const stdInfo={
    aman:{grade:"a",city:"lucknow"},
    dev:{grade:"o",city:"sitapur"},
    pranshu:{grade:"a",city:"kannauj"}
}

console.log(stdInfo.aman.grade); //traversing
// array of objects
const classInfo=[
    {name:"dev",calss:12},
    {name:"pranshu",class:13},
    {name:"anubhav",class:14}
]

classInfo[0].name="sachin singh"; //updation
console.log(classInfo[0].name); // traversing
console.log(classInfo[1]); // traversing
console.log(classInfo); 
// generate random integers between 01-10
// console.log(Math.floor((Math.random()*10))+1);
// genrate a random number between 1 to 100
// num=Math.random();
// num*=100;
// num=Math.floor(num);
// num+=1;
// console.log(num);
// genrate between no between 21-29
let num=Math.random();
num*=8;
num=Math.floor(num);
num+=22;
console.log(num);
// genrate between no between 35-46
let numb=Math.random();
numb*=11;
numb=Math.floor(numb);
numb+=36;
console.log(numb);
// create a guessing number game
let maximum=prompt("Enter the maximum number");
let n1um=Math.random();
num*=maximum;
num=Math.floor(num);
num+=1;
let count=0;
let gues1s=prompt("Try to guess the number");
while(true){
    if(guess=="quit"){
        console.log("You quit");
        break;
    }
    if(guess==num){
        console.log("You guessed the number right",num);
        break;
    } else if( guess< num) {
        guess=prompt("Hint:Your guess is too small Try again");
        count++;
    } else {
        guess=prompt("Hint:Your guess is too large Try again");
        count++;
        }
}
console.log("Total attemps:",count);


// functions in js
function hello(){
    console.log("Hello world");
}

hello();

// contruct a function that genrates number between 1 to 6
function rollDice(){
    let rand=Math.random();
    rand*=6;
    rand=Math.floor(rand);
    rand+=1;
    console.log(rand);
}


// function aguments in js
function printName(name,age){
    console.log(`${name}'s age is ${age}.`);
}

printName("sharddha",23);
//  function that prints the average of the three numbers
function averageThree(a,b,c){
    console.log((a+b+c)/3);
}
// function that print the table of any number
function table(t){
    
    for(let i=1; i<=10; i++){
        console.log(i*t);

    }
}
// return : no code is considered after return
function sum(n){
    count=0; //function scope
    for(let j=0; j<=n; j++){ //j has bllock scope
        count+=j;
    }
    return count;
}
// write a function to concatinate the array of strings
function concat(arr){
    str="";
    for(k=0; k<arr.length; k++){
        str+=arr[k];
    }
    return str;
}

// scope 
// function scope: variabes defined inside function not accessble from outside the function
// global scope: variable that can be accessed anywhere in the file
// block scope: variable defined inside a block cannot be accessd outside the block({a=5})
// Lexical scope: means that a function’s scope is determined by where it is defined, not where it is called. Functions have access to variables that are defined in their outer (enclosing) scopes.