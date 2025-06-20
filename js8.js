// What is the DOM?
// DOM stands for Document Object Model.

// Simple Definition:
// The DOM is a programming interface that represents an HTML or XML document as a tree structure,
//  where each part of the document (tags, text, attributes) is a node/object that can be accessed
//  and manipulated using JavaScript.

// Document
//  └── <html>
//       └── <body>
//            ├── <h1>Hello</h1>
//            └── <p>Welcome to the DOM</p>




// Select & change elements using query selectors
// querySelector() allows us to select the **first matching element** using any valid CSS selector

document.querySelector('p');           // selects the first <p> element
document.querySelector('#myid');       // selects the first element with id="myid"
document.querySelector('.myclass');    // selects the first element with class="myclass"

// Select multiple elements
document.querySelectorAll('p');        // selects all <p> elements and returns a NodeList (like an array)







// Select the first <p> element using querySelector
let para1 = document.querySelector('p');

// Use console.dir to inspect the full object structure (as a DOM tree)
console.dir(para1); // shows all properties and methods of the <p> element

// Now, let's manipulate and inspect its content:

// innerText: returns only the visible text (excludes hidden or display:none elements)
console.log(para1.innerText);

// textContent: returns all text in the node, including hidden elements
console.log(para1.textContent);

// innerHTML: returns the full HTML inside the element (including tags)
console.log(para1.innerHTML);

<p><b>Hello</b> <span style="display:none">World</span></p>

// Property	Output
// innerText	"Hello"
// textContent	"Hello World"
// innerHTML	"<b>Hello</b> <span style="display:none">World</span>"







// Select the first <h1> element
let heading = document.querySelector("h1");

// Print the inner HTML content of the <h1>
console.log(heading.innerHTML); //  Output: whatever is inside the <h1>, e.g., "Hello World"

// Update the content of <h1> to plain text
heading.innerHTML = "peter parker";

// Wrap the updated text with formatting tags
heading.innerHTML = `<b><i><u>${heading.innerText}</u></i></b>`;
// Now the <h1> content becomes bold, italic, and underlined

// Select the first <img> element
let img1 = document.querySelector('img');

// Log the current value of the "id" attribute
console.log(img1.getAttribute("id")); // 🧾 Output: the original id of the image, or null if not set

// Set a new id for the image
img.setAttribute("id", "spidyimage");

// Change the image source
img.setAttribute("src", "creation_1.png");







// Select all elements with the class name "oldImg"
let smallImg = document.getElementsByClassName("oldImg");

// Loop through each selected image
for (let i = 0; i <= smallImg.length - 1; i++) {
    
    // Replace the image source with "spiderman_img.png"
    smallImg[i].src = "spiderman_img.png";

    // Log the change to the console
    console.log(`The image ${i} has been replaced.`);
}


let heading=document.querySelector("h1");
console.log(heading.innerHTML);
heading.innerText="peter parker";
heading.innerHTML=`<b><i><u>${heading.innerText}</u></i></b>`;


// manupulating attribute
// attributes like id class style
// obj.getAttribute("att");
// obj.setAttribute("att","val");


let img=document.querySelector('img');
console.log(img.getAttribute("id"));
img.setAttribute("id","spidyimage");
img.setAttribute("src","creation_1.png");

// manupulating style
let heading=document.querySelector('h1');
heading.style.color="purple";

let links=document.querySelectorAll(".box a");
console.log(links); //returns array
for(let i=0; i<links.length;i++){
    links[i].style.color="yellow"; //inline propety get set

}



// manupulating style through classList
let heading=document.querySelector("h1"); //selecting object
console.log(heading.classList); //getting list of class
heading.classList.add("underline"); //adding under line as extra class
console.log(heading.classList);
heading.classList.add("heading"); //adding heading as extra class
console.log(heading.classList);
heading.classList.remove("underline"); //removing underline as class
heading.classList.remove("heading"); //removing heading as claas
console.log(heading.classList);
heading.classList.toggle("underline"); //it check if underline is not a class then add it if it exists already then removes
heading.classList.toggle("green");
console.log(heading.classList);




// navigation we can find the children, parenentElement and siblings by taking object of the attributes
let old=document.querySelector(".images");
console.log(old.children); // returns collection list children
console.log(old.parentElement); //return its parent element that is body
console.log(old.previousElementSibling); //return its previous siblings in form of collection
console.log(old.nextElementSibling); // returns its next sibling in form of collection
// manupulating style by using reference
old.children[0].src="creation_3.jpeg";



// adding element
let btn=document.createElement("button"); //creating element
let box=document.querySelector(".box");
box.appendChild(btn); // appending created element button inside box by creating box object
btn.innerText="click me!";
btn.append("why do you want to click me"); // append can used to add text to selected object and adding elemnt as child to parent as well(prepend)




let parax = document.querySelector('p');
let newElem = document.createElement('span');
newElem.textContent = " Inserted!";

// Insert before the <p>
parax.insertAdjacentElement('beforebegin', newElem);  // → outside, before <p>

// Insert inside <p>, before its content
parax.insertAdjacentElement('afterbegin', newElem);   // → inside <p>, at the top

// Insert inside <p>, after its content
parax.insertAdjacentElement('beforeend', newElem);    // → inside <p>, at the end

// Insert after the <p>
parax.insertAdjacentElement('afterend', newElem);     // → outside, after <p>


// removing element
// Object.remove(); //it is used to remove any element from the webpage
let para=document.createElement("p");
para.innerText="hey i'm red";
para.style.color="red";
body=document.querySelector("body");
body.append(para);
let h3=document.createElement("h3");
h3.innerText="hey i'm blue";
h3.style.color="blue";
body.append(h3);
let division=document.createElement("div");
let h1=document.createElement("h1");
let p=document.createElement("p");
division.classList.add("box");
h1.innerText="i'm in a div";
p.innerText="ME TOO!";
division.append(h1);
division.append(p);
body.append(division);

// practice question part 9
// 1)
btn=document.createElement("button");
body=document.querySelector("body");
btn.append("click me");
body.append(btn);

// 2)
let input=document.createElement("input");
input.setAttribute("placeholder","username");
btn.setAttribute("id","btn");
console.log(btn.getAttribute("id"));
body.append(input);

// 3)
let btn2=document.querySelector("#btn");
btn2.classList.add("btn");

// 4)
let h1=document.createElement("h1");
h1.append("DOM Practice");
h1.innerHTML=`<u>${h1.innerText}</u>`;
h1.classList.add("purple");
body.append(h1);

// 5)

let para=document.createElement("p");
para.innerHTML="Apna college <b>delta</b> practice";
body.append(para);














