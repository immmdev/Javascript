console.log("hello world");
console.log("apna college");
let a=5;
let b=6;
console.log("the sum is",a+b);
let pencilPrice=20;
let erasorPrice=30;
console.log("The sum of both",pencilPrice+erasorPrice,"rupees");
console.log(`The price of both ${pencilPrice+erasorPrice} Rupees`) // template literals helps to add multiple strings easily
 console.log(1==2);
 let age=18;
 console.log("before if");
 if (age>=18){
    console.log("you can vote");
if (age<18){
    console.log("you cannot vote")// run is compulsary doesnot matter whether the above if is true or not
}
 }
 console.log("after if");
 //create a traffic light system base on color
 let color="yellow"
 if ( color==="red"){
    console.log("STOP");
 }
 else{
    console.log("GO");
 }
 // calculate popcorn prices
 let customerDemand="m";
 if (customerDemand==="xl"){
    console.log("price",250)
 }
 else if (customerDemand==="l"){ // run only if is not true
    console.log("price",200)
 }
 else if (customerDemand==="m"){
    console.log("price",100)
 }
 else if (customerDemand==="s"){
    console.log("price",50)
 }
 else {
    console.log("not available!")
 }
 // nested if else statements
 let marks=40;
 if (marks>=33){
    console.log("pass")
    if( marks>=80){
        console.log("outsatanding")
    }
    else{
        console.log("average")
    }
 }
 else {
    console.log("fail")
 }
//  logical operators
let string="aarna";
if ((string[0]==="a") && (string.length>3)){
   console.log("Good string");
}
else{
   console.log("Not good string");
}
// switch statemet
let colour="red"; 

switch(colour){
   case "red":
      console.log("stop!");
      break;
   case "yellow":
      console.log("ready");
      break;
   case "green":
      console.log("green");
      break;
   default:
      console.log("broken light");
}
// practice question
let day=5 ;
switch(day){
   case 1:
      console.log("monday");
      break;
   case 2:
      console.log("tuesday");
      break;
   case 3:
      console.log("wednesday");
      break;
   case 4:
      console.log("thursday");
      break;
   case 5:
         console.log("friday");
         break;
   case 6:
         console.log("saturday");
         break;
   case 7:
         console.log("sunday");
         break;
   default:
      console.log("wrong entry")
   }
// alert and promt
alert("something is wrong");
prompt("please enter your roll no");
console.error("this is an error");
console.warn("this is a warning");
// string methods
// 1) Trim removes blank spaces from both side of the string
let password=prompt("set your password");
console.log(password.trim());
// 2) lower case and upper case
let n="DEvsingh";
console.log(n.toUpperCase());
console.log(n.toLowerCase());
