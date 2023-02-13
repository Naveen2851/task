
import React,{useState} from 'react';

import './index.scss';

function Login() {
  const[state,setstate]=useState({
    username:'',
    password:'',
  });
  const handleChange=(event,id)=>{
    console.log("event",event.target.value,id),
    setstate({
      ...state,
      [id]:event.target.value,
    
    });

  };
  const handleSubmit=()=>{
    const {username,password}=state;
    console.log("username",username);
    console.log("password",password);
  };
  const{username,password}=state;
     return (
    
       <div className='login-container'>
            <h1>LOGIN </h1>
            <div class="con"></div>
            <div className='box1'>
                USER NAME  : <br></br>
                <input className='test1'type="text" placeholder='Enter username' value={username} 
                onChange={(event)=>{handleChange(event,"username")}}></input>
              </div>
            <div className='box2'>
               PASSWORD :   <br></br>
                <input className='test2' type="password" placeholder='Enter Your Password' value={password}
                onChange={(event)=>{handleChange(event,"password")}}></input>
                <br></br>
                <button className='btn' type="submit" onClick={()=>handleSubmit()}>LOGIN</button>
                <p>or sign with:</p>
            </div>
        </div>
        
    )
}

export default Login;



