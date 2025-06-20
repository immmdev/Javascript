// call stack(last in first out) which element goes last come first; it stores the call of function tracks
// visulizing call stack

function one() {
    return 1;
}
function two() {
    return one() + one();
}
function three() {
    let ans = two() + one();
    return two() + one();
}

console.log(three());

// JavaScript is a single-threaded language:
// It has only ONE call stack, so it can execute one command at a time.

// JavaScript is also asynchronous in nature:
// It can handle tasks like setTimeout, HTTP requests, or events
// without blocking the main thread (thanks to the event loop).



// Call Stack        Web API             Callback Queue
// -----------       --------            ----------------
// | log(1) |        setTimeout → Timer →  () => log(2)
// | log(3) |                            [waiting...]
// -----------       --------            ----------------

// [Event Loop moves callback → callstack if space available and then callback is implemented]

// example->
console.log("1");

setTimeout(() => {
    console.log("2");
}, 1000);

console.log("3");

// output->
// 1
// 3
// 2   //<-- printed after 1 second via the event loop

// console.log("1") → added to Call Stack, runs immediately.

// setTimeout(...) → sent to Web API, timer starts in background.

// console.log("3") → added to Call Stack, runs immediately.

// After 1 sec → callback (console.log("2")) goes to Callback Queue.

// Event Loop checks: Call Stack is empty → moves the callback to the stack.

// console.log("2") runs.





// callback hell
let h1 = document.querySelector("h1");

// Function to change color after a delay, then run the next callback
function changeColor(color, delay, nextColor) {
    setTimeout(() => {
        h1.style.color = color;
        if (nextColor) nextColor(); // Call the next color function if provided
    }, delay);
}


let h1_tag = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1_tag.style.color = color;
            resolve(`Color changed to ${color}`);
        }, delay);
    });
}

// Now using chaining to avoid callback hell
changeColor("red", 1000)
    .then((res) => {
        console.log(res); // "Color changed to red"
        return changeColor("green", 1000);
    })
    .then((res) => {
        console.log(res); // "Color changed to green"
        return changeColor("blue", 1000);
    })
    .then((res) => {
        console.log(res); // "Color changed to blue"
    })
    .catch((err) => {
        console.log("Error:", err);
    });


// Chaining the color changes using nested callbacks
changeColor("red", 1000, () => {
    changeColor("orange", 1000, () => {
        changeColor("green", 1000, () => {
            changeColor("yellow", 1000);
        });
    });
});


// A Promise represents the eventual **completion** or **failure**
// of an asynchronous operation, and its **resulting value**.
// A Promise is an object representing the eventual completion or failure of an asynchronous operation,
//  along with its resulting value.
// It is eagerly executed — meaning the logic inside the promise starts immediately when the promise is created.

// A promise has 3 states:
let state = {
    PENDING: "waiting to complete",       // initial state
    FULFILLED: "operation completed",     // resolved successfully
    REJECTED: "operation failed"          // error occurred
};



function dB(data, success, failure) {
    let rN = Math.floor((Math.random() * 10) + 1);
    if (rN > 4) {
        success();
    }
    else {
        failure();
    }
}

dB("hello world", () => {
    console.log("dat1 got saved");
    dB("i m dev singh", () => {
        console.log("data2 saved successfully");
        dB("i m from sitapur", () => {
            console.log("data3  saved successfully");

        }, () => {
            console.log("data3 saving failed due to weak connection")
        });

    }, () => {
        console.log("data2 saving failed due to weak connection")
    });

},
    () => {
        console.log("connection weak failed in saving data")
    });



// promise chaining
function dB(data) {
    return new Promise((resolve, reject) => {
        let rN = Math.floor((Math.random() * 10) + 1);
        if (rN > 4) {
            resolve("data saved successfully");
        }
        else {
            reject("weak single");
        }
    });
}


// .then() is a method on a Promise object that allows you to run code when the promise is fulfilled,
//  and optionally return a new value or another promise.
// then() and catch()
let request = dB("apna college")
    .then((result) => {
        console.log("data1 saved");
        console.log(result);
        return dB("hello world");
    })
    .then((result) => {
        console.log("data2 saved");
        console.log(result);
        return dB("imm_dev");
    })
    .then((result) => {
        console.log(result);
        console.log("data3 saved");
    })
    .catch((error) => {
        console.log("promise rejected")
        console.log(error);
    });


