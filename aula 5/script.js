// XHR:

// window.onload = () => {
// const xhr = new XMLHttpRequest();
// const url = 'data.json';
// xhr.onreadystatechange = function() {
//     if (xhr.readyState === XMLHttpRequest.DONE) {
//         if (xhr.status === 200) {
//             console.log(JSON.parse(xhr.responseText));
//         } else {
//             console.error('Error:', xhr.status);
//         }
//     }
// };
// xhr.open('GET', url);
// xhr.send();
// }

// Fetch:

// window.onload = async () => {
// try {
//     const req = await fetch("data.json");
//     const data = await req.json();
//     console.log(data);
// } catch (error) {
//     throw new Error(error.message);
// }
// }

const serverURL = 'http://localhost:3000';
const getData = async () => {
    try{
        const response = await fetch(`${serverURL}/data`);
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const postData = async () => {
    try{
        const newData = { message: 'New message'};
        const response = await fetch(`${serverURL}/data`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData)
        });console.log("ff");
        const result = await response.json();
        console.log('Server response:', result);
    } catch (error) {
        console.error('Error posting data:', error);
    }
}

const displayData = (data) => {
    const dataContainer = document.querySelector('#data-container');
    dataContainer.innerHTML = `${JSON.stringify(data, null, 2)}`;
}


// const draw = () => {
//     const canvas = document.querySelector('canvas');
//     const ctx = canvas.getContext("2d");

//     const width = canvas.width;
//     const height = canvas.height;
    
//     ctx.fillStyle = "blue";
//     ctx.font = "48px serif";
//     ctx.fillText("Hello Jessies!!", 10, 50);

//     const colors = ["green", "yellow", "blue", "pink", "white", "purple", "orange", "red"];
//     const blockWidht = width / colors.length;

//     for (let i = 0; i < colors.length; i++) {
//         ctx.fillStyle = colors[i];
//         ctx.fillRect(blockWidht * i, 0, blockWidht, height);
//     }
    
//     const vector = {
//         x: 0,
//         y: 0
//     };

//     const drawAnimation = () => {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         ctx.strokeStyle = "rgb(255, 0 , 0 ,0,5)";
//         ctx.lineWidth = 5;
//         ctx.beginPath();
//         ctx.moveTo(0, 0);
//         ctx.lineTo(vector.x, vector.y);
//         ctx.stroke();

//         requestAnimationFrame(drawAnimation);

//         vector.x += 1;
//         vector.y += 1;
//     };

//     drawAnimation();
// }

// window.onload = () => {
//     let animID = null;
//     const button = document.querySelector("button");
//     button.onclick = () => {
//         if (animID) {
//             cancelAnimationFrame(animID);
//             animID = null;
//             button.innerText = "Start";
//         } else {
//             draw();
//             button.innerText = "Stop";
//         }
//     }
// }