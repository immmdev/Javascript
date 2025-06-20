// using axios
let url1="https://catfact.ninja/fact"; 
async function getFact(){
    try{
    let res= await axios.get(url1); // axios dirctly give output in the form of json
    let p1=document.querySelector("p");
    let btn=document.querySelector("button");
    btn.addEventListener("click",()=>{
        p1.innerText=res.data.fact;
        btn.innerText="next>>";
        getFact();
    });

    }
    catch(err){
        console.log(err);
        return "no fact found"
    }
};
getFact();




// random images
let url2="https://dog.ceo/api/breeds/image/random";
async function getImage(){
    try{
        let res=await axios.get(url2);
        return res.data.message;

        }
    catch (e){
        console.log(e);
    }
};
let image=document.querySelector("img");
let btn=document.querySelector("button");
btn.addEventListener("click", async ()=>{
    let link= await getImage();
    btn.innerText="next>>";
    console.log(link);
    image.setAttribute("src",link);
});



// Axios; sending headers
const url3="https://icanhazdadjoke.com/";
async function getJoke(){
    try{
        const header={headers:{Accept:"application/json"}};
        let res= await axios.get(url3,header);
        console.log(res.data.joke);
    }
    catch(e){
        console.log(e);
    }
};
getJoke();

