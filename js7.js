// methods for the array


let arr1=[{
    name:"Dev",
    marks:65
},{
    name:"Sachin",
    marks:89
},{
    name:"Anshuman",
    marks:98
}
];


// 1) forEach arr.forEach(function);
arr.forEach((student)=>{ // student mimics the each element of the array
    console.log(student);});  //it is used to traverse each element of the array by using an argument in function

// 2) map; this method is used to create an array with operated with passed function, arr.map(function)
let arr2=[{
    name:"Dev",
    marks:65
},{
    name:"Sachin",
    marks:89
},{
    name:"Anshuman",
    marks:98
}
];
let gpa=arr.map((el)=>{
    return el.marks/10 ; // el mimics the each element of the array
}
)
console.log(gpa);



// 3) filter function; filters out the elemts and store in the new array according to the condition
const ages = [32, 33, 16, 40];

// Example 1: Return an array of ages 18 or over
const result1 = ages.filter((age) => {
    return age >= 18;
});
console.log(result1);


//  4) every; it returns true or false as and

let arr3=[2,4,6];
let a1=arr3.every((n)=>{
    return n%2==0;
})
console.log(a1);


// 5) some; it return true or false as or
let arr4=[2,4,6,7];
let a2=arr4.some((n)=>{
    return n%2==0;
})
console.log(a2);

// 6) arr.reduce(accumulator,element);

// An array of fruit names, with some duplicates
let fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// Using reduce to create an object that stores the count of each fruit
let frequency = fruits.reduce((acc, fruit) => {
    
    // Check if the fruit already exists in the accumulator (acc) object
    // If yes, increment its value by 1
    // If no, set it to 1 (because it's the first time we're seeing it)
    acc[fruit] = (acc[fruit] || 0) + 1;

    // Return the updated accumulator for the next iteration
    return acc;

}, {}); // We start with an empty object as the initial value

// Print the result — an object showing how many times each fruit appears
console.log(frequency);


// pq check each no of array is multiple of 10 or not
arr=[10,20,30,50];
let resu=arr.every((el)=>{
      return el%10==0
        

    }
)
console.log(resu);

// pq to check mininmum of number of array
 function getMin(arr){
    let result=arr.reduce((initial,el)=>{
        if(el<initial){
            return el
        }
        else{
            return initial
        }
    });
    console.log(result);
}

// default value of argument
function sum(a,b=10){ // first argumment can not have default value if following dont have.
    return a+b
} // in case we do not pass any argument during execution it will take default value.



// Spread operator: expands an iterable (like an array) into individual elements
let arr5 = [1, 2, 3, 4, 5, 6, 7, 7, 8];

// This spreads the array into individual values
console.log(...arr); 
// Output: 1 2 3 4 5 6 7 7 8

// Using spread to pass all array elements as arguments to Math.min
console.log(Math.min(...arr)); 
// Output: 1 (the smallest number in the array)

// Using spread to pass all array elements as arguments to Math.max
console.log(Math.max(...arr)); 
// Output: 8 (the largest number in the array)
 

// spread with array literals
// Original array
let arr6 = [1, 2, 3, 4, 5, 6, 7];

// Create a shallow copy of arr6 using the spread operator
let newArray = [...arr6];

// This spreads each element of arr6 into the new array
console.log(newArray); 
// Output: [1, 2, 3, 4, 5, 6, 7]

// Spread operator used on a string
let chars = [..."hello"];

// This breaks the string into individual characters
console.log(chars); 
// Output: ['h', 'e', 'l', 'l', 'o']


let arrup = [1, 2, 3];

// Add 4 to the end
let updated = [...arrup, 4];

console.log(updated); // [1, 2, 3, 4]



// spread with object literals
let obj2 = {
  name: "dev",
  marks: 67
};

// Correct use of spread with object literals
let copy = {
  ...obj2,               // Copies properties from obj2
  id: 123,               // Adds a new property
  country: "India"       // Adds another property
};

console.log(copy);
// Output:
// {
//   name: "dev",
//   marks: 67,
//   id: 123,
//   country: "India"
// }




let arrmy = [10, 20, 30];

let objmy = {
  ...arr
};

console.log(objmy);
// Output: { '0': 10, '1': 20, '2': 30 }




// Rest parameter: gathers all remaining arguments into an array named `arg`
function sum(...arg) {
  // All passed arguments are now stored as an array inside `arg`
  console.log("Received arguments as array:", arg);

  // Reduce the array to calculate the sum of all elements
  return arg.reduce((res, el) => res + el, 0);
}

// Example usage:
console.log(sum(1, 2, 3, 4)); // Output: 10
console.log(sum(5));          // Output: 5
console.log(sum());           // Output: 0




// destructuring: assigning values of array into multiple variables
// Array of names (like winners of a competition)
let arr = ["DEV", "SACHIN", "ANSHUMAN", "KARTIK", "ANGEL", "AARU"];
// Destructuring: extract first 3 names into individual variables,
// and collect the rest into the 'other' array
let [winner, runnerup, secondrunnerup, ...other] = arr;

console.log("Winner:", winner);             // Output: DEV
console.log("Runner-up:", runnerup);        // Output: SACHIN
console.log("2nd Runner-up:", secondrunnerup); // Output: ANSHUMAN
console.log("Other Participants:", other);  // Output: [ 'KARTIK', 'ANGEL', 'AARU' ]



// destructuring object
const obj = {
    name: "Dev",
    marks: 56,
    class: 9,
    subjects: ["hindi", "english", "mathematics", "science"],
    username: "28@ietlucknow",
    pasword: "12345"
};

// Destructuring object properties:
let {
    username,               // Extracts obj.username          → "28@ietlucknow"
    marks: grades,          // Extracts obj.marks as 'grades' → 56
    city = "lucknow",       // No obj.city → assigns default  → "lucknow"
    pasword: secret         // Extracts obj.pasword as 'secret' → "12345"
} = obj;

console.log(username); // Output: 28@ietlucknow
console.log(grades);   // Output: 56
console.log(city);     // Output: lucknow
console.log(secret);   // Output: 12345


// practice questions js part 8
// 1) square and sum the elements of array using the arrow function then find aversge of the array
let pq1=(arr)=>{
    let sqr=arr.map((el)=>el**2);
    let sum=arr.reduce((res,el1)=>res+el1);
    console.log("square othe elements of the array elements",sqr);
    console.log(`the sum of the array elements ${sum}`);
    console.log(`average of the array ${sum/arr.length}`);
}

// 2) craete a new array using the map function each element is 5 more than initial array
function newArr(arr){
    let addNew=arr.map((el)=>el+5);
    console.log(addNew);
}

// 3) create a new array that converts the elements of the existing array to the uppercase
 function charArr(arr){
    let nArr=charArr.map((el)=> el.toUpperCase());
    console.log(nArr);
}

// 4) write a function that take a array and arguments as input and crate a new array that contaion old array annd argumments doubled as well
function conArr(n,...arg){
    let nDouble=arg.map((el)=>el*2);
    newA=n.concat(nDouble);
    console.log(newA);

}
// 5) write a function that joins two objects
function mergeObject(obj1,obj2){
    newObj={...obj1,...obj2};
    console.log(newObj);
}




