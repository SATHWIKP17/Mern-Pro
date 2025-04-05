import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import './App.css';
const socket = io('https://mern-pro-6.onrender.com',{ transports: ["websocket", "polling"] });
function Sh() {
    const [mess, setMess] = useState([]);
    const [input, setInput] = useState("");
    const[r_mess,setR_mess]=useState([]);  
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
    function on(e){
        const nn={text:input,time:new Date()}
        setMess((prev)=>[...prev,nn]);
        setInput("");
        socket.emit("me",(nn));
    }
    function oon(e){
        setInput(e.target.value);
    }
    useEffect(() => {
        socket.on("rec_msg", (msg) => {
            setR_mess((prev) => [...prev, msg]);
        });
    
        return () => socket.off("rec_msg");
    }, []); 
    // useEffect(() => {
    //     socket.on("mm", (msg) => {
    //         setMess((prev) => [...prev, msg]);   
    //     });

    //     // Cleanup to prevent multiple bindings
    //     return () => socket.off("mm");
    // }, []);
    // const msgg = [
    //     {
    //         m: "Hello This is Sathwik,Hope You Remembered Me"
    //     },
    //     {
    //         m: "Hello This is Vignesh,Hope You Remembered Me"
    //     },
    //     {
    //         m: "Hello This is Lokesh,Hope You Remembered Me"
    //     }
    // ]

const sorted = [...mess, ...r_mess].sort((a, b) => {
    return new Date(a.time) - new Date(b.time);
});
    return (
        <>
            <div className="dd">
                <header className="hh"><h1 className="hd">Let's Chat</h1></header>
                <br/>
                {sorted.map((i,index)=>(
                    <div className={mess.includes(i)?"hh2":"hhhh"}><div className={mess.includes(i)?"hh3":"hhhh1"}>{i.text}<footer className="fff"><small><sub>{i.time}</sub></small></footer></div></div>))}
                <div className="iii">
                    <input className="iiiii" type="text" name="input" value={input} onChange={oon}/>
                    <button className="bb" type="submit" onClick={on}>🚀</button>
                </div>
            </div>
        </>
    )
}
export default Sh;
