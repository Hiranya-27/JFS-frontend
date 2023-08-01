import React from "react";
import './Homepage.css';
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";
function Homepage(){
  const name = useSelector((state)=>state.name);
    return(
<>
<div className="menu-btn">
        <i className="fas fa-bars fa-2x" />
      </div>
      <div className="container">
        {/* Nav */}
        <nav className="main-nav">
          <img src="https://tse2.mm.bing.net/th?id=OIP.JBfdU3sdOBTXUIzz5hr18AHaF7&pid=Api&P=0hh&h=180" alt="LMS" className="logo" />
          
      <ul className="main-menu">
       
        <li>
          {/* <a href="#">Courses</a> */}
          <Link to="/courses">Courses</Link>
        </li>
        {/* <select>
              <option>Courses</option>
              <option>Medicine</option>
              <option>Engineering</option>
              <option>Arts</option>
              </select> */}
              <br></br>
              <br></br>
             
        <li>
         <Link to="/about">About</Link>
        </li>
        
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/feed">Feedback</Link>
        </li>
        <div className="hir">
        <li>
          {/* <Link to="/review">{name}</Link> */}
          <a href="#">{name}</a> 
        </li>
        </div>
        {/* <li>
          <Link to="/feed">Feedback</Link>
        </li>  */}
        {/* <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button>
          <i className="fa fa-search">&#x1F50E;&#xFE0E;</i>
        </button>
      </div> */}
         
      </ul>
      
    </nav>
    {/* Showcase */}
    <header className="showcase">
      <h2>Best deals</h2>
      <p>A Broad selection of Courses</p>
      <Link to="/login" className="btn">
        Logout <i className="fas fa-chevron-right" />
      </Link>
    </header>
    {/* Home cards 1 */}
    {/* <section className="home-cards">
      <div>
        <img src="https://tse2.mm.bing.net/th?id=OIP.TqepA3GdLnqY-LenzLP4jAHaEc&pid=Api&P=0&h=180" alt="" />
        <h3>Python for Data Analysis</h3>
        <p>
          Complete Data Science Training: Mathematics, Statistics, Python,Advanced Statistics
        </p>
        <a href="#">
          Join Now <i className="fas fa-chevron-right" />
        </a>
      </div>
      <div>
        <img src="https://i.ibb.co/KjGFHVJ/card2.png" alt="" />
        <h3>Modern Artificial Intelligence</h3>
        <p>
          Harness the power of AI to solve practical and real world business problems.
        </p>
        <a href="#">
          Join Now <i className="fas fa-chevron-right" />
        </a>
      </div>
      <div>
        <img src="https://tse2.mm.bing.net/th?id=OIP.brjYKZ2j0YMWYv1DvTA7FAHaES&pid=Api&P=0&h=180" alt="" />
        <h3>Deep Learning</h3>
        <p>
          The most in-depth course on recommedation systems with Deep Learning.
        </p>
        <a href="#">
          Join Now <i className="fas fa-chevron-right" />
        </a>
      </div>
      <div>
        <img src="https://tse3.mm.bing.net/th?id=OIP.r9w95AXyCGlkP8geYmPyJwHaEK&pid=Api&P=0&h=180" alt="" />
        <h3>Fundamentals of Deep Learning</h3>
        <p>
          This course will start your career in Data Science
        </p>
        <a href="#">
          Join Now <i className="fas fa-chevron-right" />
        </a>
      </div>
    </section> */}
    {/* Xbox */}
    <section className="xbox">
      <div className="content">
        <h2>A Brief History of Animation</h2>
        <p>
          Covering every aspect of Animation, this course is a visual history encompassing a vast range of Animation and Animators.
          Design memorable character with a strong personality and learn how to prepare them for Animation.
        </p>
        <a href="#" className="btn">
          Join Now <i className="fas fa-chevron-right" />
        </a>
      </div>
    </section>
    {/* Home cards 2 */}
    {/* <section className="home-cards">
      <div>
        <img src="https://i.ibb.co/zVqhWn2/card5.png" alt="" />
        <h3>The Secrets of Communicationn</h3>
        <p>Learn to remove bad social programming, build expert social skills, and create a natural state of sparkling confidence.</p>
        <a href="#">
          Join Now <i className="fas fa-chevron-right" />
        </a>
      </div>
      <div>
        <img src="https://i.ibb.co/mGZcxcn/card6.jpg" alt="" />
        <h3>Communication Skills: Effective Business Communication</h3>
        <p>
        A Comprehensive Course on Business Communication and Communication Skills.Become more confident holding conversations about difficult topics.
        </p>
        <a href="#">
          Join Now <i className="fas fa-chevron-right" />
        </a>
      </div>
      <div>
        <img src="https://i.ibb.co/NpPvVHj/card7.png" alt="" />
        <h3>The Complete Computer Basics Guide for Beginners: 2023</h3>
        <p>Computer Basics, Basic Computer Course, Windows 11 Basics, Microsoft Word, PowerPoint, Excel, Basic Computer Skills,2023</p>
        <a href="#">
          Join Now <i className="fas fa-chevron-right" />
        </a>
      </div>
      <div>
        <img src="https://i.ibb.co/LkP4L5T/card8.png" alt="" />
        <h3>Explore Kubernetes</h3>
        <p>
          Learn how Kubernetes works and get started with cloud native app
          development today.Learn Kubernetes in simple, easy and fun way with hands-on coding exercises.
        </p>
        <a href="#">
          Join Now <i className="fas fa-chevron-right" />
        </a>
      </div>
    </section> */}
    {/* Carbon */}
    <section className="carbon dark">
      <div className="content">
        <h2>The Ultimate Guide to Photography</h2>
        <p>
        Become a Master Photographer with just ONE Course. People, Nature, Corporate, Product, Architecture, Special EFX, & More
        </p>
        <a href="#" className="btn">
          Learn More <i className="fas fa-chevron-right" />
        </a>
      </div>
    </section>
    {/* Follow */}
    <section className="follow">
      <p>Follow LMS</p>
      <a href="https://facebook.com">
        <img src="https://i.ibb.co/LrVMXNR/social-fb.png" alt="Facebook" />
      </a>
      <a href="https://twitter.com">
        <img src="https://i.ibb.co/vJvbLwm/social-twitter.png" alt="Twitter" />
      </a>
      <a href="https://linkedin.com">
        <img
          src="https://i.ibb.co/b30HMhR/social-linkedin.png"
          alt="Linkedin"
        />
      </a>
    </section>
    
  </div>
  
</>
    );
}
export default Homepage;