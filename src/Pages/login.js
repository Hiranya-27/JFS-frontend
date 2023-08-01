import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import axios from 'axios';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alname,setAlname] = useState('');
  const [alveh,setVeh] = useState('');
  const navigate=useNavigate();
  const check=async(e)=>{
    e.preventDefault();
    try{
      const response=await axios.post(
        "http://localhost:8080/api/v1/auth/authenticate",
        {
          email:email,
          password:password
        }
        ).then((response)=>{
          console.log(response.data);
          localStorage.setItem('token',response.data.token);
          console.log(localStorage.getItem('token'));
        })
        window.alert("Sucessfully Logged In");
        navigate("/home");
      }
      catch(error){
        console.log(error);
        window.alert("Invalid Credentials");
    }
  }
    const handleSubmit = ()=>{
        alert("Form Submitted Successfully")
        setEmail('');
        setPassword('');
    }

  const handleValidation = () => {
    // Event.preventDefault()
    if (email==='' && !password) {
        alert('Please Enter the User Name and Password!')
    }
    else{
        setAlname('')
        handleSubmit()
    }
    if (!password) {
      alert('Please Enter your Password!')
    }
    else
    {
        setVeh('')
    }
    if(!email)
    {
        alert("Please enter the email")
    }
    else{
        setAlname("")
    }
  };


  return (
    
    <div className="main">
    <div className="card">
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', flexDirection: 'column', width: '100vw', height: '100vh', alignItems: 'center' }}>
        <div style={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'row', width: '100%', marginTop: '2em',border:'5px',borderBlockColor:'black' }}>
          {/* <img style={{ width: '4em', marginLeft: '2em' }} src='https://cdn-icons-png.flaticon.com/512/2209/2209673.png' alt='Logo' /> */}
          {/* <span style={{ color: '#e9dfce', textDecoration: 'underline', fontStyle: 'italic', marginLeft: '2em', marginRight: '2em', fontSize: '2em' }}>AIP</span> */}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', marginTop: '-7em' }}>
          <h1 style={{ color: 'black', fontStyle: 'italic', fontSize: '3em', marginBottom: '1.5em',marginLeft:'8em' }}>Learner Edge</h1>
          
          <input 
            required
            id='un'
            placeholder='Email'
            style={{ fontStyle: 'italic', fontSize: '1em', width: '20em', padding: '0.7em', margin: '1em', borderRadius: 5,marginLeft:'25em' ,border: '3px solid black'}}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span style={{color:'red',textAlign:'left'}}>{alname}</span>
         
          <input
            id='vn'
            placeholder='Password'
            type='password'
            style={{ fontStyle: 'italic',width: '20em', fontSize: '1em', padding: '0.7em', margin: '1em',marginLeft:'25em',border: '3px solid black' }}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <span style={{color:'red',textAlign:'left'}}>{alveh}</span>

          <Link to='/home'><button onClick={check} type='submit' style={{ width: '15em', padding: '0.6em', marginTop: '3em', backgroundColor: '#e9dfce', borderRadius: 10, fontStyle: 'italic', fontSize: '1em' ,marginLeft:'25em',color:'black',border: '3px solid black'}}>Login
          </button></Link>
        </div>
       
        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '1em',marginLeft:'25em'}}>
          <span style={{ color: 'black',marginBottom:'100px' }}>Don't have an Account? </span>
          <Link to="/register"><span style={{ color: 'black', marginLeft: '1em' }}>Sign up</span></Link>
        </div>
       
      </div>
    </div>
     </div>
     </div>
  );
}

