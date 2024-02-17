import markerlogo from './resource/markerlogo.png'
import './signup.css'
import React,{useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Signup = () => {
  const [user,setuser]=useState('');
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');
  const [warning,setwarning]=useState('');
  let navigate=useNavigate();
  async function createuser(e){
     e.preventDefault()
     
     let data={
      UserName:user,
      Email:email,
      Password:password
   }
   let response=await axios.post('/create',data);
   if(user==='' || email===''|| password===''){
    setwarning("WARNING: Field value incorrect or empty")
    setTimeout(()=>{
      setwarning("")
      
    },3000) 
   }
     
     else if(response.data!=="Already exist in database"){
        navigate('/')
     }
     else{
      setwarning("WARNING: Already exist in database");
        setTimeout(()=>{
          setwarning("")
          
        },3000) 
        
     }
  }
  return (
    <div className='signup'>
      <div className='signuptab'>
        
      <img  className='marker' src={markerlogo} alt="logo"/>
      <h2>QuickTrip</h2>
      
        <h1>Create Account</h1>
        <ul>
          <li className="text">Uername</li>
          <li><input type='text' className='Crname' placeholder='Enter username' value={user} onChange={e=>{setuser(e.target.value)}}/></li>
          <li className="text">Email</li>
          <li><input type='text' className='CrEmail 'placeholder='Enter email here' value={email} onChange={e=>{setemail(e.target.value)}}/></li>
          <li className='text'>Password</li>
          <li><input type='password' className='Crpass' placeholder='Enter password' value={password} onChange={e=>{setpassword(e.target.value)}}/></li>
          <li><button className="create" onClick={e=>{createuser(e)}}>Create</button></li>
        </ul>
        <p className='warning'>{warning}</p>
      </div>

    </div>
  )
}

export default Signup