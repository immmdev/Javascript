// string methods with argument(some value)
// stringname.method(arg)
// 1) str.indexOf("value") if value is not in the index then returns -1 (index of first letter of value)
let str="iloveu"; 
a=str.indexOf("love");
console.log(a);

// 2) method chaining (computation left to right)
let str2="        newmsg";
let b=str2.trim().toUpperCase();
console.log(b);

// 3) slice(returns part of the sting as the new string) slice(start,end) end is not included
let str3="meracollege";
c=str3.slice(4); // end index asumed len of srt
console.log(c); 
d=str3.slice(-3); // 11-3=8
console.log(d);

// 4) replace (creates new string with replaced value)
e=str.replace("u","coding");
console.log(e);

// 5) repeat (creates new string with repeated value)
f=str.repeat(2);
console.log(f);

// practice questions 
let msg="   help!  ";
g=msg.trim().toUpperCase();
console.log(g);
h="ApnaCollege".slice(4);
i=h.replace("l","t").replace("l","t");
console.log(i);





// array(datastructure) linear collecton of things typeof array object
let stud=["Dev","anubhav","gopal","pranshu"];
console.log(stud);
console.log(stud[0]);

// we can create single array in js with diffrent datatypes 
info=["dev", 28, 9];
console.log(info[0][0]);

// arrays are mutable
let fruits=["apple","mango", "grapes"];
fruits[0]="banana"; //replacing array
console.log(fruits)

// adding elements to array
fruits[10]="pear";
console.log(fruits); // array with 7 empty space in between

// array methods
// 1) push 2)pop(returns value) 3)unshift (add element to start) 4)shift (delete elements from start and returns value)
fruits.push("pineapple");
fruits.pop()
console.log(fruits);

// indexof and incudes (includes return boolean value) elements in array 
console.log(fruits.indexOf("pear"));
console.log(fruits.indexOf("pineapple"));
console.log(fruits.includes("banana"));

// concatination and reverse of arrays (cobine to arrays and reverses the array respectively)
let primary=["red","blue","yellow"];
let secondary=["orange","green","violet"];
allColors=primary.concat(secondary);
console.log(allColors);
allColors.reverse();
console.log(allColors);
 
// slicing of index slice(start,end(ecxlusive)) if not specifies returns the whole array . do not changes original array
console.log(allColors.slice(0,3)); 
console.log(allColors.slice(3)); // from 3 to len of array
console.log(allColors.slice(-3)); //last three elements

// splice is used to remove, replace, add elements in place splice(start,deletecount,item to add with commas) changes are done in original arrays
console.log(allColors.splice(4,1,"pink","grey")); //it remove one element from fouth index and add two elements at 4th index
console.log(allColors);

// sorting of array
let days=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];
days.sort();
console.log(days);
let squares=[2,4,56,7,86,65,43,45,67]; //it first convetss the numbers to string then sort them
squares.sort();
console.log(squares);

// practice questions
let p=['january','july','march','august'];
p.splice(0,2,"july","june");
console.log(p);

let lang=["c","c++","html", "javascript","python","java","c#","sql"];
lang.reverse();
console.log(lang);
console.log(lang.indexOf("javascript"));
// const array :- we can manupulate the value but we canot manuplate the address of the arrray(we cannot assign the the same array to other variable)
// nested array
let nums=[[1,2,4,5],[4,5,6],[6,8,9]];
console.log(nums[0][3]);
// practice quests
let ticTack=[["X",null,"O"],[null,"X",null],["O",null,"X"]];
console.log(ticTack);
ticTack[0][1]="0";
console.log(ticTack);




// loops(iterate a piece of code)
// for(intialising; condition; updation){
//  do something
// }
for(let i=1; i<=5; i++){
    console.log(i*2);
}

// print all odd numbers bw 1 to 15
for(let i=15; i>=1; i=i-2){
    console.log(i);
}
//  print all even nuber bw 2 to 10
for(let i=2; i<=10; i=i+2){
    console.log(i);
}
// print table of 5
for(let i=1; i<=10; i++){
    console.log(i*5);
}
// aking user for table
// let p1=prompt("write your number");
// p1=parseInt(p1);// conerting the string into integer
// for(let i=p1; i<=p1*10; i=i+p1){
    // console.log(i)
// }
// nested for loop 
for(i=1; i<=3; i++){
    for(j=1; j<=3; j++){
        console.log(j);
    }
}
// while(condition){
    // do something
// }
let k=1; //initialisation
while(k<=5) {// condition for entering the looop{
    console.log(k);
    k++; //updation
}











