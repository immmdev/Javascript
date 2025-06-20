// event bubling when we click on the child element the parent get triggered itself
// to prevent this we use enent.stopPropagation();
let list=document.querySelector("ul");
let btn=document.querySelector("button");
let task=document.querySelector("input");
btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=task.value;

    let dlt=document.createElement("button");
    dlt.innerText="delete";
    dlt.classList.add("delete");
   
    item.appendChild(dlt);
    list.appendChild(item);
    task.value=" ";
    
});
let ul=document.querySelector("ul"); // using bublling effect so that event can record on new elemnt added
ul.addEventListener("click",function(event){
    let press=event.target; // using target to find out which elemnt trigger the element
    let par=press.parentElement; // getting the parent element of element that triggerd event
    par.remove(); //removing parent element
})
// let btn2=document.querySelectorAll(".delete");
// console.log(btn2);
//     for(let i=0; i<btn2.length; i++){
//         btn2[i].addEventListener("click",function(){
//             this.parentElement.remove();
//         })
//     }       
        