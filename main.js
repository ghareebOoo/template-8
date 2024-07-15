let iconZero = document.querySelector(".plusZero");
let iconOne = document.querySelector(".plusOne");
let iconTwo = document.querySelector(".plusTwo");
let iconThree = document.querySelector(".plusThree");
let iconMinus = document.querySelector(".minus")

let hOne = document.querySelector("h1");
let hTwo = document.querySelector("h2");
let hThree = document.querySelector("h3");
let hFour = document.querySelector("h4");
let fD = document.querySelector(".one");
let sD = document.querySelector(".two");
let tD = document.querySelector(".three");
let uD = document.querySelector(".four");

let newImage = document.createElement("img");
newImage.src = "./imgs/icon-minus.svg"
newImage.alt = ""

let fristIconMinus = newImage.cloneNode("true");
let secondIconMinus = newImage.cloneNode("true");
let thridIconMinus = newImage.cloneNode("true");
let fourIconMinus = newImage.cloneNode("true");
document.body.append(fristIconMinus , secondIconMinus , thridIconMinus , fourIconMinus);
fristIconMinus.style.display= "none";
secondIconMinus.style.display= "none";
thridIconMinus.style.display= "none";
fourIconMinus.style.display= "none";

iconZero.addEventListener("click" , e=>{
    e.target.style.display = "none";
    fristIconMinus.style.display = "block";
    let fHeading = hOne.cloneNode(true);
    fHeading.textContent = "to be a Web Desinger";
    let newFDiv = document.createElement("div");
    newFDiv.className = "one";
    newFDiv.appendChild(fHeading);
    newFDiv.appendChild(fristIconMinus);
    document.body.appendChild(newFDiv);
    fD.after(newFDiv);
    fristIconMinus.onclick = function(){
        newFDiv.style.display = "none";
        e.target.style.display = "block";
    }
})

iconOne.addEventListener("click" , e=>{
    e.target.style.display = "none";
    secondIconMinus.style.display = "block";
    let sHeading = hTwo.cloneNode(true);
    sHeading.textContent = "Yes always for free";
    let newSDiv = document.createElement("div");
    newSDiv.className = "two";
    newSDiv.appendChild(sHeading);
    newSDiv.appendChild(secondIconMinus);
    document.body.appendChild(newSDiv);
    sD.after(newSDiv);
    secondIconMinus.onclick = function(){
        newSDiv.style.display = "none";
        e.target.style.display = "block";
    }
})

iconTwo.addEventListener("click" , e=>{
    e.target.style.display = "none";
    thridIconMinus.style.display = "block";
    let tHeading = hThree.cloneNode(true);
    tHeading.textContent = "Yes you can";
    let newTDiv = document.createElement("div");
    newTDiv.className = "two";
    newTDiv.appendChild(tHeading);
    newTDiv.appendChild(thridIconMinus);
    document.body.appendChild(newTDiv);
    tD.after(newTDiv);
    thridIconMinus.onclick = function(){
        newTDiv.style.display = "none";
        e.target.style.display = "block";
    }
})

iconThree.addEventListener("click" , e=>{
    e.target.style.display = "none";
    fourIconMinus.style.display = "block";
    let uHeading = hFour.cloneNode(true);
    uHeading.textContent = "go to youtube";
    let newUDiv = document.createElement("div");
    newUDiv.className = "two";
    newUDiv.appendChild(uHeading);
    newUDiv.appendChild(fourIconMinus);
    document.body.appendChild(newUDiv);
    uD.after(newUDiv);
    fourIconMinus.onclick = function(){
        newUDiv.style.display = "none";
        e.target.style.display = "block";
    }
})





