const express=require('express');
const app=express();
const path=require('path');
const admin=require('firebase-admin');
const http=require('http');
const cors=require('cors');
const {Server}=require('socket.io');
const server=http.createServer(app);

const io=new Server(server,{
    cors:{
        origin:'*',
        methods:['GET']
    }
});
app.use(express.static(path.join(__dirname,"../client/build")));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// admin.initializeApp({
//     credential:admin.credential.cert(key)
// });
// const firestore=admin.firestore();
io.on("connection", (socket)=>{
    console.log(socket.id);
    socket.on("me",(mess)=>{
        console.log(mess);
       socket.broadcast.emit("rec_msg",mess);
    }); 
    socket.on("disconnect",()=>{
        console.log(`${socket.id}+"Disconnected`  );
    })
});
// app.use(express.static(__dirname,"../frontend/build"));
// app.use(express.json());
app.post("/",(req,res)=>{
});
app.post("/cam",(req,res)=>{
})
// app.post("/l",(req,res)=>{
//     const re=req.body;
// })
app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../client/build","index.html"));
})
// app.post("/cam",(req,res)=>{
// app.listen(3010,"localhost",()=>{
//     console.log("Sucess");
// })
const PORT=process.env.PORT||3010;
server.listen(PORT,"0.0.0.0",()=>{
    console.log("Success");
})
