const { createServer } = require("http");
const socketIO = require("socket.io");

const port = 80;

const server = createServer().listen(port);
const io = socketIO(server);

lineArray = [];

io.on("connection", socket=>{

    socket.emit("initLines",lineArray);

    console.log(socket.id);

    socket.on("disconnect",() =>{

        console.log("Connection lost to ", socket.id);
    })

    socket.on("click", clickpos =>{

        io.sockets.emit("clickedon",clickpos);
    })

    socket.on("line", posArray =>{
        lineArray.push(posArray);
        io.sockets.emit("lineDrawn",posArray);
    })
})


