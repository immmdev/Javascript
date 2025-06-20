// async function always returns a Promise
async function greet() {
    // Optional: Uncomment to simulate an error
    // throw "404 page not found";

    // This value is automatically wrapped in a resolved Promise
    return "hello!";
}

// Immediately logs the returned Promise object
console.log(greet());
// Output: Promise {<fulfilled>: "hello!"} (or <rejected> if throw is active)


// Handling the Promise result using .then() and .catch()
greet()
    .then((result) => {
        console.log(" Promise was resolved");
        console.log(result); // Output: "hello!"
    })
    .catch((err) => {
        console.log(" Promise was rejected");
        console.log(err); // Output: error message if thrown inside greet()
    });




function getNum() {
    return new Promise((resolve, reject) => { //making function asynchronous
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        }, 1000);
    });
}


// The `await` keyword pauses the execution of its surrounding async function
// until the Promise is settled (i.e., either resolved or rejected)

async function demmo() {
    // Each call to getNum() will wait until the Promise resolves before moving to the next
    await getNum(); // 1️⃣
    await getNum(); // 2️⃣
    await getNum(); // 3️⃣
    await getNum(); // 4️⃣
    await getNum(); // 5️⃣
}


function ranColor(color, delay) {
    let h1 = document.querySelector("h1");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve();
        }, delay);

    })
};
async function changeColor() {
    await ranColor("orange", 1000);
    await ranColor("green", 1000);
    await ranColor("yellow", 1000);
    await ranColor("purple", 1000);

}
changeColor();


// APIs (Application Programming Interfaces)
// Web APIs often return data in JSON (JavaScript Object Notation) format
// JSON is a text-based format for representing structured data
// Converting JSON string to JavaScript object

let jsonRes = '{"fact":"A 2007 Gallup poll revealed that both men and women were equally likely to own a cat.","length":85}';

let validRes = JSON.parse(jsonRes); // Converts JSON string → JS object
console.log(validRes);              // Logs the entire JS object
console.log(validRes.fact);         // Accesses the 'fact' property

// Converting JavaScript object to JSON string
let std = {
    name: "dev",
    class: 10,
    address: "biswan"
};

console.log(JSON.stringify(std));   // Converts JS object → JSON string


// testing api requests
// tools 1)hoppscoth 2)postman
// ajax (asynchronous javascript and XML)
// status code
// 200 ok, 404 not found, 400 bad request, 500 internal server error
// http://universities.hipolabs.com/search?name=india (key value)



// first api request(handling api using fetch)
// API URL (Cat Facts API)
let url2 = "https://catfact.ninja/fact";

// Fetching data using the fetch() API
fetch(url2) // fetch() returns a Promise
    .then((res) => {
        // res.json() also returns a Promise that resolves to a JS object
        return res.json(); //convet to jso
    })
    .then((data) => {
        console.log(data.fact); // Log first cat fact
        return fetch(url2);     // Fetch another cat fact
    })
    .then((res1) => {
        return res1.json();     // Parse the second response to JSON
    })
    .then((data2) => {
        console.log(data2.fact); // Log second cat fact
    })
    .catch((err) => {
        // Any error in any step will be caught here
        console.log("Error occurred:", err);
    });

// using await
let url = "https://catfact.ninja/fact";
async function getFact() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);
    }
    catch (err) {
        console.log(err)
    }
    console.log("i m dev")
}
getFact();

