const http= require("http");
const express= require("express");
const cors = require("cors");
const socketIO = require("socket.io");
const { Socket } = require("dgram");

const app= express();

app.use(cors());


app.get("/",(req,res)=>{
    res.send("Hello browser");
})

const server = http.createServer(app);

const io = socketIO(server);

io.on("connection",(socket)=>{
    console.log("done");

    socket.on('joined',({user})=>{
        console.log(`${user} has joined`);

    })
})

server.listen(2000,()=>{
    console.log("success");
})