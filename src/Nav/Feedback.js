import React, { useState } from 'react';
import './feedback.css';
import { useNavigate } from 'react-router-dom';
import { addFeedback } from '../Api';
import axios from 'axios';
// import { Link } from 'react-router-dom';

const FeedForm = () => {
//   const [email, setEmail] = useState('');
//   const [Name, setName] = useState('');
//   const[Subject,setSubject]=useState('');
//   const[Message,setMessage]=useState('');
const[formdata,setFormdata]= useState({
    email: '',
    name: '',
    feedback: ''
   
  })
  const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    setFormdata({ ...formdata, [e.target.id]: e.target.value })
    // console.log(formdata);
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try{
      const response = await axios.post('http://localhost:8080/api/v1/users/addUserFeedback',formdata, {
        headers: {
          "cache-control": 'no-cache',
          "Authorization": `Bearer ${token}`, // Add the token to the request headers
        },
      });
      alert("Thankyou for your feedback!");
      navigate('/home');
    }
    catch(error){
      alert("failed");
      console.log(error);
    }
  }

  return (
    <div className="div">
    <div className="down">
      <div className="login-form">
        <h2>Feel Free to give your feedback</h2>
        <form onSubmit={handleSubmit} >
          <input
            type="email"
            placeholder="Email"
            id='email'
            onChange={handleChange}
            required
          />
          <br></br>
          
          <input
            type="name"
            placeholder="Name"
            id='name'
            onChange={handleChange}
            required
          />
          {/* <br></br>
          <br></br>
             <input
            type="name"
            placeholder="Subject"
            id='subject'
            onChange={handleChange}
            required
          /> */}
          <br></br>
          
            <textarea type="name" placeholder="Feedback" id='feedback'onChange={handleChange}required/>
          <br></br>
          
          <button type='submit' onChange={handleSubmit}>Submit</button>
          <div className="button">
         
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default FeedForm;