const port = 80;
console.log(location.host.split(":")[0] + ":" + port);

const socket = io(location.host.split(":")[0] + ":" + port)


const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

const setCanvasParameters = () =>{
    canvas.setAttribute("width",window.innerWidth);
    canvas.setAttribute("height",window.innerHeight -4);
    ctx.fillStyle = "pink";
    ctx.strokeStyle = "pink";
    ctx.lineWidth = 4;
}


window.addEventListener("resize", ()=>{
    setCanvasParameters()

    lineArray.forEach(line =>{

        drawline(line);
    })
})

setCanvasParameters();


let lineArray = [];
let startpos = [];

const drawline = (posArray)=>{
    ctx.moveTo(posArray[0][0],posArray[0][1]);
    ctx.lineTo(posArray[1][0],posArray[1][1]);
    ctx.stroke();

}


canvas.addEventListener("mouseup", event =>{
    const pos = [event.clientX,event.clientY];
    
    if(pos[0] === startpos[0] && pos[1] === startpos[1]){
        socket.emit("click",pos);
    }
    else{
        socket.emit("line",[startpos,pos]);
    }
})

canvas.addEventListener("mousedown", event =>{
    startpos = [event.clientX,event.clientY];
    
})

socket.addEventListener("clickedon", returnPos =>{

    ctx.fillRect(returnPos[0]-2.5,returnPos[1]-2,4,4);
})

socket.addEventListener("lineDrawn", posArray =>{
    drawline(posArray);
    lineArray.push(posArray);
    
})

socket.addEventListener("initLines", initLines =>{
    lineArray = initLines;
    console.log("yeet");
    lineArray.forEach(line =>{

        drawline(line);
    })
})