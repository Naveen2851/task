
import React,{useState} from 'react';

import './signup.scss';

function SignUp() {
  const[state,setstate]=useState({
    username:'',
    password:'',
    confirmpassword:'',
  });
  const handleChange=(event,id)=>{
    console.log("event",event.target.value,id),
    setstate({
      ...state,
      [id]:event.target.value,
    
    });

  };
  const handleSubmit=()=>{const {username,password,confirmpassword}=state;
    console.log("username",username);
    console.log("password",password);
    console.log("password",confirmpassword);
  };
  const{username,password,confirmpassword}=state;
     return (
    
       <div className='login-container'>
            <h1>REGISTER  </h1>
            <div class="con"></div>
            <div className='box1'>
               ENTER NAME  : <br></br>
                <input className='test1'type="text" placeholder='Enter Your Name' value={username} 
                onChange={(event)=>{handleChange(event,"username")}}></input>
              </div>
            <div className='box2'>
              NEW PASSWORD :   <br></br>
                <input className='test2' type="password" placeholder='Enter new Password' value={password}
                onChange={(event)=>{handleChange(event,"password")}}></input>
                <br></br>
                </div>
                <div className='box3'>
             CONFIRM PASSWORD :   <br></br>
                <input className='test3' type="password" placeholder='Confirm Password' value={confirmpassword}
                onChange={(event)=>{handleChange(event,"confirmpassword")}}></input>
                <br></br>
                <button className='btn' type="submit" onClick={()=>handleSubmit()}>REGISTER</button>
              
                </div>
        </div>
        
    )
}

export default SignUp;



