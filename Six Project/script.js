let colorcontainerParent = document.getElementById("colorContainer");

for(let i=0;i<32;i++){
    let colorContainer = document.createElement("div");
    colorContainer.classList.add("color-container");
    colorcontainerParent.appendChild(colorContainer);
}

let alldivs = document.querySelectorAll(".color-container");

alldivs.forEach((div) => {
    let newColor = randomColor();
    div.style.backgroundColor = newColor;
    div.innerText = newColor;
});


function randomColor(){
    let str = "0123456789abedef";
    let colorstr = "#";

    for(let i=0;i<6;i++){
        let randomIndex = Math.floor(Math.random()*str.length);
        colorstr += str[randomIndex];
    }
    return colorstr;
}

randomColor();