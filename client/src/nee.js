import React,{useState}from 'react';
import {useNavigate} from 'react-router-dom';
import io from 'socket.io-client';
const socket=io('http://localhost:3001');
function In(){
    const [msg,setMsg]=useState("");
    const navigate=useNavigate();
    function on(e){
        e.preventDefault();
        socket.emit("msg",msg);
        setMsg("");
        navigate("/l");
    }
    function oo(e){
        setMsg(e.target.value);
    }
    return(
        <>
        <div className="o3">
            <form onSubmit={on}> 
            <input type="text" className="ii" name="msg" value={msg} onChange={oo}/>
            <input type="submit"></input>
            </form>
        </div>
        </>
    )
}
export default In;