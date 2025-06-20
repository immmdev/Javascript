// 1
let num=Math.random();
num*=6;
num=Math.floor(num);
num+=1;
console.log("Random number between 1-6:",num);
// 2
const car={
    type1:["BMW","6 series","Black"],
    type2:["BMW","4 series","Grey"],
    type3:["BMW","5 series","Blue"],
    type4:["BMW","3 series","Mustard yellow"]

}
console.log("Name of the car:",car.type1[0]);
// 3
const person={
    Name:"anubhav",
    age:"23",
    city:"new york"
}
person.city="massachussets";
person.country="united states";
console.log(person);