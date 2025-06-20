// DOM events allow us to respond to user actions like clicks, hovers, keypresses, etc.

// Select the first <button> element
let btn = document.querySelector("button");

// Check the button object in console
console.dir(btn);

// Attach an event handler using .onclick
// ❗ Note: We pass the function reference (btn2), NOT btn2() to avoid calling it immediately
btn.onclick = btn2;

// Function that runs when the button is clicked
function btn2() {
    alert("Why did you click the button?");
}

// Another function (not yet used)
function btn3() {
    alert("Dev Singh");
}






// // many numbers of button
let btns2=document.querySelectorAll("button");
console.dir(btns2);
for(bt of btns2){
    bt.onclick=btn3; // it gives signal if you hover on the button one action is possible at a time
    bt.onmouseenter=btn3;
}

// event listener
// addEventListener element.addEventListener(event,callback);

let btns=document.querySelectorAll("button");
for(btn in btns){
    btn.addEventListener("click",sayhello);
    btn.addEventListener("click",dev);
    
}
function sayhello(){
    alert("say hello");
}
function dev(){
    alert("i m dev");
}



// activity

let btn=document.querySelector("button");
btn.addEventListener("click",function(){
   
    let h3=document.querySelector("h3");
    clr=getRandomColour();
    h3.innerText=getRandomColour();
    console.log("colour updated");
    let div=document.querySelector("div");
    div.style.backgroundColor=clr;
});

 function getRandomColour(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color=`rgb(${red} , ${green} , ${blue} )`;
    return color
 }


// addeventlistener for elements
let paray=document.querySelector("p");
paray.addEventListener("click",function(){
    console.log("your para was clicked")
})
let h3=document.querySelector("h3");
h3.addEventListener("mouseenter",function(){
    console.log("your mouse was hovered on h3");
})


// this in event listner
// this in the eventlistner means the elemet in which we are using it
let para=document.querySelector("p");
para.addEventListener("click",function(){
    console.log("your para was clicked");
    this.style.color="red";});

// keyboard events
// keyboardevent returns the onject where it is categorised into two parts code and key where code signifies the code of the key where as key signifies what was visible on screen
let inputz=document.querySelector("input");
inputz.addEventListener("keydown",function(event){ //to get the keyevent object that is dafault set
    if(event.code=="ArrowUp"){
        console.log("char up");
    }
    if(event.code=="ArrowDown"){
        console.log("char down");
    }
    if(event.code=="ArrowLeft"){
        console.log("char left");
    }
    if(event.code=="ArrowRight"){
        console.log("char right");
    }
})
input.addEventListener("keyup",function(){
    console.log("key was released");
})

// form event extract data from form
let form=document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
    console.dir(form);
    usr=form.elements[0];
    pass=form.elements[1];
    // pass=document.querySelector("#pwd");
    // user=document.querySelector("#usr");
    console.log(usr.value);
    console.log(pass.value);
    alert(`your user name ${user.value} and password ${pass.value}updated `);
   
})


// more events
// change event ; the change event triggers only when element has changed (input select and text area)
// input event ; in tracks the real time change in input select and text area non character keys do not effect
let usera=document.querySelector("#usr");
 usera.addEventListener("change",function(event){ // use press tab or enter
    console.log("value get changed",usera.value);
 });

 let user=document.querySelector("#usr");
 user.addEventListener("input",function(event){ //on each click trigger
    console.log("value get changed",user.value);
 });


// text editor
let inputed=document.querySelector("input");
inputed.addEventListener("input",function(event){
    let para=document.querySelector("p");
    para.innerText=input.value;
    console.log("text updated",input.value);
});

// practice question part 10 js
// 1)
let btn=document.createElement("button");
let body=document.querySelector("body");
btn.innerText="click me";
body.append(btn);
btn.addEventListener("click",function(){
    btn.style.backgroundColor="green";
});

// 2) 
let input=document.createElement("input");
let body1=document.querySelector("body");
input.setAttribute("placeholder","enter your name");
body1.append(input);
input.addEventListener("input",function(){
    if(input.value>="a" && input.value<="z"){
        let h2=document.querySelector("h2");
        h2.innerText=input.value;
    }
});
    
