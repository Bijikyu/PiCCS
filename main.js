//Variables
let image;
let turn = 1;
let measure = "px";

//cached element referances
const imageBg = document.getElementById("imageBg");
const mainImage = document.getElementById("mainImage");
const controls = document.getElementById("controls")

//Event listener functions

controls.addEventListener("sl-submit", function(e) {
    console.log(e.target.id);
    console.log(e.detail.formControls[0].value);
    let newImg = document.createElement("img");
    newImg.src = "" + e.detail.formControls[0].value + "";
    newImg.id = "mainImage";
    newImg.alt = "Main Image";
    imageBg.innerHTML = "";
    imageBg.append(newImg);
});

controls.addEventListener("sl-change", function(e) {
    console.log(e.target.id);
    switch (e.target.id) {
        case "toggleCtrl":
            turn *= -1;
            turn === 1 ? imageBg.style.background = "black" : imageBg.style.background = "white";
        case "heightCtrl":
            document.getElementById("mainImage").style.height = `${e.target.value + measure}`;
            break;
        case "widthCtrl":
            document.getElementById("mainImage").style.width = `${e.target.value + measure}`;
            break;
        case "blurCtrl":
            document.getElementById("mainImage").style.filter = `blur(${e.target.value}px)`;
            break;
        case "brightCtrl":
            document.getElementById("mainImage").style.filter = `brightness(${e.target.value}%)`;
            break;
        case "contrastCtrl":
            document.getElementById("mainImage").style.filter = `contrast(${e.target.value}%)`;
            break;
        case "shadowCtrl":
            document.getElementById("mainImage").style.filter = `drop-shadow(${e.target.value}px ${e.target.value}px ${e.target.value}px black)`;
            break;
        case "grayCtrl":
            document.getElementById("mainImage").style.filter = `grayscale(${e.target.value}%)`;
            break;
        case "hueCtrl":
            document.getElementById("mainImage").style.filter = `hue-rotate(${e.target.value}deg)`;
            break;
        case "invertCtrl":
            document.getElementById("mainImage").style.filter = `invert(${e.target.value}%)`;
            break;
        case "opacityCtrl":
            document.getElementById("mainImage").style.filter = `opacity(${e.target.value}%)`;
            break;
        case "satCtrl":
            document.getElementById("mainImage").style.filter = `saturate(${e.target.value}%)`;
            break;
        case "sepiaCtrl":
            document.getElementById("mainImage").style.filter = `sepia(${e.target.value}%)`;
            break;
    }
});
  
