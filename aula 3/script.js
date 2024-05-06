window.onload = () => {

    let animID = null;
    const button = document.querySelector("button");
    button.onclick = ( ) => {
        if(animID) {
            cancelAnimationFrame(animID);
            animID = null;
            button.innerText = "Start";
        } else {
            draw();
            button.innerText = "Stop";
        }
    }
     

    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext("2d");

    const width = canvas.width;
    const height = canvas.height;

    // console.log(width, height);
    
    ctx.fillStyle = "blue";
    ctx.font ="48px serif";
    ctx.fillText("Hello Jessies!!", 10, 50);

    const colors = ["green", "yellow","blue", "pink","white","purple","orange","red"];
    const blockWidht = width / colors.length;

    for (let i = 0; i < colors.length; i++) {
        ctx.fillStyle = colors[i];
        ctx.fillRect(blockWidht*i, 0, blockWidht, height);
    }
    
    const vector = {
        x:0,
        y:0
    } 

    const draw = () => {

    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "rgb(255, 0 , 0 ,0,5)";
    ctx.lineWidth=  5;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(vector.x, vector.y);
    // ctx.lineTo(100,150);
    ctx.stroke();
    
    requestAnimationFrame(draw);

    vector.x += 1;
    vector.y += 1;

    animID = requestAnimationFrame(draw);

    }

    draw();


    // ctx.strokeStyle = "red";
    // ctx.lineWidth=  5;
    // ctx.beginPath();
    // ctx.moveTo(0, 0);
    // ctx.lineTo(10, 50);
    // ctx.lineTo(100,150);
    // ctx.stroke();

    // ctx.fillStyle = colors[0];
    // ctx.strokeStyle = "blue";
    // ctx.lineWidth=  2;    
    // ctx.beginPath();
    // ctx.moveTo(100, 150);
    // ctx.bezierCurveTo(200,200,300,200,400,150);
    // ctx.stroke();


    // ctx.fillStyle = "green";
    // ctx.fillRect(blockWidht*0, 0, blockWidht, height);
    // ctx.fillStyle = "blue";
    // ctx.fillRect(blockWidht*1, 0, blockWidht, height);
    // ctx.fillStyle = "red";
    // ctx.fillRect(blockWidht*2, 0, blockWidht, height);
    // ctx.fillStyle = "yellow";
    // ctx.fillRect(blockWidht*3, 0, blockWidht, height);

}


