import TestA from "./testA.js"
import TestB from "./testB.js";

import {example} from "./testA.js"

window.onload = () => {
    // const a = new TestA();
    // const b = new TestB();


    // console.log(a);

    let div = document.querySelector(".a");
    // divB.style.backgroundColor = "yellow";
    // console.log(divB)

        let button = document.querySelector("button");
        button.onclick = () => {
            div.style.backgroundColor = "yellow";
            div.style.minWidth = "500px";
            div.textContent = "Isto é a div A com a cor amarela";
            div.style.backgroundImage = "url(https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg)";

        // div.className = div.classeName + 'clickable';
        div.classList.toggle("clickable");

        // div.onmouseover = () => {

        //     div.style.position = "absolute";
        //     div.style.width = "100%";
        //     div.style.height = "100%";

//             div.style.inset = 0;
//             div.style.top = 0;
//             div.style.left = 0;
//             div.style.zIndex = 0;


//                 console.log("herre")
//             }

//             function expandImage() {
//                 var image = document.getElementById("image");
                
//                 if (image.classList.contains("expanded")) {
//                     image.style.width = "auto";
//                     image.style.height = "auto";
//                     image.classList.remove("expanded");
//                 } else {
//                     image.style.width = "100%";
//                     image.style.height = "100%";
//                     image.classList.add("expanded");
//                 }
//             }
            
//         }
//     // let divA = document.querySelectorAll(".a");
//     // console.log(divA[1])
}
} 
