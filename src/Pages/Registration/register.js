import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import './register.css'

export default function Register() {

    const [username,setUsername] = useState('');
    const [Age,setAge] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [phone,setPhone] = useState('');
    // const [addr,setAddr] = useState('');
    const [files,setFiles] = useState('');

    const [alname,setAlname] = useState('');
    const [alage,setalage] = useState('');
    const [alemail,setalemail] = useState('');
    const [alpassword,setalpassword] = useState('');
    const [alphone,setalphone] = useState('');
    // const [aladdr,setAladdr] = useState('');
    const [alfiles,setalfiles] = useState('');

    const handleValidation = () => {
      if(!files)
      {
        setalfiles("please choose the file")
      }
      else
      {
        setalfiles('')
      }
    //   if(!addr)
    //   {
    //     setAladdr('Please enter the Address')
    //   }
    //   else
    //   {
    //     setAladdr('')
    //   }
        if (!username) {
            setAlname('Please Enter the User Name!')
        }
        else{
            setAlname('')
        }
        if (!Age) {
            setalage('Please Enter your Age!')
        }
        else
        {
            setalage('')
        }
       if (!email) {
          setalemail('Please Enter the Email Id!')
        }
      else
      {
          setalemail('')
      }

      if (!password) {
        setalpassword('Please Enter the Password!')
      }
    else
    {
        setalpassword('')
    }
      if (!phone) {
        setalphone('Please Enter the Phone Number!')
      }
    else
    {
        setalphone('')
    }
      if(Age && username && email && phone)
        {
            alert("Registration Sucessfull")
            setUsername('');
            setEmail('')
            setPhone('')
            setAge('')
            // setAddr('')
        }
       
      };
  

  return (
  <div className="main">
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', flexDirection: 'column', width: '100vw', height: '100%', alignItems: 'center' }}>
        
        <div style={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'row', width: '100%', marginTop: '2em',height:'100%' ,marginBottom:'3em',marginLeft:'35em'}}>
          {/* <img style={{ width: '5em', marginLeft: '2em' ,height:'5em'}} src='https://cdn-icons-png.flaticon.com/512/2209/2209673.png' alt='Logo' /> */}
        <h1 style={{ color: 'black', fontStyle: 'italic', fontSize: '3em',marginLeft: '650px' }}>Registration Page</h1>
          {/* <span style={{ color: '#e9dfce', textDecoration: 'underline', fontStyle: 'italic', marginLeft: '2em', marginRight: '2em', fontSize: '2em' }}>AIP</span> */}
        </div>

       
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%',marginLeft:'35em'}}>
          <div style={{display:'flex',flexDirection:'column',height:'100%',marginLeft: '150px'}}>
            <input value={username}
            onChange={(e) => setUsername(e.target.value)} placeholder='Enter User Name' style={{ fontStyle: 'italic', fontSize: '1em', width: '20em', padding: '0.7em', margin: '1em', borderRadius: 5 }} />
            <span style={{color:'red'}}>{alname}</span>
           
            <input value={Age} onChange={(e) =>setAge(e.target.value) }  placeholder=' Enter Age' style={{ fontStyle: 'italic',width: '20em', fontSize: '1em', padding: '0.7em', margin: '1em' }} />
            <span style={{color:'red'}}>{alage}</span>
            
            <input value={email} onChange={(e) =>setEmail(e.target.value) }
              placeholder='Enter Email Id'
              style={{fontStyle: 'italic', width: '20em', fontSize: '1em', padding: '0.7em', margin: '1em' }}
            />

          <span style={{color:'red'}}>{alemail}</span>

          <input value={password}
            onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' style={{ fontStyle: 'italic', fontSize: '1em', width: '20em', padding: '0.7em', margin: '1em', borderRadius: 5 }} />
            <span style={{color:'red'}}>{alpassword}</span>

            <input value={phone} onChange={(e) =>setPhone(e.target.value) }
             placeholder='Enter Phone Number' style={{fontStyle: 'italic', width: '20em', fontSize: '1em', padding: '0.7em', margin: '1em' }}/>
            <span style={{color:'red'}}>{alphone}</span>

            {/* <textarea value={addr} onChange={(e) =>setAddr(e.target.value) }
             placeholder='Enter Address' style={{ fontStyle: 'italic',width: '25em', fontSize: '1em', padding: '0.7em', margin: '1em' }}/>
            <span style={{color:'red'}}>{aladdr}</span> */}

            {/* <select style={{ fontStyle: 'italic',width: '20em', fontSize: '1em', padding: '0.7em', margin: '1em' }}>
              <option>Select Course Type</option>
              <option>Medicine</option>
              <option>Engineering</option>
              <option>Arts</option>
              <option>Commerce</option>
              <option>Architecture</option>

            </select> */}


            <select style={{ fontStyle: 'italic',width: '20em', fontSize: '1em', padding: '0.7em', margin: '1em',border: '3px solid black'}}>
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Others</option>
              

            </select>

           

            {/* <label style={{color:'white',marginLeft:'1em'}}>Photo Upload</label> */}
            {/* <input type='file'  placeholder='Photo' style={{color:'white', width: '30em', fontSize: '1em', padding: '0.7em', margin: '1em',height:'4em' }}/> */}
            {/* <span style={{color:'red'}}>{alfiles}</span> */}

          </div>
          </div>

         <button onClick={handleValidation} type='submit' style={{ width: '15em', padding: '0.8em', backgroundColor: '#e9dfce', borderRadius: 10, fontStyle: 'italic', fontSize: '1em', marginTop: '1em',marginLeft:'45em',color:'black' }}>Register</button>
       
        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '5em', marginTop: '0.6em',marginLeft:'44em' }}>
          <span style={{ color: 'black' }}>Already have an Account? </span>
          <Link to='/' ><span style={{ color: 'black', marginLeft: '1.5em'}}>Login</span></Link>
        </div>
      </div>
    </div>
    </div>
  );
}