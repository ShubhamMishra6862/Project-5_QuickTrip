import './login.css'
import markerlogo from './resource/markerlogo.png'
import React, { useRef,useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const [username,setusername]=useState('');
  const [pass,setpass]=useState('');
  const [warning,setwarning]=useState('');
  let navigate=useNavigate();
  async function requestLogin(e)
  {
    e.preventDefault();
    const data={
       UserName:username,
       Password:pass
    }
    // console.log(data);

    let validate=await axios.post("/validate",data)
    if(validate.data!=="Not Found"){
      // console.log(validate.data);
      const setcookie=await axios.get("/set-cookie/"+validate.data.username+"")   
      // console.log(setcookie);
      navigate('/main');
    }
    else{
      setwarning("ERROR: User not found");
        setTimeout(()=>{
          setwarning("")
          
        },3000) 
    }
  }
  return (
    <div className="login">
      <div className='logintab'>
      <img  className='marker' src={markerlogo} alt="logo"/>
        <h2>QuickTrip</h2>
        <p className="t">Track your Way!</p>
        <h1>Log In</h1>
        
        <ul>
          <li>User: rahul27 | Password: rahul27</li>
          <li className="text">Username</li>
          <li><input type="text" className='Email' value={username} onChange={e=>{setusername(e.target.value)}}/></li>
          <li className="text">Password</li>
          <li><input type="password" className='password' value={pass} onChange={e=>{setpass(e.target.value)}}/></li>
          <li><button className="Login" onClick={e=>{requestLogin(e)}}>Log In</button></li>
          <li className="or">OR</li>
          <li><button className="Create Account" onClick={()=>{navigate('/signup')}}>Create Account</button></li>
        </ul>
        <p className='warning'>{warning}</p>
      </div>
    </div>
  )
}

export default Login
