let main = document.getElementById("number")
let main1 = document.getElementById("number1")
let main2 = document.getElementById("number2")

function getvalue(){
  for(let i = 1;i<=1994;i++){
    setTimeout(()=>{
      main.innerHTML = i;
      main.style.fontSize = "45px"

    },i*3);
  }
  for(let i = 1;i<=2000;i++){
    setTimeout(()=>{
      main1.innerHTML = i;
      main1.style.fontSize = "45px"

    },i*3);
  }
  for(let i = 1;i<=2654;i++){
    setTimeout(()=>{
      main2.innerHTML = i;
      main2.style.fontSize = "45px"

    },i*3);
  }
}
getvalue();

let input = document.getElementById("input-value");
let icon = document.getElementById("icon-search")

icon.addEventListener("click",()=>{
    input.classList.add("trans")
    input.style.opacity = "1"


})


let theame = document.getElementById("icon-color");

theame.addEventListener("click",()=>{
  let mainbody = document.getElementById("main-body")
  if(mainbody.style.backgroundColor=="white"){
    mainbody.style.backgroundColor="black"
    console.log("hello every")
  }
})
